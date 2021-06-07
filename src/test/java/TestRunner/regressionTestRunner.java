package TestRunner;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/testFeatures",
        glue={"stepDefinitions"},
        monochrome=false,
        plugin={"pretty","html:target/HtmlReports"},
        tags="@Regression")
public class regressionTestRunner {
}
