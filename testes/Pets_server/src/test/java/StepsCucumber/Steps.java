package StepsCucumber;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;




public class Steps {
	
	
	static WebDriver driver;
	WebElement usuario, botaoEntrar, senha, nome, clinica, crmv, email, definirSenha, repetirSenha, botaoCriar;
	
	@Dado("^que estou na tela Criando Login$")
	public void que_estou_na_tela_Criando_Login() throws Throwable {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Quando("^insiro a url \"([^\"]*)\"$")
	public void insiro_a_url(String url) throws Throwable {
		driver.navigate().to(url);
		
		usuario = driver.findElement(By.id("email"));
		botaoEntrar = driver.findElement(By.xpath("/html/body/section/section/grid/form/div/card/button"));
		senha = driver.findElement(By.id("senhaID"));
		
		WebDriverWait wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.elementToBeClickable(senha));
		
		Thread.sleep(1000);
	}
		
	@Quando("^nao preencho o campo usuario$")
	public void nao_preencho_o_campo_usuario() throws Throwable {
		
		usuario.click();
		usuario.clear();
	    senha.click();
	    senha.sendKeys("3y3y363f");
	    botaoEntrar.click();
	    
	}
	
	@Entao("^aparece a mensagem de erro no campo usuario$")
	public void aparece_a_mensagem_de_erro_no_campo_usuario() throws Throwable {
		if(driver.getCurrentUrl().equals("localhost:3000")) {
			System.out.println(	"\n*** campo usuario incompleto ***");
		}
		assertTrue("campo usuario incompleto",driver.getCurrentUrl().equals("localhost:3000"));
		driver.close();		
	}
	
	@Quando("^nao preencho o campo senha$")
	public void nao_preencho_o_campo_senha() throws Throwable {
		senha.click();
		senha.clear();
	    usuario.click();
	    usuario.sendKeys("FelipeAA");
	    botaoEntrar.click();
	}
	
	@Entao("^aparece a mensagem de erro no campo senha$")
	public void aparece_a_mensagem_de_erro_no_campo_senha() throws Throwable {
		
		if(driver.getCurrentUrl().equals("localhost:3000")) {
			System.out.println(	"\n*** campo senha incompleto ***");
		}
		assertTrue("campo senha incompleto",driver.getCurrentUrl().equals("localhost:3000"));
		driver.close();
	}
	
	
	@Quando("^preencho com numero o campo usuario$")
	public void preencho_com_numero_o_campo_usuario() throws Throwable {
		
		usuario.click();
		usuario.sendKeys("253363");
		Thread.sleep(1000);
		senha.click();
		senha.sendKeys("3y3y363f");
		Thread.sleep(1000);
		botaoEntrar.click();
	
	}
	
	@Entao("^aparece uma mensagem de erro$")
	public void aparece_uma_mensagem_de_erro() throws Throwable {
		
		Thread.sleep(1000);
		
		if(driver.getCurrentUrl().equals("http://localhost:3000/user/login")) {
			System.out.println("	\n*** campo usuario com numero ***");
		}
		assertFalse("campo usuario com numero",driver.getCurrentUrl().equals("http://localhost:3000/user/login"));
		
		driver.close();
	  
	}
	
	
	@Quando("^preencho os campos corretamente$")
	public void preencho_os_campos_corretamente() throws Throwable {
		
		usuario.sendKeys("FelipeAA");
		Thread.sleep(1000);
		senha.click();
		senha.sendKeys("3y3y363f");
		
	  
	}
	
	@Entao("^vou para a tela \"([^\"]*)\"$")
	public void vou_para_a_tela(String proxTela) throws Throwable {
		
		Thread.sleep(1000);
		botaoEntrar.click();	
	   if(driver.getCurrentUrl().equals(proxTela) ) {
		   System.out.println("dados preenchidos corretamente");
	   }
	   assertTrue("dados preenchidos corretamente",driver.getCurrentUrl().equals(proxTela));
	   Thread.sleep(1000);
	   driver.close();
	}
}
