import express from 'express';
import ProductController from "./SRC/CONTROLER/Product.controller.js";
import path from "path"
import expressEjsLayouts from 'express-ejs-layouts';
import { Validation } from './SRC/MIDDLEWARES/FormValidation.middleware.js';
// const express = require("express");


const server = express();

// setup view engine setting
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "SRC", "VIEW" ));
server.use(expressEjsLayouts);
server.use(express.urlencoded({extended: true}));

// creating the instance 
const productsController = new ProductController

server.get("/", productsController.getProducts);
server.get('/new', productsController.getAddForm);
server.post('/', Validation, productsController.addNewProduct);

server.use(express.static('SRC/VIEW'))

server.listen(3400)
console.log("server is running on 3400") 