function solve() {
    class ShoppingCart {
        constructor() {
            this.products = new Set();
            this.prices = [];
        }

        pay() {
            const totalSum = this.prices.reduce((sum, price) => sum + price, 0).toFixed(2);
            addButtons.forEach(btn => btn.disabled = true)
            checkoutBtn.disabled = true;
            return `You bought ${[...this.products].join(', ')} for ${totalSum}.`;
        }

        addProduct(product, price) {
            this.products.add(product);
            this.prices.push(Number(price));
            return `Added ${product} for ${price} to the cart.\n`
        }
    }

    const shoppingCart = new ShoppingCart();
    const addButtons = Array.from(document.querySelectorAll("button.add-product"));
    const checkoutBtn = document.querySelector("button.checkout");

    addButtons.forEach(button => {
        button.addEventListener('click', addProductInShoppingCart)
    });

    checkoutBtn.addEventListener('click', checkout);

    const textArea = document.querySelector('textarea');


    function addProductInShoppingCart(el) {
        const currentProduct = el.currentTarget.parentNode.parentNode;
        const productTitle = currentProduct.querySelector('.product-title').textContent;
        const productPrice = currentProduct.querySelector('.product-line-price').textContent;

        textArea.value += shoppingCart.addProduct(productTitle, productPrice);

    }

    function checkout() {
        textArea.value += shoppingCart.pay();
    }

}