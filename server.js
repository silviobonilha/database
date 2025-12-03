import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// servir arquivos estáticos da pasta public
app.use(express.static(__dirname + "/public"));

// servir arquivos JSON da pasta data
app.use("/data", express.static(__dirname + "/data"));

// exemplo de endpoint especial
app.get("/api/icons", (req, res) => {
  res.sendFile(__dirname + "/data/icons.json");
});

// porta automática (Vercel usa process.env.PORT)
app.listen(process.env.PORT || 3000);

