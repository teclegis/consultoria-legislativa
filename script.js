// --------------------
// JavaScript para o botão "Voltar ao Topo"
// --------------------

// 1. Pega o elemento do botão
const btnTopo = document.getElementById("btnVoltarTopo");

if (btnTopo) {

    // 2. Função que lida com a exibição do botão
    const toggleVisibility = () => {
        // Define a distância em pixels para o botão aparecer (e.g., 300px)
        const distanciaParaMostrar = 90;

        if (window.scrollY > distanciaParaMostrar) {
            btnTopo.classList.add("show");
        } else {
            btnTopo.classList.remove("show");
        }
    };

    // Adiciona o Listener para o evento de scroll da janela
    window.addEventListener("scroll", toggleVisibility);

    // Executa uma vez no carregamento caso o usuário recarregue a página no meio
    toggleVisibility();

    // 3. Adiciona um Listener para o clique no botão
    btnTopo.addEventListener("click", () => {
        // Rola a janela para o topo com efeito suave (smooth)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}