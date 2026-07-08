import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const IboPlayer = lazy(() => import("./pages/IboPlayer.tsx"));
const Funplay = lazy(() => import("./pages/Funplay.tsx"));
const InstalarIboPlayer = lazy(() => import("./pages/InstalarIboPlayer.tsx"));
const ConfigurarIboPlayer = lazy(() => import("./pages/ConfigurarIboPlayer.tsx"));
const AtivarIboPlayer = lazy(() => import("./pages/AtivarIboPlayer.tsx"));
const SmartTv = lazy(() => import("./pages/SmartTv.tsx"));
const Suporte = lazy(() => import("./pages/Suporte.tsx"));

const lazyRoute = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ibo-player" element={lazyRoute(IboPlayer)} />
      <Route path="/funplay" element={lazyRoute(Funplay)} />
      <Route path="/instalar-ibo-player" element={lazyRoute(InstalarIboPlayer)} />
      <Route path="/configurar-ibo-player" element={lazyRoute(ConfigurarIboPlayer)} />
      <Route path="/ativar-ibo-player" element={lazyRoute(AtivarIboPlayer)} />
      <Route path="/smart-tv" element={lazyRoute(SmartTv)} />
      <Route path="/suporte" element={lazyRoute(Suporte)} />
      <Route path="*" element={lazyRoute(NotFound)} />
    </Routes>
  </BrowserRouter>
);

export default App;
