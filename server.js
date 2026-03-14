import app from "./app.js";
import http from "http";
import { PORT } from "./src/config/env.js";
import connectToDbMongoose from "./src/config/dbConnection.js";

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectToDbMongoose();
});
