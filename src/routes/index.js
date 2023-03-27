import express from "express";
import petRoutes from "./petRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Adote Patinhas" });
    })
    app.use(
        express.json(),
        petRoutes,
        userRoutes
    )

}

export default routes