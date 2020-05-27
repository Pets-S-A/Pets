# language: pt
# encoding: ISO-8859-1

		

Funcionalidade: Veterinário fazer login 
Para realizar um login
Como veterinario
Eu quero realizar um login no Pets

Contexto: 
	Dado que estou na tela de Login
	E que o veterinario digita os dados de login
	Quando clica no botao Entrar
	Entao esta logado

Cenario: Sair tela de login
	Dado que o veterinario esta logado
	Quando deseja sair da tela de logado
	Entao e redirecionado a tela de login


Cenario: Verificar dados dos Pets
	Dado que o veterinario deseja informacoes dos pets
	Quando clica no botao Pets
	Entao e redirecionado a tela de ID do pet

Cenario: Verificar ID errado do Pet
	Dado que o veterinario deseja informacoes de um pet
	Quando digita o ID errado
	Entao permanece na tela de ID do pet

Cenario: Verificar ID correto do Pet
	Dado que o veterinario deseja informacoes de um pet
	Quando digita o ID correto
	Entao ele visualiza as informacoes do Pet
	
	Dado que estou no campo para inserir o nome da vacina
	Quando digito o nome da vacina
	Entao clico em Adicionar nome
	
	Dado que estou no campo para adicionar a data de aplicacao
	Quando digito a data da aplicacao
	Entao clico em Adicionar data
	
	Dado que a vacina foi adicionada
	Quando estou na tela de informacoes do Pet
	Entao consigo visualizar os dados da vacina 