import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
      {children}
    </div>
  </section>
);

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-3xl py-10 sm:py-14">
        {/* SEO */}
        <title>Política de Privacidade | Dica do Antenista</title>
        <meta
          name="description"
          content="Conheça nossa Política de Privacidade e saiba como tratamos seus dados de acordo com a LGPD."
        />
        <link rel="canonical" href="https://dicadoantenista.com/politica-de-privacidade" />
        <meta property="og:title" content="Política de Privacidade | Dica do Antenista" />
        <meta
          property="og:description"
          content="Saiba como tratamos seus dados em conformidade com a LGPD."
        />
        <meta property="og:url" content="https://dicadoantenista.com/politica-de-privacidade" />

        <header>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </header>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          A sua privacidade é importante para o <strong>Dica do Antenista</strong>. Esta Política
          descreve como coletamos, utilizamos e protegemos seus dados pessoais em conformidade com a
          Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
        </p>

        <Section title="1. Dados que coletamos">
          <ul className="list-disc space-y-2 pl-5">
            <li>Dados fornecidos por você via WhatsApp (nome, telefone e mensagens) para atendimento e suporte técnico.</li>
            <li>Dados de navegação coletados automaticamente, como endereço IP, tipo de dispositivo, navegador, páginas acessadas e tempo de permanência.</li>
            <li>Identificadores de cookies e tecnologias semelhantes.</li>
          </ul>
        </Section>

        <Section title="2. Google Analytics (GA4)">
          <p>
            Utilizamos o <strong>Google Analytics 4</strong> para analisar o desempenho do site,
            entender o comportamento dos visitantes e melhorar continuamente a experiência oferecida.
            As informações são coletadas de forma agregada e anonimizada.
          </p>
        </Section>

        <Section title="3. Google Ads e Remarketing">
          <p>
            Utilizamos o <strong>Google Ads</strong> para mensurar a eficácia das nossas campanhas
            de publicidade e realizar <strong>remarketing</strong>, exibindo anúncios relevantes a
            usuários que já visitaram nosso site. Você pode desativar anúncios personalizados nas{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              Configurações de Anúncios do Google
            </a>
            .
          </p>
        </Section>

        <Section title="4. Google Tag Manager">
          <p>
            Utilizamos o <strong>Google Tag Manager</strong> para gerenciar as tags de mensuração e
            marketing do site de forma segura, sem armazenar dados pessoais por si só.
          </p>
        </Section>

        <Section title="5. Cookies">
          <p>
            Cookies são pequenos arquivos armazenados no seu navegador que permitem lembrar
            preferências, medir audiência e personalizar sua experiência. Utilizamos cookies
            essenciais, analíticos e de marketing. Você pode gerenciar ou apagar cookies a qualquer
            momento nas configurações do seu navegador.
          </p>
        </Section>

        <Section title="6. Compartilhamento de dados">
          <p>
            Não vendemos seus dados pessoais. Podemos compartilhar informações apenas com provedores
            de tecnologia que dão suporte à operação do site (como Google), sempre em conformidade
            com a LGPD.
          </p>
        </Section>

        <Section title="7. Seus direitos como titular (LGPD)">
          <ul className="list-disc space-y-2 pl-5">
            <li>Confirmar a existência de tratamento dos seus dados.</li>
            <li>Acessar, corrigir, atualizar ou solicitar a portabilidade dos seus dados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Revogar o consentimento a qualquer momento.</li>
            <li>Obter informações sobre com quem compartilhamos seus dados.</li>
          </ul>
        </Section>

        <Section title="8. Como solicitar a exclusão de dados">
          <p>
            Para solicitar a exclusão dos seus dados pessoais ou exercer qualquer direito previsto
            na LGPD, envie uma mensagem pelo WhatsApp{" "}
            <strong>+55 71 99972-9281</strong> informando sua solicitação. Responderemos no menor
            prazo possível.
          </p>
        </Section>

        <Section title="9. Contato">
          <p>
            Responsável pelo tratamento de dados:{" "}
            <strong>Cleidson Ferreira Teixeira</strong>
            <br />
            WhatsApp: <strong>+55 71 99972-9281</strong>
          </p>
        </Section>

        <Section title="10. Atualizações desta Política">
          <p>
            Esta Política pode ser atualizada periodicamente. Recomendamos que você a revise
            regularmente para se manter informado sobre eventuais alterações.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
