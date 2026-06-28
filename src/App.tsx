import { Navigate, Route, Routes } from "react-router-dom";

import DevPage from "@/pages/dev";
import MusicPage from "@/pages/music";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dev" replace />} />
      <Route path="/dev" element={<DevPage />} />
      <Route path="/music" element={<MusicPage />} />
    </Routes>
  );
}
