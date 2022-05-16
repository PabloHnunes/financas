import notas from "../models/Nota.js";

class NotasController {
    
    static listarNotas = (req, res) => {
        notas.find((err,notas) => {
            res.status(200).json(notas);
        })
    }

    static listarNotaPorId = (req, res) => {
        const id = req.params.id;

        notas.findById(id,(err, notas) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do nota não localizado`});
            }else{
                res.status(200).send(notas);
            }
        })
    }

    static cadastrarNota = (req, res) => {
        let material = new notas(req.body);

        material.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar nota.`});
            }else{
                res.status(201).send(material.toJSON());
            }
        })

    }

    static atualizaNota = (req, res) =>{
        const id = req.params.id;

        notas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err){
                res.status(200).send({message: "Nota atualizada com sucesso!"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirNota = (req, res) => {
        const id = req.params.id;

        notas.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Nota removida com sucesso!"});
            }else {
                res.status(500).send({message: err.message});
            }
        })
    }
}

export default NotasController;