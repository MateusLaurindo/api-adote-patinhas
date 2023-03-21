import mongoose from'mongoose';

const plataformaSchema = mongoose.Schema(
    {
        id:{type: String},
        none: {type: String, required: true},
        pais: {type: String, required: true}
    },
    {
        versionKey: false
    }
)
const plataformas = mongoose.model("plataformas", plataformaSchema);

export default plataformas;