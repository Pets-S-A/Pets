# language: pt
# encoding: ISO-8859-1

@3030	
Funcionalidade: Cadastro
Para realizar um cadastro
Como usuário
Eu quero realizar um cadastro no Pets

Contexto: #antes de cada cenário, ele roda o contexto
		Dado que estou na tela Criando Login
		Quando insirto a url "file:///C:/Users/tnobreso/Documents/Facul/7_semestre/Pets/Index2.html"

Cenario: nao preenche os campos
Quando nao seleciono uma opcao do campo "tipo do usuario" 
Entao aparece uma mensagem de erro

Quando nao preencho o campo "nome"
Entao aparece uma mensagem de erro

Quando nao preencho o campo "email"
Entao aparece uma mensagem de erro

Quando nao preencho o campo "nascimento"
Entao aparece uma mensagem de erro

Quando nao preencho o campo "senha"
Entao aparece uma mensagem de erro

Cenario: preenchimento incorreto
Quando preencho com numero o campo "nome"
Entao aparece uma mensagem de erro

Quando preencho com letra o campo "nascimento"
Entao aparece uma mensagem de erro

Cenario: preencher corretamente os campos
Quando preencho o campo "tipo do usuário" corretamente
Entao efetuo a operaçao com sucesso

Quando preencho o campo "nome" corretamente
Entao efetuo a operaçao com sucesso

Quando preencho o campo "email" corretamente
Entao efetuo a operaçao com sucesso

Quando preencho o campo "nascimento" corretamente
Entao efetuo a operaçao com sucesso

Quando preencho o campo "senha" corretamente
Entao efetuo a operaçao com sucesso