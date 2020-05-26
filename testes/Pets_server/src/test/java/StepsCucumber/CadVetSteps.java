package StepsCucumber;

import static org.junit.Assert.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.After;
import cucumber.api.java.pt.*;

public class CadVetSteps {
	
	static WebDriver driver;
	WebElement usuario, botaoEntrar, senha, nome, clinica, crmv, email, definirSenha, repetirSenha, botaoCriar;
	

	@Dado("^que estou na tela Register$")
	public void que_estou_na_tela_Register() throws Throwable {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Quando("^insiro a url \"([^\"]*)\" do cadastro$")
	public void insiro_a_url_do_cadastro(String url) throws Throwable {
		driver.navigate().to(url);

		nome = driver.findElement(By.id("name"));
		clinica = driver.findElement(By.name("clinic"));
		crmv = driver.findElement(By.name("crmv"));
		email = driver.findElement(By.id("email"));
		definirSenha = driver.findElement(By.name("password"));
		repetirSenha = driver.findElement(By.name("password2"));
		botaoCriar = driver.findElement(By.xpath("/html/body/section/section/grid/form/div/card/button"));
		
		WebDriverWait wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.elementToBeClickable(botaoCriar));
		
		Thread.sleep(1000);
	}

	@Quando("^nao preencho o campo nome$")
	public void nao_preencho_o_campo_nome() throws Throwable {
		nome.click();
		nome.sendKeys("");
	}

	@Entao("^permaneco na tela Register$")
	public void permaneco_na_tela_Register() throws Throwable {
		
		botaoCriar.click();
		
		Thread.sleep(1000);
		
		assertTrue("Campo nao preenchido", botaoCriar.isDisplayed());
		
	}

	@Quando("^nao preencho o campo nome da clinica$")
	public void nao_preencho_o_campo_nome_da_clinica() throws Throwable {
		nome.click();
		nome.sendKeys("ABC");
		clinica.click();
		clinica.sendKeys("");
	}

	@Quando("^nao preencho o campo crm$")
	public void nao_preencho_o_campo_crm() throws Throwable {
		nome.click();
		nome.sendKeys("ABC");
		clinica.click();
		clinica.sendKeys("Pets do Vale");
		crmv.click();
		crmv.sendKeys("");
	}

	@Quando("^nao preencho o campo email$")
	public void nao_preencho_o_campo_email() throws Throwable {
		nome.click();
		nome.sendKeys("ABC");
		clinica.click();
		clinica.sendKeys("Pets do Vale");
		crmv.click();
		crmv.sendKeys("63973652");
		email.click();
		email.sendKeys("");
	}

	@Quando("^nao preencho o campo senha do cadastro$")
	public void nao_preencho_o_campo_senha_do_cadastro() throws Throwable {
		nome.click();
		nome.sendKeys("Marcelina Frescho");
		clinica.click();
		clinica.sendKeys("Pets do Vale");
		crmv.click();
		crmv.sendKeys("63973652");
		email.click();
		email.sendKeys("marcelina@hotmail.com");
		definirSenha.click();
		definirSenha.sendKeys("");
	}
	
	@Quando("^nao preencho o campo repita a senha$")
	public void nao_preencho_o_campo_repita_a_senha() throws Throwable {
		nome.click();
		nome.sendKeys("Marcelina Frescho");
		clinica.click();
		clinica.sendKeys("Pets do Vale");
		crmv.click();
		crmv.sendKeys("63973652");
		email.click();
		email.sendKeys("marcelina@hotmail.com");
		definirSenha.click();
		definirSenha.sendKeys("123456");
		repetirSenha.click();
		repetirSenha.sendKeys("");
	}

	@Quando("^preencho diferente o campo repita senha$")
	public void preencho_diferente_o_campo_repita_senha() throws Throwable {
			nome.click();
			nome.sendKeys("Marcelina Frescho");
			clinica.click();
			clinica.sendKeys("Pets do Vale");
			crmv.click();
			crmv.sendKeys("63973652");
			email.click();
			email.sendKeys("marcelina1@hotmail.com");
			definirSenha.click();
			definirSenha.sendKeys("123456");
			repetirSenha.click();
			repetirSenha.sendKeys("ABCDEF");
			botaoCriar.click();
			
		
	}
	
	@Entao("^e exibido uma mensagem de erro na tela$")
	public void e_exibido_uma_mensagem_de_erro_na_tela() throws Throwable {
		
		Thread.sleep(1000);
		
		assertFalse("Mensagem de erro exibida",driver.getCurrentUrl().equals("https://br-vacci-pet.herokuapp.com/vet/create?"));
		
	}
	

	@Quando("^preencho os campos de cadastro corretamente$")
	public void preencho_os_campos_de_cadastro_corretamente() throws Throwable {
		nome.click();
		nome.sendKeys("Marcelina Frescho");
		clinica.click();
		clinica.sendKeys("Pets do Vale");
		crmv.click();
		crmv.sendKeys("63973652");
		email.click();
		email.sendKeys("marcelina2@hotmail.com");
		definirSenha.click();
		definirSenha.sendKeys("123456");
		repetirSenha.click();
		repetirSenha.sendKeys("123456");
		botaoCriar.click();
	}
	
	@Entao("^vou para a tela seguinte$")
	public void vou_para_a_tela_seguinte() throws Throwable {
		Thread.sleep(1000);
		assertTrue("Cadastro SUCESSO",driver.getCurrentUrl().equals("https://br-vacci-pet.herokuapp.com/vet/create"));
	}
	
//	@After
	//public static void fechar() {
	//	driver.close();
	//}
}


	
