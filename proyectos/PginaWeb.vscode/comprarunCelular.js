// Variables
let cart = [];
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

// Agregar un producto al carrito
function addToCart(product) { 
    cart.push(product);
    renderCart();
}

// Eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);  // Filtramos el carrito para eliminar el producto con el ID especificado
    renderCart();
}

// Renderizar los artículos en el carrito
function renderCart() {
    // Limpiar la lista de productos
    cartItems.innerHTML = '';
    
    // Crear los elementos de la lista
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button class="remove" data-id="${item.id}">Eliminar</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Mostrar el total
    totalPrice.textContent = `Total: $${total}`;

    // Añadir los event listeners para eliminar productos
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            removeFromCart(productId);
        });
    });
}

// Añadir productos al carrito cuando se hace clic en el botón
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = {
            id: e.target.getAttribute('data-id'),
            name: e.target.getAttribute('data-name'),
            price: parseInt(e.target.getAttribute('data-price'))
        };
        addToCart(product);
    });
});

// Redirigir al checkout (puedes personalizar esta acción)
document.getElementById('checkoutBtn').addEventListener('click', () => {
    alert('Redirigiendo al checkout...');
    // Aquí puedes redirigir a la página de pago o realizar cualquier otra acción
    // window.location.href = 'checkout.html'; // Ejemplo de redirección
});
