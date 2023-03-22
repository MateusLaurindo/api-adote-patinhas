import express from "express";
import pet from "./petRoutes.js";
import user from "./userRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Adote Patinhas" });
    })
    app.use(
        express.json(),
        pet,
        user
    )

}

export default routes