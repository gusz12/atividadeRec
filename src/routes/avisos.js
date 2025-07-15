var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

// router.get("/listar/", function (req, res) {
//     avisoController.listarPorUsuario(req, res);
// });

router.get("/pesquisar/:titulo", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});


// :idEstoque
router.post("/publicar", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idLivro", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idLivro", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;