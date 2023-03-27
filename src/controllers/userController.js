import user from "../models/user.js"

class UserController {
    static listUsers = async (req, res) => {
        try {
            const users = await user.find()

            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static registerUser = async (req, res) => {

        try {

            const userId = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                telefone: req.body.telefone,
                foto: req.body.foto
            }

            const response = await user.create(userId)
            res.status(201).json({ msg: 'usuário cadastrado com sucesso!'});
        }
        catch (error) {
            console.log(error);
        }
    }
    static updateUser = async (req, res) => {


        try {
            const id = req.params.id;

            const userId = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                telefone: req.body.telefone,
                foto: req.body.foto

            }

            const userUpdate = await user.findByIdAndUpdate(id, userId)


            if (!userUpdate) {
                res.status(404).json({ msg: "Usuario não encontrado" })
                return;
            }


            res.status(200).json({ message: `usuário atualizado com sucesso!` });
        }
        catch (error) {
            
            console.log(error)
        }

    }
    static listUserById = async (req, res) => {
        const id = req.params.id;


        try {
            const userId = await user.findOne({ _id: id })

            if (!userId) {
                res.status(422).json({ message: `${err.message} - id do usuário não encontrado!` });
                return
            }
            res.status(200).json(userId);
        }
        catch (error) {
            res.status(500).json({ error: error })
        }


    }
    static removeUser = async (req, res) => {
        try  {
            const id = req.params.id;

            const userId = await user.findById(id)

            if(!userId) {
                res.status(404).json({msg: 'id do usuário não encontrado!'})
                return
            }

        const deleteUser = await user.findByIdAndDelete(id);
        res.status(200).json({deleteUser, msg: 'usuário removido com sucesso!'})
        }
        catch (error) {
            
            console.log(error)
        }
    }
    

}

export default UserController;


/*

{
    "nome": "bernardinho",
    "email": "bernardinhodograu08@gmail.com",
    "senha": "12309",
    "telefone": 40028922 ,
    "foto": "fotom2i59nh451a"
}
*/