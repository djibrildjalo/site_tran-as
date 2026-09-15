// para mostrar o cardápio quando o botão for clicado
const btnVerCardapio = document.querySelector("#ver_cardapio");
const catalogo = document.querySelector("#catalogo")
const catlogoNav = document.querySelector("#catalogo_nav")

function mostrarCatalogo() {
        catalogo.style.display = "block";
}

btnVerCardapio.addEventListener ("click",() => {
    mostrarCatalogo();

});

catlogoNav.addEventListener ("click", () => {
    mostrarCatalogo();
});

// para direcionar para whatsapp