import { body, validationResult } from "express-validator";

export const Validation = async (req, res, next) => {

   // 1. setup the rule for validation
    const rules =  [
        body('name').notEmpty().withMessage('Name is required'),
        body('price').isFloat({gt:0}).withMessage('Price should be positive Value'),
        body('imageUrl').isURL().withMessage('Invail Url')
    ];    

   // 2. Run those rules
    
   await Promise.all(
   rules.map((rule) => rule.run(req))
    );

   // 3. check weather their is any error after running the rules.

    var validationErrors = validationResult(req);

   if(!validationErrors.isEmpty()){
        return res.render('New_product',{
            errorsMessage:validationErrors.array()[0].msg,
        });
   }
    next();
}

export default Validation;