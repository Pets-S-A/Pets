$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/CadastroVet.feature");
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
  "name": "Cadastro Veterinario",
  "description": "Para realizar um cadastro\nComo veterinario\nEu quero realizar um cadastro no Pets",
  "id": "cadastro-veterinario",
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 3543275013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 23080935857,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "nao preenche o nome",
  "description": "",
  "id": "cadastro-veterinario;nao-preenche-o-nome",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 17,
  "name": "nao preencho o campo nome",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "permaneco na tela Register",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.nao_preencho_o_campo_nome()"
});
formatter.result({
  "duration": 69530911,
  "status": "passed"
});
formatter.match({
  "location": "CadVetSteps.permaneco_na_tela_Register()"
});
formatter.result({
  "duration": 1088715762,
  "error_message": "java.lang.AssertionError: Campo nao preenchido\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat StepsCucumber.CadVetSteps.permaneco_na_tela_Register(CadVetSteps.java:72)\r\n\tat ✽.Entao permaneco na tela Register(src/test/java/Features/CadastroVet.feature:18)\r\n",
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 3016119337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 22701284589,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "nao preenche o nome da clinica",
  "description": "",
  "id": "cadastro-veterinario;nao-preenche-o-nome-da-clinica",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 22,
  "name": "nao preencho o campo nome da clinica",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "permaneco na tela Register",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.nao_preencho_o_campo_nome_da_clinica()"
});
formatter.result({
  "duration": 219580733,
  "status": "passed"
});
formatter.match({
  "location": "CadVetSteps.permaneco_na_tela_Register()"
});
formatter.result({
  "duration": 1094986674,
  "error_message": "java.lang.AssertionError: Campo nao preenchido\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat StepsCucumber.CadVetSteps.permaneco_na_tela_Register(CadVetSteps.java:72)\r\n\tat ✽.Entao permaneco na tela Register(src/test/java/Features/CadastroVet.feature:23)\r\n",
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 3343792953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 23003084958,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "nao preenche o crm",
  "description": "",
  "id": "cadastro-veterinario;nao-preenche-o-crm",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 26,
  "name": "nao preencho o campo crm",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "permaneco na tela Register",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.nao_preencho_o_campo_crm()"
});
formatter.result({
  "duration": 291278459,
  "status": "passed"
});
formatter.match({
  "location": "CadVetSteps.permaneco_na_tela_Register()"
});
formatter.result({
  "duration": 1081929070,
  "error_message": "java.lang.AssertionError: Campo nao preenchido\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat StepsCucumber.CadVetSteps.permaneco_na_tela_Register(CadVetSteps.java:72)\r\n\tat ✽.Entao permaneco na tela Register(src/test/java/Features/CadastroVet.feature:27)\r\n",
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 3480018795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 23544119704,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "nao preenche o email",
  "description": "",
  "id": "cadastro-veterinario;nao-preenche-o-email",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 30,
  "name": "nao preencho o campo email",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "permaneco na tela Register",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.nao_preencho_o_campo_email()"
});
formatter.result({
  "duration": 457739264,
  "status": "passed"
});
formatter.match({
  "location": "CadVetSteps.permaneco_na_tela_Register()"
});
formatter.result({
  "duration": 1090089195,
  "error_message": "java.lang.AssertionError: Campo nao preenchido\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat StepsCucumber.CadVetSteps.permaneco_na_tela_Register(CadVetSteps.java:72)\r\n\tat ✽.Entao permaneco na tela Register(src/test/java/Features/CadastroVet.feature:31)\r\n",
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 3259430805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 23242610440,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "nao preenche a senha",
  "description": "",
  "id": "cadastro-veterinario;nao-preenche-a-senha",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 34,
  "name": "nao preencho o campo senha do cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "permaneco na tela Register",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.nao_preencho_o_campo_senha_do_cadastro()"
});
formatter.result({
  "duration": 532178454,
  "status": "passed"
});
formatter.match({
  "location": "CadVetSteps.permaneco_na_tela_Register()"
});
formatter.result({
  "duration": 1087487072,
  "error_message": "java.lang.AssertionError: Campo nao preenchido\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat StepsCucumber.CadVetSteps.permaneco_na_tela_Register(CadVetSteps.java:72)\r\n\tat ✽.Entao permaneco na tela Register(src/test/java/Features/CadastroVet.feature:35)\r\n",
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 3174767832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 23277092082,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "nao preenche o campo repita a senha",
  "description": "",
  "id": "cadastro-veterinario;nao-preenche-o-campo-repita-a-senha",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 38,
  "name": "nao preencho o campo repita a senha",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "permaneco na tela Register",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.nao_preencho_o_campo_repita_a_senha()"
});
formatter.result({
  "duration": 651881516,
  "status": "passed"
});
formatter.match({
  "location": "CadVetSteps.permaneco_na_tela_Register()"
});
formatter.result({
  "duration": 1093076398,
  "error_message": "java.lang.AssertionError: Campo nao preenchido\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat StepsCucumber.CadVetSteps.permaneco_na_tela_Register(CadVetSteps.java:72)\r\n\tat ✽.Entao permaneco na tela Register(src/test/java/Features/CadastroVet.feature:39)\r\n",
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 2974156997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 23260776694,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "preenchimento incorreto",
  "description": "",
  "id": "cadastro-veterinario;preenchimento-incorreto",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 42,
  "name": "preencho diferente o campo repita senha",
  "keyword": "Quando "
});
formatter.step({
  "line": 43,
  "name": "e exibido uma mensagem de erro na tela",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.preencho_diferente_o_campo_repita_senha()"
});
formatter.result({
  "duration": 950539678,
  "status": "passed"
});
formatter.match({
  "location": "CadVetSteps.e_exibido_uma_mensagem_de_erro_na_tela()"
});
formatter.result({
  "duration": 1018571857,
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
  "name": "que estou na tela Register",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "insiro a url \"http://localhost:3000/vet/create?\" do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadVetSteps.que_estou_na_tela_Register()"
});
formatter.result({
  "duration": 2666335235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 14
    }
  ],
  "location": "CadVetSteps.insiro_a_url_do_cadastro(String)"
});
formatter.result({
  "duration": 22986585402,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "preencher corretamente os campos",
  "description": "",
  "id": "cadastro-veterinario;preencher-corretamente-os-campos",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 47,
  "name": "preencho os campos de cadastro corretamente",
  "keyword": "Quando "
});
formatter.step({
  "line": 48,
  "name": "vou para a tela seguinte \"http://localhost:3000/vet/create?\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadVetSteps.preencho_os_campos_de_cadastro_corretamente()"
});
formatter.result({
  "duration": 1553619776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/vet/create?",
      "offset": 26
    }
  ],
  "location": "CadVetSteps.vou_para_a_tela_seguinte(String)"
});
formatter.result({
  "duration": 5028364113,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.92)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAO-BXL8VW2\u0027, ip: \u0027172.18.88.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\tnobreso\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54155}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9623e5c625a17e3bd4a34e6d8db18f72\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:287)\r\n\tat StepsCucumber.CadVetSteps.vou_para_a_tela_seguinte(CadVetSteps.java:185)\r\n\tat ✽.Entao vou para a tela seguinte \"http://localhost:3000/vet/create?\"(src/test/java/Features/CadastroVet.feature:48)\r\n",
  "status": "failed"
});
});