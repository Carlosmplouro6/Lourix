var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Aparece jogos");
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.send("o jogo tem o id de =" + id);
});

router.post("/", (req, res, next) => {
  const jogo = {
    nome: req.body.nome,
    resumo: req.body.resumo,
    descricao: req.body.descricao,
    thumbnail: req.body.thumbnail,
    dtLanc: req.body.dtLanc,
    linkPlaystore: req.body.linkPlaystore,
    linkTrailer: req.body.linkTrailer,
  };

  console.log(jogo);
  res.status(201).json({
    message: "post jogo funcionou",
    jogo: jogo,
  });
});

router.post("/imagens", (req, res, next) => {
  const imagem = {
    localPath: req.body.localPath,
    idJogo: req.body.idJogo,
  };

  console.log(imagem);
  res.status(201).json({
    message: "post imagem funcionou",
    imagem: imagem,
  });
});

router.post("/categorias", (req, res, next) => {
  const categorias = {
    nome: req.body.nome,
  };

  console.log(categorias);
  res.status(201).json({
    message: "post categorias funcionou",
    categorias: categorias,
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
});

router.delete("/imagens/:id", (req, res, next) => {
  const id = req.params.id;
});

router.delete("/categorias/:id", (req, res, next) => {
  const id = req.params.id;
});

module.exports = router;
