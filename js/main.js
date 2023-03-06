const barraBuscar = document.getElementById("barraBusqueda");

/////////////////////////// FUNCIONES ///////////////////////////

function mostrarProductos(prd) {
    // Creo los contenedores con la información de cada producto
    mainSec.innerHTML = ""
    prd.forEach(prod => {
        let contenedor = document.createElement("article");
        contenedor.classList.add('contProducto');
        contenedor.innerHTML = `
                            
                            <img src=${prod.image} alt=${prod.title} class="imgProd">
                            <div class="contInfoProd">
                            <p class="titleProd">${prod.title}</p>
                            <p class="titleProd">${prod.codeproduct}</p>
                            <p class="titleProd">${prod.brand}</p>
                            <p class="titleProd">${prod.category}</p>
                            <p class="priceProd">$${prod.price}</p>
                            </div>
                            `;

        const contInfoCompra = document.createElement('div');
        contInfoCompra.classList.add('contInfoCompra');
        mainSec.appendChild(contenedor);
        contenedor.appendChild(contInfoCompra);
    });
}

//////////////////////////////////////
/// Barra de busqueda de productos ///
//////////////////////////////////////

function barraBusca(){
barraBuscar.addEventListener('input', async () => {
    // Busca y muestra los productos a medida que se escribe en la barra de busqueda
    let productos = await traerProductos();
    let prodFiltrados;
    barraBuscar.value === '' ?
        mostrarProductos(productos) :
        (
            prodFiltrados = productos.filter(elemento =>  elemento.title.includes(barraBuscar.value.toUpperCase()
            ) | elemento.codeproduct.includes(barraBuscar.value.toUpperCase()
            ) ),
            mostrarProductos(prodFiltrados)
            
        )
})}

//////Llamar funciones ////////
traerYmostrarProductos();
barraBusca();