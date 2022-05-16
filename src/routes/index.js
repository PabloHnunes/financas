import express from "express";
import notas from "./notasRouters.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo:"Back-todo-list"})
    })

    app.use(
        express.json(),
        notas
    )
}

export default routes;
