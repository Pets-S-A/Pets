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
  "duration": 3713881500,
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
  "duration": 21863497096,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#user\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAO-BXL8VW2\u0027, ip: \u002710.235.13.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\tnobreso\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62473}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: efb403925a661f6b45541f6716470222\n*** Element info: {Using\u003did, value\u003duser}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepsCucumber.Steps.insiro_a_url(Steps.java:41)\r\n\tat ✽.Quando insiro a url \"localhost:3000\"(src/test/java/Features/Cadastro.feature:13)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.aparece_a_mensagem_de_erro_no_campo_usuario()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3169696446,
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
  "duration": 22062185773,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#user\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAO-BXL8VW2\u0027, ip: \u002710.235.13.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\tnobreso\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62554}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1228c960b93ae8e60597909413170bff\n*** Element info: {Using\u003did, value\u003duser}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepsCucumber.Steps.insiro_a_url(Steps.java:41)\r\n\tat ✽.Quando insiro a url \"localhost:3000\"(src/test/java/Features/Cadastro.feature:13)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.aparece_a_mensagem_de_erro_no_campo_senha()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3256694742,
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
  "duration": 21923983225,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#user\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAO-BXL8VW2\u0027, ip: \u002710.235.13.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\tnobreso\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62635}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cfe455b57ef65daae7bd77522fa57a1a\n*** Element info: {Using\u003did, value\u003duser}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepsCucumber.Steps.insiro_a_url(Steps.java:41)\r\n\tat ✽.Quando insiro a url \"localhost:3000\"(src/test/java/Features/Cadastro.feature:13)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.aparece_uma_mensagem_de_erro()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3206469122,
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
  "duration": 21888221046,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#user\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAO-BXL8VW2\u0027, ip: \u002710.235.13.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\tnobreso\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51825}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5d3a98b1516c6a079b72a49405ff2b65\n*** Element info: {Using\u003did, value\u003duser}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepsCucumber.Steps.insiro_a_url(Steps.java:41)\r\n\tat ✽.Quando insiro a url \"localhost:3000\"(src/test/java/Features/Cadastro.feature:13)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
});