var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Aparece blogposts");
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.send("o blogpost tem o id de =" + id);
});

router.post("/", (req, res, next) => {
  const blogPost = {
    titulo: req.body.titulo,
    data: req.body.data,
    descricao: req.body.descricao,
    thumbnail: req.body.thumbnail,
    conteudo: req.body.conteudo,
    escritor: req.body.escritor,
  };

  console.log(blogPost);
  res.status(201).json({
    message: "post blogPost funcionou",
    blogPost: blogPost,
  });
});

router.post("/tags", (req, res, next) => {
  const tags = {
    nome: req.body.nome,
  };

  console.log(tags);
  res.status(201).json({
    message: "post tags funcionou",
    tags: tags,
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
});

router.delete("/tags/:id", (req, res, next) => {
  const id = req.params.id;
});

module.exports = router;
