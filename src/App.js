import { Route, Routes } from "react-router";
import { Main } from "./Pages/Main";
import { Moletons } from "./Pages/Moletons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/moletons" element={<Moletons />} />
    </Routes>
  );
}

export default App;
