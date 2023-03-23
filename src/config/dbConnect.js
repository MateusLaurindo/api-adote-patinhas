import mongoose from "mongoose";



mongoose.connect("mongodb+srv://mateuslmoraeslima5:h5t43z1mamsJjMsk@cluster0.8rgmkoo.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;