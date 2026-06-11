let cantidad = 1;

function sumar(){

cantidad++;

document.getElementById("cantidad").innerText = cantidad;

actualizarPrecio();
}

function restar(){

if(cantidad > 1){

cantidad--;

document.getElementById("cantidad").innerText = cantidad;

actualizarPrecio();

}

}

function actualizarPrecio(){

const precio =
parseInt(document.getElementById("porciones").value);

const total =
precio * cantidad;

document.getElementById("precioUnitario").innerText =
precio + " Bs";

document.getElementById("precioTotal").innerText =
total + " Bs";

}

function pedirWhatsApp(){

const select =
document.getElementById("porciones");

const porciones =
select.options[select.selectedIndex].text;

const precio =
parseInt(select.value);

const total =
precio * cantidad;

const mensaje =

`Hola, deseo realizar un pedido:

🍰 Producto: Torta 4 Leches

📏 Tamaño: ${porciones}

🔢 Cantidad: ${cantidad}

💵 Precio Unitario: ${precio} Bs

🧾 Total: ${total} Bs`;

const url =
`https://wa.me/59177802670?text=${encodeURIComponent(mensaje)}`;

window.open(url,"_blank");

}