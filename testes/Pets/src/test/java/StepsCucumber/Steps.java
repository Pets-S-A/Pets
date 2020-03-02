package StepsCucumber;

import static org.junit.Assert.*;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Steps {
	
	static WebDriver driver;
	
	
	@Dado("^que estou na tela Criando Login$")
	public void que_estou_na_tela_Criando_Login() throws Throwable {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Quando("^insirto a url \"([^\"]*)\"$")
	public void insirto_a_url(String url) throws Throwable {
		driver.navigate().to(url);
	}

	@Quando("^nao seleciono uma opcao do campo \"([^\"]*)\"$")
	public void nao_seleciono_uma_opcao_do_campo(String campo) throws Throwable {
	    
	}

	@Entao("^aparece uma mensagem de erro$")
	public void aparece_uma_mensagem_de_erro() throws Throwable {
	   
	}

	@Quando("^nao preencho o campo \"([^\"]*)\"$")
	public void nao_preencho_o_campo(String campo) throws Throwable {
	 
	}

	@Quando("^preencho com numero o campo \"([^\"]*)\"$")
	public void preencho_com_numero_o_campo(String campo) throws Throwable {
	    
	}

	@Quando("^preencho com letra o campo \"([^\"]*)\"$")
	public void preencho_com_letra_o_campo(String campo) throws Throwable {
	  
	}

	@Quando("^preencho o campo \"([^\"]*)\" corretamente$")
	public void preencho_o_campo_corretamente(String campo) throws Throwable {
	    
	}

	@Entao("^efetuo a operaçao com sucesso$")
	public void efetuo_a_operaçao_com_sucesso() throws Throwable {
	    
	}

}
