import express from "express";
import express from "./jogosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "aprendendo node"});
    })
    app.use(
        express.json(),
        jogos
    )
    
}

export default routes