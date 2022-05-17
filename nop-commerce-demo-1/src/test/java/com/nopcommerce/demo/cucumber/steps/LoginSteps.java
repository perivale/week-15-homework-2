package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.cucumber.pages.HomePage;
import com.nopcommerce.demo.cucumber.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @Given("^I m on homepage$")
    public void iMOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new LoginPage().clickonloginlink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().welcometextonloginpage();
        Assert.assertEquals("Login page not displayed",actualMessage,expectedMessage);
    }


    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new LoginPage().enteremailid(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password){
        new LoginPage().enterpassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickonloginbottuon();
    }

    @Then("^I should get the error message$")
    public void iShouldGetTheErrorMessage(String errormeaage) {
        Assert.assertEquals(errormeaage,new LoginPage().verifyerrormessage());
    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() {
       new LoginPage().clickonlogoutbutton();
    }

    @And("^Verify the login link desplayed$")
    public void verifyTheLoginLinkDesplayed() {
        new LoginPage().verifyloginlink();
    }
}

