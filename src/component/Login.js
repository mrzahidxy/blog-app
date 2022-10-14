import { useState, useContext } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../AuthContextAPI";
import { useHistory } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);


  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();


    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log("working1");
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        history.push("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login" >    
      <form className="login-from">
      <p>To continue Pleas Log in!</p>
        <input
          type="text"
          value={user.email}
          name="email"
          onChange={(e) => inputHandler(e)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={(e) => inputHandler(e)}
          placeholder="Password"
        />
        <button onClick={loginHandler} >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
