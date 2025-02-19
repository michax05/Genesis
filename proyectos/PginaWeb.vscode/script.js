document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad de arrastre para el botón flotante de carrito
    const floatingCartButton = document.getElementById('floatingCartButton');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    floatingCartButton.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - floatingCartButton.getBoundingClientRect().left;
        offsetY = e.clientY - floatingCartButton.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            floatingCartButton.style.left = `${e.clientX - offsetX}px`;
            floatingCartButton.style.top = `${e.clientY - offsetY}px`;
            floatingCartButton.style.position = 'fixed';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Función para abrir el chat de WhatsApp
    function openWhatsAppChat() {
        const phoneNumber = "18292977224"; // Número de WhatsApp
        const message = "¡Hola, quiero saber más!"; // Mensaje inicial 
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    floatingCartButton.addEventListener('click', openWhatsAppChat);

    // Variables para el carrito de compras
    const cartButton = document.getElementById("floatingCartButton");
    const cartContainer = document.getElementById("cart");
    const cartItemsList = document.getElementById("cart-items");
    const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
    const finalizarCompraBtn = document.getElementById("finalizarCompra");

    // Función para mostrar u ocultar el carrito
    function toggleCart() {
        cartContainer.style.display = cartContainer.style.display === "none" || cartContainer.style.display === "" ? "block" : "none";
    }

    // Agregar producto al carrito
    const agregarCarritoBtns = document.querySelectorAll(".agregar-carrito");
    agregarCarritoBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const producto = this.getAttribute("data-producto");
            const precio = this.getAttribute("data-precio");
            const item = document.createElement("li");
            item.textContent = `${producto} - $${precio}`;
            cartItemsList.appendChild(item);
            toggleCart(); // Mostrar el carrito al agregar un producto
        });
    });

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener("click", function() {
        cartItemsList.innerHTML = ""; // Vaciar los productos
    });

    // Finalizar compra
    finalizarCompraBtn.addEventListener("click", function() {
        if (cartItemsList.children.length === 0) {
            alert("Tu carrito está vacío.");
        } else {
            alert("¡Gracias por tu compra!");
            cartItemsList.innerHTML = ""; // Vaciar el carrito después de la compra
        }
    });

    // Evento para el carrito flotante
    cartButton.addEventListener('click', toggleCart);
});
