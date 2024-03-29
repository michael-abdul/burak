import experess from "express";
const routerAdmin = experess.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
//Restaurant
routerAdmin.get('/', restaurantController.goHome);
routerAdmin
.get('/login',restaurantController.getLogin)
.post('/login',restaurantController.processLogin);

routerAdmin
.get('/signup',restaurantController.getSignup)
.post('/signup',makeUploader("members").single("memberImage"),restaurantController.processSignup);
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
   // uploadProductImage.single("productImage"),
   makeUploader("products").array("productImages", 5),
    productController.createNewProduct
);
routerAdmin.post(
    "/product/:id", 
    restaurantController.verifyRestraurant,
    productController.updateChosenProduct
);


//User

routerAdmin.get("/user/all", restaurantController.verifyRestraurant,restaurantController.getUsers)
routerAdmin.post("/user/edit", restaurantController.verifyRestraurant,restaurantController.updateChosenUser)

export default routerAdmin;
