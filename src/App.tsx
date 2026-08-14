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
const IptvSmartTvSamsung = lazy(() => import("./pages/IptvSmartTvSamsung.tsx"));
const IptvSmartTvLg = lazy(() => import("./pages/IptvSmartTvLg.tsx"));
const IptvSmartersSamsung = lazy(() => import("./pages/IptvSmartersSamsung.tsx"));
const IptvSmartersLg = lazy(() => import("./pages/IptvSmartersLg.tsx"));
const AtivarIptvSmartersPro = lazy(() => import("./pages/AtivarIptvSmartersPro.tsx"));
const SmartersPlayer = lazy(() => import("./pages/SmartersPlayer.tsx"));
const AtivarSmartersPlayer = lazy(() => import("./pages/AtivarSmartersPlayer.tsx"));
const LicencaSmartersPlayer = lazy(() => import("./pages/LicencaSmartersPlayer.tsx"));
const ConfigurarSmartersPlayer = lazy(() => import("./pages/ConfigurarSmartersPlayer.tsx"));
const SmartersPlayerSamsung = lazy(() => import("./pages/SmartersPlayerSamsung.tsx"));
const SmartersPlayerLg = lazy(() => import("./pages/SmartersPlayerLg.tsx"));
const AplicativoParaTvSamsung = lazy(() => import("./pages/AplicativoParaTvSamsung.tsx"));
const SamsungAppsTv = lazy(() => import("./pages/SamsungAppsTv.tsx"));
const AplicativoTvSamsung = lazy(() => import("./pages/AplicativoTvSamsung.tsx"));
const SamsungAppsSmartTv = lazy(() => import("./pages/SamsungAppsSmartTv.tsx"));
const InstalarAplicativoTvSamsung = lazy(() => import("./pages/InstalarAplicativoTvSamsung.tsx"));
const ConfigurarAplicativoTvSamsung = lazy(() => import("./pages/ConfigurarAplicativoTvSamsung.tsx"));
const AplicativoParaSmartTv = lazy(() => import("./pages/AplicativoParaSmartTv.tsx"));
const AppParaAssistirTvNaSmartTv = lazy(() => import("./pages/AppParaAssistirTvNaSmartTv.tsx"));
const AplicativoDeTvParaSmartTv = lazy(() => import("./pages/AplicativoDeTvParaSmartTv.tsx"));
const PlayerParaSmartTv = lazy(() => import("./pages/PlayerParaSmartTv.tsx"));
const ComprarAtivacaoAplicativoSmartTv = lazy(() => import("./pages/ComprarAtivacaoAplicativoSmartTv.tsx"));
const AppIptvSmartvSamsung = lazy(() => import("./pages/AppIptvSmartvSamsung.tsx"));

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
      <Route path="/ativar-ibo-play-pro" element={lazyRoute(AtivarIboPlayPro)} />
      <Route path="/ativar-stream-player" element={lazyRoute(AtivarStreamPlayer)} />
      <Route path="/configurar-stream-player" element={lazyRoute(ConfigurarStreamPlayer)} />
      <Route path="/download-stream-player" element={lazyRoute(DownloadStreamPlayer)} />
      <Route path="/stream-player-smart-tv" element={lazyRoute(StreamPlayerSmartTv)} />
      <Route path="/suporte-stream-player" element={lazyRoute(SuporteStreamPlayer)} />
      <Route path="/ativar-licenca-ibo-player" element={lazyRoute(AtivarLicencaIboPlayer)} />
      <Route path="/suporte-ibo-player-smart-tv" element={lazyRoute(SuporteIboPlayerSmartTv)} />
      <Route path="/iptv-smart-tv-samsung" element={lazyRoute(IptvSmartTvSamsung)} />
      <Route path="/iptv-smart-tv-lg" element={lazyRoute(IptvSmartTvLg)} />
      <Route path="/iptv-smarters-samsung" element={lazyRoute(IptvSmartersSamsung)} />
      <Route path="/iptv-smarters-lg" element={lazyRoute(IptvSmartersLg)} />
      <Route path="/ativar-iptv-smarters-pro" element={lazyRoute(AtivarIptvSmartersPro)} />
      <Route path="/smarters-player" element={lazyRoute(SmartersPlayer)} />
      <Route path="/ativar-smarters-player" element={lazyRoute(AtivarSmartersPlayer)} />
      <Route path="/licenca-smarters-player" element={lazyRoute(LicencaSmartersPlayer)} />
      <Route path="/configurar-smarters-player" element={lazyRoute(ConfigurarSmartersPlayer)} />
      <Route path="/smarters-player-samsung" element={lazyRoute(SmartersPlayerSamsung)} />
      <Route path="/smarters-player-lg" element={lazyRoute(SmartersPlayerLg)} />
      <Route path="/aplicativo-para-tv-samsung" element={lazyRoute(AplicativoParaTvSamsung)} />
      <Route path="/samsung-apps-tv" element={lazyRoute(SamsungAppsTv)} />
      <Route path="/aplicativo-tv-samsung" element={lazyRoute(AplicativoTvSamsung)} />
      <Route path="/samsung-apps-smart-tv" element={lazyRoute(SamsungAppsSmartTv)} />
      <Route path="/instalar-aplicativo-tv-samsung" element={lazyRoute(InstalarAplicativoTvSamsung)} />
      <Route path="/configurar-aplicativo-tv-samsung" element={lazyRoute(ConfigurarAplicativoTvSamsung)} />
      <Route path="/aplicativo-para-smart-tv" element={lazyRoute(AplicativoParaSmartTv)} />
      <Route path="/app-para-assistir-tv-na-smart-tv" element={lazyRoute(AppParaAssistirTvNaSmartTv)} />
      <Route path="/aplicativo-de-tv-para-smart-tv" element={lazyRoute(AplicativoDeTvParaSmartTv)} />
      <Route path="/player-para-smart-tv" element={lazyRoute(PlayerParaSmartTv)} />
      <Route path="/comprar-ativacao-aplicativo-smart-tv" element={lazyRoute(ComprarAtivacaoAplicativoSmartTv)} />
      <Route path="/app-iptv-smartv-samsung" element={lazyRoute(AppIptvSmartvSamsung)} />
      <Route path="/politica-de-privacidade" element={lazyRoute(PoliticaDePrivacidade)} />
      <Route path="*" element={lazyRoute(NotFound)} />
    </Routes>
    <CookieConsent />
  </BrowserRouter>
);

export default App;
