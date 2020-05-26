$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/LoginVeterinario.feature");
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
  "name": "Veterinário fazer login",
  "description": "Para realizar um login\nComo veterinario\nEu quero realizar um login no Pets",
  "id": "veterinário-fazer-login",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 12,
  "name": "que estou na tela de Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "que o veterinario digita os dados de login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clica no botao Entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "esta logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginVeterinario.que_estou_na_tela_de_Login()"
});
formatter.result({
  "duration": 39051284779,
  "status": "passed"
});
formatter.match({
  "location": "LoginVeterinario.que_o_veterinario_digita_os_dados_de_login()"
});
formatter.result({
  "duration": 97918894,
  "error_message": "java.lang.NullPointerException\r\n\tat StepsCucumber.LoginVeterinario.que_o_veterinario_digita_os_dados_de_login(LoginVeterinario.java:34)\r\n\tat ✽.E que o veterinario digita os dados de login(src/test/java/Features/LoginVeterinario.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginVeterinario.clica_no_botao_Entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginVeterinario.esta_logado()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Sair tela de login",
  "description": "",
  "id": "veterinário-fazer-login;sair-tela-de-login",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 18,
  "name": "que o veterinario esta logado",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "deseja sair da tela de logado",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "e redirecionado a tela de login",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginVeterinario.que_o_veterinario_esta_logado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginVeterinario.deseja_sair_da_tela_de_logado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginVeterinario.e_redirecionado_a_tela_de_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 905400464,
  "status": "passed"
});
formatter.after({
  "duration": 108017,
  "error_message": "java.lang.NullPointerException\r\n\tat StepsCucumber.CadVetSteps.fechar(CadVetSteps.java:174)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 11,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 12,
  "name": "que estou na tela de Login",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "que o veterinario digita os dados de login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clica no botao Entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "esta logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginVeterinario.que_estou_na_tela_de_Login()"
});
