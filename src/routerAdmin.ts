import experess from "express";
const routerAdmin = experess.Router();
import restaurantController from "./controllers/restaurant.controller";

routerAdmin.get('/', restaurantController.goHome);


routerAdmin.get('/login',restaurantController.getLogin);

routerAdmin.get('/signup',restaurantController.getSignup);

export default routerAdmin;