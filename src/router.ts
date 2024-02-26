import experess from "express";
const router = experess.Router();
import memberController from "./controllers/member.controller";

router.get('/', memberController.goHome);


router.get('/login',memberController.getLogin);

router.get('/signup',memberController.getSignup);

export default router;