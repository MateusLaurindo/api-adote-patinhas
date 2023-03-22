import pet from "../models/pet.js";

class PetController {
    static listPets = (req, res) => {
        pet.find((err, pet) => {
            res.status(200).json(pet)
        })
    }

    static registerPet = (req, res) => {
        let newPet = new pet(req.body);

        newPet.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar seu animal!` });
            }
            else {
                res.status(201).send(newPet.toJSON())
            }
        })

    }
    static updatePet = (req, res) => {
        const id = req.params.id;

        pet.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'animal atualizado com sucesso!' });
            }
            else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    // Nicolas

    static listPetById = (req, res) => {
        const id = req.params.id;

        pet.findById(id, (err, pet) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do animal não localizada!` });
            }
            else {
                res.status(200).send(pet)
            }
        })
    }


    static removePet = (req, res) => {
        const id = req.params.id;

        pet.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Animal removido com sucesso!' })
            }
            else {
                res.status(500).send({ message: err.message })
            }
        })
    }

}

export default PetController;