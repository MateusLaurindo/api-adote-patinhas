import pet from "../models/pet.js"

class PetController {
    static listPets = async (req, res) => {
        try {
            const pets = await pet.find()

            res.status(200).json(pets)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static registerPet = async (req, res) => {

        try {

            const petId = {
                nome: req.body.nome,
                raca: req.body.raca,
                card: req.body.card,
                vacinacao: req.body.vacinacao,
                castracao: req.body.castracao,
                descricao: req.body.descricao,
                idade: req.body.idade,
                sexo: req.body.sexo,
                porte: req.body.porte,
                cep: req.body.cep,
                uf: req.body.uf,
                rua: req.body.rua,
                email: req.body.email,
                telefone: req.body.telefone,
                data_de_cadastro: req.body.data_de_cadastro,
                foto: req.body.foto,
                user: req.body.user

            }

            const response = await pet.create(petId)
            res.status(201).json({ msg: 'pet cadastrado com sucesso!' });
        }
        catch (error) {
            res.status(500).json({msg: 'Deu errado'})
            // console.log(error);
        }
    }
    static updatePet = async (req, res) => {


        try {
            const id = req.params.id;
            
            const petId = {
                nome: req.body.nome,
                raca: req.body.raca,
                card: req.body.card,
                vacinacao: req.body.vacinacao,
                castracao: req.body.castracao,
                descricao: req.body.descricao,
                idade: req.body.idade,
                sexo: req.body.sexo,
                porte: req.body.porte,
                cep: req.body.cep,
                uf: req.body.uf,
                rua: req.body.rua,
                email: req.body.email,
                telefone: req.body.telefone,
                data_de_cadastro: req.body.data_de_cadastro,
                foto: req.body.foto,
                user: req.body.user

            }

            const petUpdate = await pet.findByIdAndUpdate(id, petId)


            if (!petUpdate) {
                res.status(404).json({ msg: " Pet não encontrado" })
                return;
            }


            res.status(200).json({ msg: `Pet atualizado com sucesso!` });
        }
        catch (error) {

            console.log(error)
        }

    }
    static listPetById = async (req, res) => {
        const id = req.params.id;


        try {
            const petId = await pet.findOne({ _id: id })

            if (!petId) {
                res.status(422).json({ msg: "id do pet não encontrado!" });
                return
            }
            res.status(200).json(petId);
        }
        catch (error) {
            res.status(500).json({ error: error })
        }


    }
    static removePet = async (req, res) => {
        try {
            const id = req.params.id;

            const petId = await pet.findById(id)

            if (!petId) {
                res.status(404).json({ msg: 'id do pet não encontrado!' })
                return
            }

            const deletePet = await pet.findByIdAndDelete(id);
            res.status(200).json({ deletePet, msg: 'Pet removido com sucesso!' })
        }
        catch (error) {

            console.log(error)
        }
    }


}

export default PetController;


/*

"nome": "fera",
    "raca": "pastor",
    "card": "true",
    "vacinacao": "true",
    "castracao": "false",
    "descricao": "super dócil para lidar com sua familia",
    "idade": 12,
    "sexo": "femea",
    "porte": "grande",
    "cep": 37510000,
    "uf": "mineira",
    "rua": "rua inacio loprs siquieira",
    "email": "feradograu@gmail.com",
    "telefone": 35122121212,
    "data_de_cadastro": "12/05/2014",
    "foto": "auau",
    "user": "6421d4590c447e8b8ad59a92"


*/