import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        nome: {type: String, require: true},
        email: {type: String, require: true},
        senha: {type: String, require: true},
        telefone: {type: Number, required: true},
        foto: {type: String, required: true},
        pet: {type: mongoose.Schema.Types.ObjectId, ref: "pet", required: true}
    },

    {
        timestamps: true
    }      
)


const user = mongoose.model("user", userSchema);

export default user;
