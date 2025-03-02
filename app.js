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
        phoneError: false
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
        }
    }, 
    computed: {
        itemsInTheCart: function() {
            return this.cart.length || "";
        },
        itemsLeft: function() {
            return this.product.stock - this.itemsInTheCart;
        },
        sortedProducts: function() {
            function compare(a, b) {
                if (a.price < b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            }
            return this.products.sort(compare)
        }
    }
})