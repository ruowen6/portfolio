import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

const basename = import.meta.env.BASE_URL.replace(/\/$/, ""); 
// dev: "/" → ""（等于不设 basename）
// prod: "/portfolio/" → "/portfolio"

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
