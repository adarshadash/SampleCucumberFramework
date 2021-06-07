package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class loginSteps {

    /* Step defination for user is on login page */
    @Given("user is on login page")
    public void user_is_on_login_page() {
        // Write code here that turns the phrase above into concrete actions
        try {
            System.out.println("user is in- the user is navigated to home page");
        }
        catch(Exception e) {
            throw new io.cucumber.java.PendingException();
        }
    }

    /* Step defination for how user enters username and pass on login to home page */
    @When("User enters username and password")
    public void user_enters_username_and_password() {
        // Write code here that turns the phrase above into concrete actions
        try {
            System.out.println("user is in- the user is navigated to home page");
        }
        catch(Exception e) {
            throw new io.cucumber.java.PendingException();
        }
    }

    /* Step defincation for how user clicks on login to home page */
    @When("Clicks on Login button")
    public void clicks_on_Login_button() {
        // Write code here that turns the phrase above into concrete actions
        try {
        System.out.println("user is in- Clicks on Login button  ") ;
        }
        catch(Exception e){
            throw new io.cucumber.java.PendingException();
        }
    }

    /* Step defincation for how user is navigate to home page */

    @Then("the user is navigated to home page")
    public void the_user_is_navigated_to_home_page() {
        // Write code here that turns the phrase above into concrete actions
       try {
           System.out.println("user is in- the user is navigated to home page");
       }
           catch(Exception e){
               throw new io.cucumber.java.PendingException();
           }
       }


}



