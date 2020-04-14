# language: pt
# encoding: ISO-8859-1

		

Funcionalidade: Cadastro Usuario
Para realizar um cadastro
Como usuário
Eu quero realizar um cadastro no Pets

Contexto: #antes de cada cenário, ele roda o contexto
		Dado que estou na tela Criando Login
		Quando insiro a url "localhost:3000"
		
@2020
Cenario: nao preenche o usuario
Quando nao preencho o campo usuario 
Entao aparece a mensagem de erro no campo usuario

@3030
Cenario: nao preenche a senha
Quando nao preencho o campo senha
Entao aparece a mensagem de erro no campo senha

@4040
Cenario: preenchimento incorreto
Quando preencho com numero o campo usuario
Entao aparece uma mensagem de erro

@5050
Cenario: preencher corretamente os campos
Quando preencho os campos corretamente
Entao vou para a tela "http://localhost:3000/user/login"


