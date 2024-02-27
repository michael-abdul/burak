import express from 'express';
import path from "path";
import router from './router';
import routerAdmin from "./routerAdmin"
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/config';
// 1-ENTRANCE

const app = express();
// console.log("__dirname",__dirname)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
// 2-SESSIONS

// 3-VIEWS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4-ROUTERS
//BSSR:(Backend Server  Site Rendering) : ejs  => adminkani qurib olish uchun
app.use("/admin", routerAdmin); //ejs
app.use("/", router);   // REACT ucun    middleware Design Pattern  SPA:REACT res API ucun qullayapmiz


export default app;    //modele experts = app;