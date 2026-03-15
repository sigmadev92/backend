import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const NODE_ENV = process.env.NODE_ENV;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const CLIENT_URL = process.env.CLIENT_URL;
export { PORT, MONGO_URI, NODE_ENV, JWT_SECRET_KEY, CLIENT_URL };
