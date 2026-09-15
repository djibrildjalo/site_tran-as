// para mostrar o cardápio quando o botão for clicado
const btnVerCardapio = document.querySelector("#ver_cardapio");
const catalogo = document.querySelector("#catalogo")
const catlogoNav = document.querySelector("#catalogo_nav")

function alterarCatalogo() {
    if (catalogo.style.display === "none"){
        catalogo.style.display = "block";
        btnVerCardapio.textContent = "Fechar Catálogo"
    } else {
        catalogo.style.display = "none";
        btnVerCardapio.textContent = "Ver Catálogo"
    }
}

btnVerCardapio.addEventListener ("click",() => {
    alterarCatalogo()

});

catlogoNav.addEventListener ("click", () => {
    // mostrarCatalogo();
    alterarCatalogo()
});

// para direcionar para whatsapp