import path from 'path'
import ProductModel from '../MODEL/Products.model.js';

export default class ProductController {    
    getProducts(req, res){
        let products = ProductModel.get();
        // console.log(products);
        res.render("products", {products:products});
        // return res.sendfile(
            // path.join(path.resolve(), "SRC", "VIEW" , "products.ejs"))
}

    getAddForm(req, res){
        return  res.render("New_Product", {errorsMessage: null});
    }

    addNewProduct(req, res){       

        // access data from form
        ProductModel.add(req.body)
        let products = ProductModel.get();
        return res.render('products', {products})
    }
}