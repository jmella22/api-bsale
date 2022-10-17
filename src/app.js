import express from "express";
import morgan from "morgan";

//Routes
import routes from "./routes/index";

const app = express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api", routes);

export default app;
