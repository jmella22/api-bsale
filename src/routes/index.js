import { Router } from "express";
import { getProducts, getAllCategory } from "../controllers/index";

const routes = Router();

routes.get("/products/:category", getProducts);

routes.get("/categories", getAllCategory);

export default routes;
