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
        return  res.render("New_Product");
    }

    addNewProduct(req, res){
        // validate data
        const {name, price, imageUrl} = res.body;
        let errors;
        if(!name || name.trim() == ""){
            errors.push('Name is required')
        }
        if(!price || parseFloat(price)>1){
            errors.push('Price must be positive number')
        }
       try {
        const validUrl = new Url(imageUrl);
       } catch (error) {
        error.push('Url is Invalid');
       }

       if(errors.length > 0 ){
            return res.render('New_product')
       }

        // access data from form
        console.log(req.body); 
        ProductModel.add(req.body)
        let products = ProductModel.get();
        return res.render('products', {products})
    }
}