import  express  from "express";
import plataformasController from "../controllers/plataformas.controller";

const router = express.Router();

router
    .get("/plataformas", plataformasController.listarPlataforma)
    .get("/plataformas /:id", plataformasController.listarPlataformaPorId)
    .post("/plataformas", plataformasController.cadastrarPlataforma)
    .put("/plataformas /:id", plataformasController.atualizarPlataforma)
    .delete("/plataformas /:id", plataformasController.excluirPlataforma)

export default router;