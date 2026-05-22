import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const IboPlayer = lazy(() => import("./pages/IboPlayer.tsx"));
const Funplay = lazy(() => import("./pages/Funplay.tsx"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/ibo-player"
        element={
          <Suspense fallback={null}>
            <IboPlayer />
          </Suspense>
        }
      />
      <Route
        path="/funplay"
        element={
          <Suspense fallback={null}>
            <Funplay />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
