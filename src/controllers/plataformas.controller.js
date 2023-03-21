import plataformas from "../models/Plataformas";

class PlataformasController{
    static listarPlataforma = (res, req) =>{
        plataformas.find((err, plataformas)=>{
            res.status(200).json (plataformas)
        })
    }
    static cadastrarPlataforma = (res, req) =>{
        let plataforma = plataformas(req.body);

        plataforma.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastro de plataforma`});
            }
            else{
                res.status(201).send(plataforma.toJson())
            }
        })
    }
    static atualizarPlataforma = (res, req) =>{
        const id = req.params.id;

        plataformas.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: `plataforma atualizada com sucesso`});
            }
            else{
                res.status(400).send ({message: err.message});
            }
        })
    }
    static listarPlataformaPorId = (req, res) => {
        const id = req.params.id;

        plataformas.findById (id, (err, plataformas)=>{
            if(err) {
                res.status(400).send({message: `${err.message} - id da plataforma nao localizada`});
            }
            else {
                res.status(200).send(plataformas);
            }
            
        })
    }
    static excluirPlataforma = (req, res) => {
        const id = req.params.id;

        plataformas.findByIdAndDelete (id, (err)=>{
            if(err) {
                res.status(400).send({message: `${err.message} - plataforma removida com sucesso`});
            }
            else {
                res.status(500).send({message: err.message});
            }
        })
    }
    
}

export default PlataformasController;