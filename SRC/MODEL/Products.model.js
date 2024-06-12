export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static get() {
    return products;
  }

  static add(productObj) {
    const newProduct = new ProductModel(
      products.length + 1,
      productObj.name,
      productObj.desc,
      productObj.price,
      productObj.imageUrl
    );
    products.push(newProduct);
  }
}

var products = [
  new ProductModel(
    1,
    "product 1",
    "description of the product 1",
    19.99,
    "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
  ),

  new ProductModel(
    2,
    "product 2",
    "description of the product 2",
    29.99,
    "https://i.pinimg.com/736x/71/be/d7/71bed7e22855c30309b47ee9a3083001.jpg"
  ),
  new ProductModel(
    3,
    "product 3",
    "description of the product 3",
    39.99,
    "https://5.imimg.com/data5/SELLER/Default/2020/9/YS/FJ/XX/26798013/book-covers-designing-service-500x500.jpg"
  ),
];
