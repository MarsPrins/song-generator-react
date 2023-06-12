import NotFound from "./pages/NotFound";
import Question from "./pages/Question";
import Result from "./pages/Result";
import Share from "./pages/Share";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <span className="overlay"></span>

      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/">
          <Route index element={<Question />} />
          <Route path="quiz" element={<Question />} />
          <Route path="results" element={<Result />} />
          <Route path="shared" element={<Share />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
