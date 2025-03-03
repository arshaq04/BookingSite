new Vue({
    el: '#app',
    data: {
        sitename: "Bookby (After School Activities)",
        products: products,
        showProduct: true,
        cart: [],
        order: {
            name: "",
            phone: ""
        },
        phoneError: false,
        sortOrder: 'asc'
    },
    methods: {
        showCheckout: function() {
            this.showProduct = this.showProduct ? false : true
        },
        addToCart: function(product) {
                this.cart.push(product.id);
        },
        cartFull: function(product) {
            return product.stock > this.cartCount(product.id);
        },
        cartCount: function(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },
        validatePhone() {
                this.phoneError = !this.validatePhoneNumber(this.order.phone);
            },
        validatePhoneNumber(phone) {
            const phoneRegex = /^\+?\d{1,4}?[-.\s]?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
            return phoneRegex.test(phone);
        },
        submitCheckoutForm: function() {
            alert("Order has been submitted!")
        },
        itemsLeft: function(product) {
            return product.stock - this.cartCount(product.id);
        },
        toggleSort: function() {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        }
    }, 
    computed: {
        itemsInTheCart: function() {
            return this.cart.length || "";
        },    
        sortedProducts: function() {
            let compare = (a, b) => {
                return this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
            };
            return [...this.products].sort(compare);
        },
        cartItems() {
            return this.products
                .filter(product => this.cart.includes(product.id))
                .map(product => ({
                    ...product,
                    quantity: this.cart.filter(id => id === product.id).length
                }));
        }
    }
})