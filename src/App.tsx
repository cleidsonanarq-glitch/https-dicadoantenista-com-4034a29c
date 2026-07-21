import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import CookieConsent from "./components/CookieConsent.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PoliticaDePrivacidade = lazy(() => import("./pages/PoliticaDePrivacidade.tsx"));
const IboPlayer = lazy(() => import("./pages/IboPlayer.tsx"));
const Funplay = lazy(() => import("./pages/Funplay.tsx"));
const InstalarIboPlayer = lazy(() => import("./pages/InstalarIboPlayer.tsx"));
const ConfigurarIboPlayer = lazy(() => import("./pages/ConfigurarIboPlayer.tsx"));
const AtivarIboPlayer = lazy(() => import("./pages/AtivarIboPlayer.tsx"));
const AtivarIboPlayerPro = lazy(() => import("./pages/AtivarIboPlayerPro.tsx"));
const AdicionarListaIboPlayerPro = lazy(() => import("./pages/AdicionarListaIboPlayerPro.tsx"));
const SmartTv = lazy(() => import("./pages/SmartTv.tsx"));
const Suporte = lazy(() => import("./pages/Suporte.tsx"));
const AtivarIboPlayPro = lazy(() => import("./pages/AtivarIboPlayPro.tsx"));
const AtivarStreamPlayer = lazy(() => import("./pages/AtivarStreamPlayer.tsx"));
const ConfigurarStreamPlayer = lazy(() => import("./pages/ConfigurarStreamPlayer.tsx"));
const DownloadStreamPlayer = lazy(() => import("./pages/DownloadStreamPlayer.tsx"));
const StreamPlayerSmartTv = lazy(() => import("./pages/StreamPlayerSmartTv.tsx"));
const SuporteStreamPlayer = lazy(() => import("./pages/SuporteStreamPlayer.tsx"));
const AtivarLicencaIboPlayer = lazy(() => import("./pages/AtivarLicencaIboPlayer.tsx"));
const SuporteIboPlayerSmartTv = lazy(() => import("./pages/SuporteIboPlayerSmartTv.tsx"));

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
      <Route path="/ativar-ibo-player-pro" element={lazyRoute(AtivarIboPlayerPro)} />
      <Route path="/adicionar-lista-ibo-player-pro" element={lazyRoute(AdicionarListaIboPlayerPro)} />
      <Route path="/smart-tv" element={lazyRoute(SmartTv)} />
      <Route path="/suporte" element={lazyRoute(Suporte)} />
      <Route path="/ativar-stream-player" element={lazyRoute(AtivarStreamPlayer)} />
      <Route path="/configurar-stream-player" element={lazyRoute(ConfigurarStreamPlayer)} />
      <Route path="/download-stream-player" element={lazyRoute(DownloadStreamPlayer)} />
      <Route path="/stream-player-smart-tv" element={lazyRoute(StreamPlayerSmartTv)} />
      <Route path="/suporte-stream-player" element={lazyRoute(SuporteStreamPlayer)} />
      <Route path="/ativar-licenca-ibo-player" element={lazyRoute(AtivarLicencaIboPlayer)} />
      <Route path="/suporte-ibo-player-smart-tv" element={lazyRoute(SuporteIboPlayerSmartTv)} />
      <Route path="/politica-de-privacidade" element={lazyRoute(PoliticaDePrivacidade)} />
      <Route path="*" element={lazyRoute(NotFound)} />
    </Routes>
    <CookieConsent />
  </BrowserRouter>
);

export default App;
