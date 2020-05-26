# language: pt
# encoding: ISO-8859-1

		

Funcionalidade: Cadastro Veterinario
Para realizar um cadastro
Como veterinario
Eu quero realizar um cadastro no Pets

Contexto: #antes de cada cenário, ele roda o contexto
		Dado que estou na tela Register
		Quando insiro a url "https://br-vacci-pet.herokuapp.com/vet/create?" do cadastro
		

Cenario: nao preenche o nome
Quando nao preencho o campo nome 
Entao permaneco na tela Register

Cenario: nao preenche o nome da clinica
Quando nao preencho o campo nome da clinica
Entao permaneco na tela Register

Cenario: nao preenche o crm
Quando nao preencho o campo crm
Entao permaneco na tela Register

Cenario: nao preenche o email
Quando nao preencho o campo email
Entao permaneco na tela Register

Cenario: nao preenche a senha
Quando nao preencho o campo senha do cadastro
Entao permaneco na tela Register

Cenario: nao preenche o campo repita a senha
Quando nao preencho o campo repita a senha
Entao permaneco na tela Register

Cenario: preenchimento incorreto
Quando preencho diferente o campo repita senha
Entao e exibido uma mensagem de erro na tela


Cenario: preencher corretamente os campos
Quando preencho os campos de cadastro corretamente
Entao vou para a tela seguinte 


