import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>Sorry</h1>
            <p>The Page is not Found!</p>
            <Link to = '/'>Back to the Homapage.</Link>
        </div>
     );
}
 
export default NotFound;