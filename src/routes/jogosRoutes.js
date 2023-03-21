import express from "express";
import jogosController from "../controllers/jogosController.js";

const router = express.Router();

router
  .get("/jogos", jogosController.listarJogos)
  .post("/jogos", jogosController.cadastrarJogo)
  .put("/jogos/:id", jogosController.atualizarJogo)
  .delete("/jogos/:id", jogosController.excluirJogo)
  .get("/jogos/:id", jogosController.listarJogoPorld)

  export default router;