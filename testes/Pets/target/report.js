$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Cadastro.feature");
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
  "line": 5,
  "name": "Cadastro",
  "description": "Para realizar um cadastro\nComo usuário\nEu quero realizar um cadastro no Pets",
  "id": "cadastro",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@3030"
    }
  ]
});
formatter.background({
  "line": 10,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "insirto a url \"file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 7221813139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html",
      "offset": 15
    }
  ],
  "location": "Steps.insirto_a_url(String)"
});
formatter.result({
  "duration": 234800004,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "nao selecionar opcao",
  "description": "",
  "id": "cadastro;nao-selecionar-opcao",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 15,
  "name": "nao seleciono uma opcao do campo \"tipo do usuario\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "aparece uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "tipo do usuario",
      "offset": 34
    }
  ],
  "location": "Steps.nao_seleciono_uma_opcao_do_campo(String)"
});
formatter.result({
  "duration": 175527,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 67510,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "insirto a url \"file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 4768625750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html",
      "offset": 15
    }
  ],
  "location": "Steps.insirto_a_url(String)"
});
formatter.result({
  "duration": 248773064,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "nao preenche campo",
  "description": "",
  "id": "cadastro;nao-preenche-campo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 19,
  "name": "nao preencho o campo \"nome\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "aparece uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "nome",
      "offset": 22
    }
  ],
  "location": "Steps.nao_preencho_o_campo(String)"
});
formatter.result({
  "duration": 134481,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 70751,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "insirto a url \"file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 5139026865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html",
      "offset": 15
    }
  ],
  "location": "Steps.insirto_a_url(String)"
});
formatter.result({
  "duration": 294086132,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "nao preenche campo",
  "description": "",
  "id": "cadastro;nao-preenche-campo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 23,
  "name": "nao preencho o campo \"email\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "aparece uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 22
    }
  ],
  "location": "Steps.nao_preencho_o_campo(String)"
});
formatter.result({
  "duration": 95055,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 26464,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "insirto a url \"file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 4791732174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html",
      "offset": 15
    }
  ],
  "location": "Steps.insirto_a_url(String)"
});
formatter.result({
  "duration": 393390881,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "nao preenche campo",
  "description": "",
  "id": "cadastro;nao-preenche-campo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 27,
  "name": "nao preencho o campo \"nascimento\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "aparece uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "nascimento",
      "offset": 22
    }
  ],
  "location": "Steps.nao_preencho_o_campo(String)"
});
formatter.result({
  "duration": 59949,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 23224,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "insirto a url \"file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 5234535363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html",
      "offset": 15
    }
  ],
  "location": "Steps.insirto_a_url(String)"
});
formatter.result({
  "duration": 216404194,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "nao preenche campo",
  "description": "",
  "id": "cadastro;nao-preenche-campo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 31,
  "name": "nao preencho o campo \"senha\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "aparece uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "senha",
      "offset": 22
    }
  ],
  "location": "Steps.nao_preencho_o_campo(String)"
});
formatter.result({
  "duration": 70211,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 25384,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "insirto a url \"file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
formatter.result({
  "duration": 4157354084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html",
      "offset": 15
    }
  ],
  "location": "Steps.insirto_a_url(String)"
});
formatter.result({
  "duration": 252766986,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "preenchimento incorreto",
  "description": "",
  "id": "cadastro;preenchimento-incorreto",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 35,
  "name": "preencho com numero o campo \"nome\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 36,
  "name": "aparece uma mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "nome",
      "offset": 29
    }
  ],
  "location": "Steps.preencho_com_numero_o_campo(String)"
});
formatter.result({
  "duration": 216574,
  "status": "passed"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "duration": 68591,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "#antes de cada cenário, ele roda o contexto",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou na tela Criando Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "insirto a url \"file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.que_estou_na_tela_Criando_Login()"
});
