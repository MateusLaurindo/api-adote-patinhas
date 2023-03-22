import user from "../models/user.js";

class UserController {
    static listUsers = (req, res) => {
        user.find((err, user) => {
            res.status(200).json(user)
        })
    }
    static registerUser = (req, res) => {
        let newUser = new user(req.body);

        newUser.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar o usuário!` });
            }
            else {
                res.status(201).send(newUser.toJSON())
            }
        })
    }
    static updateUser = (req, res) => {
        const id = req.params.id;

        user.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `usuário atualizado com sucesso!` });
            }
            else {
                res.status(500).send({ message: err.message });
            }
        })
    }
    static listUserById = (req, res) => {
        const id = req.params.id;

        user.findById(id, (err, user) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - id da do usuário não encontrado!` });
            }
            else {
                res.status(200).send(user);
            }

        })
    }
    static removeUser = (req, res) => {
        const id = req.params.id;

        user.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `usuário removido com sucesso!` });
            }
            else {
                res.status(500).send({ message: err.message });
            }
        })
    }

}

export default UserController;