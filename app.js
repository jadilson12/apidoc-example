var express = require("express");
var app = express();

app.use(express.static("public"));

/**
 * @api {get} /signin Singin
 * @apiVersion 0.0.1
 * @apiGroup Autenticação
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Logado!"
 *    }
 *
 */
app.get("/signin", function (req, res) {
  res.json({ status: "Logado!" });
});

/**
 * @apiVersion 0.0.1
 * @api {post} /signup Signup
 * @apiGroup Autenticação
 *
 * @apiSuccess {String} status Mensagem de cadastro efetuado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Cadastrado!"
 *    }
 *
 */
app.post("/signup", function (req, res) {
  res.json({ status: "Cadastrado!" });
});

/**
 * @apiVersion 0.0.1
 * @api {delete} /logout Logout
 * @apiGroup Autenticação
 *
 * @apiSuccess {String} status Mensagem de saída do sistema
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Você saiu do sistema!"
 *    }
 *
 */
app.delete("/logout", function (req, res) {
  res.json({ status: "Saindo do sistema!" });
});

/**
 * @apiVersion 0.0.1
 * @api {put} /pagamento/:codigo Pagamento com código de barras
 * @apiGroup Pagamentos
 *
 * @apiSuccess {String} status Mensagem de dados atualizados
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Dados atualizados!"
 *    }
 *
 */
app.put("/pagamento/:codigo", function (req, res) {
  res.json({ status: "Dados atualizados!" });
});


app.listen(3000, function () {
  console.log("Api up and running!");
});