"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
    }
    ;
    Product.prototype.init = function (id, brandId, description, price, image) {
        this.id = id;
        this.brandId = brandId;
        this.description = description;
        this.price = price;
        this.image = image;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map