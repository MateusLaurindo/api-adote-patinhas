import mongoose from "mongoose";

//const { userSchema } = require("./user.js");

const petSchema = new mongoose.Schema(
    {
        nome: {type: String, require: true},
        raca: {type: String, require: true},
        card: {type: Boolean, require: true},
        vacinacao: {type: Boolean, required: true},
        castracao: {type: Boolean, required: true},
        descricao: {type: String, required: true},
        idade: {type: Number, required: true},
        sexo: {type: String, required: true},
        porte: {type: String, required: true},
        cep: {type: Number, required: true},
        uf: {type: String, required: true},
        rua: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: Number, required: true},
        data_de_cadastro: {type: Date, required: true},
        foto: {type: String, required: true},
        //user: [userSchema]
        user: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
    },
    {
        timestamps : true
    }
   

);

const pet = mongoose.model("pet", petSchema);

export default pet;
//module.exports = pet;



