import "./Style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./page/Profil";
import Error from "./page/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
