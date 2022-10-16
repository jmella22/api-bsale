import { config } from "dotenv";

config();

export default {
  host: process.env.HOST || "",
  database: process.env.DB_NAME || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
};
