// Arreglo de productos
let productos = [
    {
        nombre: "Televisor",
        precio: 900,
        descripcion: "Para entretenimiento"
    },
    {
        nombre: "Parlante",
        precio: 80,
        descripcion: "Barra de sonido"
    },
    {
        nombre: "Aire acondicionado",
        precio: 1200,
        descripcion: "Para estar cómodos en el calor"
    }
];

// Referencia al <ul>
const lista = document.getElementById("listaProductos");

// Función para renderizar productos
function mostrarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
            <hr>
        `;
        lista.appendChild(li);
    });
}

// Mostrar productos al cargar la página
mostrarProductos();

// Botón para agregar un nuevo producto
document.getElementById("btnAgregar").addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Producto Nuevo",
        precio: 10,
        descripcion: "Descripción del nuevo producto"
    };

    productos.push(nuevoProducto);
    mostrarProductos();
});
