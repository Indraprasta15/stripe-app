import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <Link to="/pay">
        <button className="button">Go to PAYMENT</button>
      </Link>
    </div>
  )
}

export default Home;