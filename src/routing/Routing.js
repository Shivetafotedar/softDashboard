import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import Statement from "../screens/statement/Statement";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statement" element={<Statement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
