const articles = {
      1: {
        category: "Receitas e rotina",
        title: "5 maneiras de incluir bebida de aveia no dia a dia",
        meta: "16 de junho de 2026 · Por Equipe Avena · 6 min de leitura",
        body: `
          <p>A bebida de aveia pode fazer parte da rotina sem exigir receitas difíceis ou mudanças radicais. A proposta é usar o produto em situações que já fazem parte do dia a dia.</p>
          <ol>
            <li><strong>No café:</strong> use a versão clássica quente ou gelada, com canela ou cacau.</li>
            <li><strong>Em vitaminas:</strong> bata com banana, morango, mamão ou maracujá.</li>
            <li><strong>No mingau:</strong> aqueça com aveia em flocos e finalize com frutas.</li>
            <li><strong>Em panquecas:</strong> substitua o leite tradicional pela bebida vegetal.</li>
            <li><strong>Em sobremesas:</strong> prepare cremes, smoothies ou picolés caseiros.</li>
          </ol>
          <p>Mostrar esses usos ajuda o consumidor a imaginar o produto dentro da própria rotina. Assim, a Avena deixa de ser apenas uma embalagem e passa a representar praticidade.</p>
          <p><strong>Pergunta para o público:</strong> em qual dessas receitas você usaria a Avena primeiro?</p>
        `
      },
      2: {
        category: "Família",
        title: "Como montar uma lancheira mais equilibrada",
        meta: "14 de junho de 2026 · Por Equipe Avena · 7 min de leitura",
        body: `
          <p>Uma lancheira equilibrada não precisa ser perfeita. Ela precisa ser possível, variada e adequada à rotina da família.</p>
          <p>Uma combinação simples pode reunir quatro elementos: uma fruta, uma fonte de energia, uma bebida e uma opção prática. A linha Avena Kids pode entrar como uma alternativa de bebida vegetal em embalagem individual.</p>
          <ul>
            <li>Pão de queijo, uvas e Avena Maçã;</li>
            <li>Mini sanduíche, banana e Avena Clássica;</li>
            <li>Bolo caseiro, morangos e Avena Maracujá.</li>
          </ul>
          <p>Também vale variar as cores, os formatos e as texturas. Isso pode deixar o lanche mais atrativo sem transformar a preparação em algo trabalhoso.</p>
          <p><strong>Pergunta para o público:</strong> qual sabor teria mais chance de entrar na sua lancheira?</p>
        `
      },
      3: {
        category: "Sustentabilidade",
        title: "Pequenas atitudes que fazem grande diferença",
        meta: "11 de junho de 2026 · Por Equipe Avena · 6 min de leitura",
        body: `
          <p>Sustentabilidade não deve aparecer apenas em uma frase de efeito. Ela precisa estar conectada a atitudes claras e possíveis.</p>
          <ul>
            <li>Esvazie completamente a embalagem antes do descarte;</li>
            <li>Dobre a caixa para ocupar menos espaço;</li>
            <li>Consulte as regras de coleta seletiva da sua cidade;</li>
            <li>Planeje porções para evitar desperdício;</li>
            <li>Reaproveite ingredientes em novas receitas.</li>
          </ul>
          <p>A proposta da Avena também inclui o programa <strong>Refloresta com Avena</strong>, que relaciona o crescimento da marca a ações ambientais e metas que possam ser acompanhadas pelo público.</p>
          <p><strong>Pergunta para o público:</strong> o que faria você confiar mais em uma marca sustentável?</p>
        `
      }
    };

    const modal = document.getElementById("articleModal");
    const modalCategory = document.getElementById("modalCategory");
    const modalTitle = document.getElementById("modalTitle");
    const modalMeta = document.getElementById("modalMeta");
    const modalBody = document.getElementById("modalBody");

    document.querySelectorAll("[data-article]").forEach(button => {
      button.addEventListener("click", () => {
        const article = articles[button.dataset.article];
        modalCategory.textContent = article.category;
        modalTitle.textContent = article.title;
        modalMeta.textContent = article.meta;
        modalBody.innerHTML = article.body;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeModal(){
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.getElementById("modalClose").addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
      if(e.target === modal) closeModal();
    });
    document.addEventListener("keydown", e => {
      if(e.key === "Escape") closeModal();
    });

    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    mobileToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
    navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navMenu.classList.remove("open")));

    document.getElementById("commentForm").addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("commentSuccess").style.display = "block";
      e.target.reset();
    });

    document.getElementById("newsletterForm").addEventListener("submit", e => {
      e.preventDefault();
      alert("Cadastro realizado para demonstração do Projeto Vitrine.");
      e.target.reset();
    });
