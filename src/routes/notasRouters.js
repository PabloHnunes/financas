import express from "express";
import NotasController from "../controllers/notasControllers.js"


const router = express.Router();


router
    .get("/notas", NotasController.listarNotas)
    .get("/notas/:id", NotasController.listarNotaPorId)
    .post("/notas", NotasController.cadastrarNota)
    .put("/notas/:id", NotasController.atualizaNota)
    .delete("/notas/:id", NotasController.excluirNota)


export default router;