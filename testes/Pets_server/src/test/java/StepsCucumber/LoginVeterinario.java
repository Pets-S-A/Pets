package StepsCucumber;

import static org.junit.Assert.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.pt.*;

public class LoginVeterinario {
	static WebDriver driver;
	WebElement usuario, senha, botaoEntrar, cardPets, PetID, botaoSair, botaoAdicionarVacina;
	WebElement nomeVacina, adicionarNome, campoDataAplicacao,dataAplicacao, adicionarDataAplicacao;
	WebElement dadosVacina;
	
	String user = "userteste@teste.com.br";
	String password = "1234";
	String idCorreto = "31B0";
	
	@Dado("^que estou na tela de Login$")
	public void que_estou_na_tela_de_Login() throws Throwable {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.navigate().to("https://br-vacci-pet.herokuapp.com/");
		usuario = driver.findElement(By.id("email"));
		senha = driver.findElement(By.id("senhaID"));
		botaoEntrar = driver.findElement(By.xpath("/html/body/section/section/grid/form[1]/div/card/button"));
	    
	}

	@Dado("^que o veterinario digita os dados de login$")
	public void que_o_veterinario_digita_os_dados_de_login() throws Throwable {
		usuario.click();
	    usuario.sendKeys(user);
	    senha.click();
	    senha.sendKeys(password);
	}

	@Quando("^clica no botao Entrar$")
	public void clica_no_botao_Entrar() throws Throwable {
	    botaoEntrar.click();
	}

	@Entao("^esta logado$")
	public void esta_logado() throws Throwable {
		cardPets = driver.findElement(By.xpath("//*[@id=\"cards\"]/card"));
	    assertTrue(cardPets.isDisplayed());
	}
	
	@Dado("^que o veterinario esta logado$")
	public void que_o_veterinario_esta_logado() throws Throwable {
	    
	}

	@Quando("^deseja sair da tela de logado$")
	public void deseja_sair_da_tela_de_logado() throws Throwable {
		botaoSair = driver.findElement(By.xpath("/html/body/nav/label/ul/li[2]"));
	    botaoSair.click();
	}

	@Entao("^e redirecionado a tela de login$")
	public void e_redirecionado_a_tela_de_login() throws Throwable {
		Thread.sleep(3000);
		botaoEntrar = driver.findElement(By.xpath("/html/body/section/section/grid/form[1]/div/card/button"));
	    assertTrue(botaoEntrar.isDisplayed());
	    Thread.sleep(3000);
	}

	@Dado("^que o veterinario deseja informacoes dos pets$")
	public void que_o_veterinario_deseja_informacoes_dos_pets() throws Throwable {
		cardPets = driver.findElement(By.xpath("//*[@id=\"cards\"]/card"));
	}

	@Quando("^clica no botao Pets$")
	public void clica_no_botao_Pets() throws Throwable {
	    cardPets.click();
	}

	@Entao("^e redirecionado a tela de ID do pet$")
	public void e_redirecionado_a_tela_de_ID_do_pet() throws Throwable {
	    PetID = driver.findElement(By.xpath("/html/body/section/section/grid/div/card/input"));
	    assertTrue(PetID.isDisplayed());
	}
	
	@Dado("^que o veterinario deseja informacoes de um pet$")
	public void que_o_veterinario_deseja_informacoes_de_um_pet() throws Throwable {
		cardPets = driver.findElement(By.xpath("//*[@id=\"cards\"]/card"));
		cardPets.click();
	}

	@Quando("^digita o ID errado$")
	public void digita_o_ID_errado() throws Throwable {
		PetID = driver.findElement(By.xpath("/html/body/section/section/grid/div/card/input"));
	    PetID.click();
	    PetID.sendKeys("iderrado");
	}

	@Entao("^permanece na tela de ID do pet$")
	public void permanece_na_tela_de_ID_do_pet() throws Throwable {
	    assertTrue(PetID.isDisplayed());
	}

	@Quando("^digita o ID correto$")
	public void digita_o_ID_correto() throws Throwable {
		PetID = driver.findElement(By.xpath("/html/body/section/section/grid/div/card/input"));
	    PetID.click();
	    PetID.sendKeys(idCorreto);
	}

	@Entao("^ele visualiza as informacoes do Pet$")
	public void ele_visualiza_as_informacoes_do_Pet() throws Throwable {
		Thread.sleep(1000);
		botaoAdicionarVacina = driver.findElement(By.xpath("/html/body/section/section/card/grid[4]/div[2]/a/h4"));
	    assertTrue(botaoAdicionarVacina.isDisplayed());
	}
	
	@Dado("^que estou no campo para inserir o nome da vacina$")
	public void que_estou_no_campo_para_inserir_o_nome_da_vacina() throws Throwable {
	   botaoAdicionarVacina.click();
	   nomeVacina = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/input[1]"));
	   nomeVacina.click();
	}

	@Quando("^digito o nome da vacina$")
	public void digito_o_nome_da_vacina() throws Throwable {
	   nomeVacina.sendKeys("V8");
	}

	@Entao("^clico em Adicionar nome$")
	public void clico_em_Adicionar_nome() throws Throwable {
	   adicionarNome = driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[2]"));
	   adicionarNome.click();
	}

	@Dado("^que estou no campo para adicionar a data de aplicacao$")
	public void que_estou_no_campo_para_adicionar_a_data_de_aplicacao() throws Throwable {
		campoDataAplicacao = driver.findElement(By.xpath("//*[@id=\"datepicker\"]"));
		campoDataAplicacao.click();
	}

	@Quando("^digito a data da aplicacao$")
	public void digito_a_data_da_aplicacao() throws Throwable {
		dataAplicacao = driver.findElement(By.xpath("//*[@id=\"ui-datepicker-div\"]/table/tbody/tr[6]/td[1]/a"));
		dataAplicacao.click();
	}
	
	@Entao("^clico em Adicionar data$")
	public void clico_em_Adicionar_data() throws Throwable {
		adicionarDataAplicacao = driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/button[2]"));
		adicionarDataAplicacao.click();
	}

	@Dado("^que a vacina foi adicionada$")
	public void que_a_vacina_foi_adicionada() throws Throwable {
	}

	@Quando("^estou na tela de informacoes do Pet$")
	public void estou_na_tela_de_informacoes_do_Pet() throws Throwable {
	}

	@Entao("^consigo visualizar os dados da vacina$")
	public void consigo_visualizar_os_dados_da_vacina() throws Throwable {
		dadosVacina = driver.findElement(By.xpath("/html/body/section/section/card/grid[5]/div"));
		assertTrue(dadosVacina.isDisplayed());
	}
	
	@After
	public static void fechar() {
		driver.close();
	}

}
