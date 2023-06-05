import Question from "./pages/Question";
import Result from "./pages/Result";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Question />} />
          <Route path="quiz" element={<Question />} />
          <Route path="results" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
