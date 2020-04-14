$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# encoding: ISO-8859-1"
    }
  ],
  "line": 6,
  "name": "Cadastro Usuario",
  "description": "Para realizar um cadastro\nComo usuário\nEu quero realizar um cadastro no Pets",
  "id": "cadastro-usuario",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 11,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 12,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"localhost:3000\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 4617679099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "localhost:3000",
      "offset": 14
    }
  ],
  "location": "Steps.insiro_a_url(String)"
});
formatter.result({
  "duration": 23000243578,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "nao preenche o usuario",
  "description": "",
  "id": "cadastro-usuario;nao-preenche-o-usuario",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@2020"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "nao preencho o campo usuario",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "aparece a mensagem de erro no campo usuario",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.nao_preencho_o_campo_usuario()"
});
formatter.result({
  "duration": 285552492,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_a_mensagem_de_erro_no_campo_usuario()"
});
formatter.result({
  "duration": 33494909,
  "error_message": "java.lang.AssertionError: campo usuario incompleto\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepsCucumber.Steps.aparece_a_mensagem_de_erro_no_campo_usuario(Steps.java:67)\r\n\tat ✽.Entao aparece a mensagem de erro no campo usuario(src/test/java/Features/Cadastro.feature:18)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 11,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 12,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"localhost:3000\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 3650682531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "localhost:3000",
      "offset": 14
    }
  ],
  "location": "Steps.insiro_a_url(String)"
});
formatter.result({
  "duration": 22744461577,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "nao preenche a senha",
  "description": "",
  "id": "cadastro-usuario;nao-preenche-a-senha",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 20,
      "name": "@3030"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "nao preencho o campo senha",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "aparece a mensagem de erro no campo senha",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.nao_preencho_o_campo_senha()"
});
formatter.result({
  "duration": 390200722,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_a_mensagem_de_erro_no_campo_senha()"
});
formatter.result({
  "duration": 34268309,
  "error_message": "java.lang.AssertionError: campo senha incompleto\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepsCucumber.Steps.aparece_a_mensagem_de_erro_no_campo_senha(Steps.java:86)\r\n\tat ✽.Entao aparece a mensagem de erro no campo senha(src/test/java/Features/Cadastro.feature:23)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 11,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 12,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"localhost:3000\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 4036621452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "localhost:3000",
      "offset": 14
    }
  ],
  "location": "Steps.insiro_a_url(String)"
});
formatter.result({
  "duration": 22461169876,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "preenchimento incorreto",
  "description": "",
  "id": "cadastro-usuario;preenchimento-incorreto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 25,
      "name": "@4040"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "preencho com numero o campo usuario",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "aparece uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.preencho_com_numero_o_campo_usuario()"
});
formatter.result({
  "duration": 2390990864,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 1678299169,
  "status": "passed"
});
formatter.background({
  "line": 11,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 12,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"localhost:3000\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 3068037039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "localhost:3000",
      "offset": 14
    }
  ],
  "location": "Steps.insiro_a_url(String)"
});
formatter.result({
  "duration": 23032198167,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "preencher corretamente os campos",
  "description": "",
  "id": "cadastro-usuario;preencher-corretamente-os-campos",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 30,
      "name": "@5050"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "preencho os campos corretamente",
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "vou para a tela \"http://localhost:3000/user/login\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.preencho_os_campos_corretamente()"
});
formatter.result({
  "duration": 1235491058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/user/login",
      "offset": 17
    }
  ],
  "location": "Steps.vou_para_a_tela(String)"
});
formatter.result({
  "duration": 1114483153,
  "error_message": "java.lang.AssertionError: dados preenchidos corretamente\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat StepsCucumber.Steps.vou_para_a_tela(Steps.java:138)\r\n\tat ✽.Entao vou para a tela \"http://localhost:3000/user/login\"(src/test/java/Features/Cadastro.feature:33)\r\n",
  "status": "failed"
});
});