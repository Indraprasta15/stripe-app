import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pay from "./Pay";
import Success from "./Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  )
}

export default App;