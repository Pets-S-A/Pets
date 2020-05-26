package Features;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue= {"StepsCucumber"},
plugin = {"pretty", "html:target"}, 
monochrome = true, /*tira os caracteres doidos que são usados para colorir a saida em ASCII*/
features = {"src/test/java/Features/LoginVeterinario.feature"}) /*Indica qual cenario da feature quero executar */

public class Runner {

}
