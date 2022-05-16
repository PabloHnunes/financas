import mongoose from "mongoose";

const notaSchema = new mongoose.Schema(
    {
        id: {type: String},
        texto:{type: String, required: true},
        feito:{type: Boolean, required: true}
    }
);


const notas = mongoose.model('notas', notaSchema);


export default notas;

