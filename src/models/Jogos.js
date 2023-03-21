import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema(
{
    id: {type: String},
    titulo: {type: String, require: true},
    produtora: {type: String, require: true},
    plataforma: {type: String, require: true},
    ano: {type: Number}
}

)

const jogos = mongoose.model('jogos', jogoSchema);

export default jogos

