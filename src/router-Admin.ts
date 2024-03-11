import experess from "express";
const routerAdmin = experess.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
//Restaurant
routerAdmin.get('/', restaurantController.goHome);
routerAdmin
.get('/login',restaurantController.getLogin)
.post('/login',restaurantController.processLogin);

routerAdmin
.get('/signup',restaurantController.getSignup)
.post('/signup',restaurantController.processSignup);
routerAdmin.get('/check-me',restaurantController.checkAuthSession);
routerAdmin.get('/logout',restaurantController.logout);

// Product
routerAdmin.get(
    '/product/all',
    restaurantController.verifyRestraurant,
    productController.getAllProducts
);
routerAdmin.post(
    "/product/create",
    restaurantController.verifyRestraurant,
    productController.createNewProduct
);
routerAdmin.post(
    "/product/:id", 
    restaurantController.verifyRestraurant,
    productController.updateChosenProduct
);


//User
export default routerAdmin;
