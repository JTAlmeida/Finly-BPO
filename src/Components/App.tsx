import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Home from "./Home/Home";

ReactGA.initialize("G-S7HGC524MB");

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
