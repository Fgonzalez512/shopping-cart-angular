app.service('Bag', function() {

    this.cart = [];
    this.addToCart = function(arr) {
            this.cart = arr;
        },
        this.getCart = function() {
            return this.cart;
        }


    this.grandTotal = 0;

    this.getTotal = function(arr) {

        if (arr) {
            this.grandTotal = 0;
            var total = this.grandTotal
            arr.forEach(function(item) {
                total += item.price * item.quantity
            })
            this.grandTotal = total;
        }
    }

    this.showTotal = function() {
        return this.grandTotal;
    }

})
