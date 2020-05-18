var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Aparece funcionarios");
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.send("o funcionario tem o id de =" + id);
});

router.post("/", (req, res, next) => {
  const funcionario = {
    nome: req.body.nome,
    cargo: req.body.cargo,
    fotografia: req.body.fotografia,
    idade: req.body.idade,
    linkPessoal: req.body.linkPessoal,
  };

  console.log(funcionario);
  res.status(201).json({
    message: "post funcionario funcionou",
    funcionario: funcionario,
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
});

module.exports = router;
