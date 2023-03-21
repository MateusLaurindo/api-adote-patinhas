import jogos from "../models/Jogos.js";

class JogosController {
    static listarJogos = (req, res) => {
        jogos.find((err, jogos) => {
            res.status(200).json(jogos)
        })
    }

    static cadastrarJogo = (req, res) => {
        let jogo = new jogos(req.body);

        jogo.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar jogo`});
            }
            else{
                res.status(201).send(jogo.toJSON())
            }
        })
   
    }
    static atualizarJogo = (req, res) => {
        const id = req.params.id;

        jogos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res(200).send({message: 'jogo atualizado com sucesso'});
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarJogoPorld = (req, res) => {
        const id = req.params.id;

        jogos.findById(id, (err, jogos) => {
            if(err){
                res.status(400).send({message: `${err.message} - id do jogo nao localizada`});
            }
            else{
                res.status(200).send(jogos)
            }
        })
    }


    static excluirJogo = (req, res) => {
        const id = req.params.id;

        jogos.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'jogo removido com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }
    
}
    
export default JogosController