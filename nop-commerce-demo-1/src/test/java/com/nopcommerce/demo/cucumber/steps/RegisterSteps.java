package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.cucumber.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.testng.asserts.SoftAssert;

public class RegisterSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new RegisterPage().clickonregisterlink();
    }

    @And("^I should navigate to registration page successful$")
    public void iShouldNavigateToRegistrationPageSuccessful() {

    }


    @Then("^Verify the register text on register page$")
    public void verifyTheRegisterTextOnRegisterPage() {
        String expectedtext = "Register";
        String actualtext = new RegisterPage().verifyregistertextonregisterpage();
        Assert.assertEquals(actualtext, expectedtext);


    }

    @Then("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickonregisterbutton();
    }

    @And("^I should not navigate to next page$")
    public void iShouldNotNavigateToNextPage() {

    }

    @And("^Verify that all fields are Mandatory$")
    public void verifyThatAllFieldsAreMandatory() {
     //   SoftAssert softAssert=new SoftAssert();
        String expectedfirstname = "First name is required.";
        String actualrfirstname = new RegisterPage().gettexttofirstnameisreqired();
        Assert.assertEquals("verify the first name is required text" ,expectedfirstname,actualrfirstname);

        String expectedlastname="Last name is required.";
        String actuallastname=new RegisterPage().gettexttolastnameisrequired();
        Assert.assertEquals("verify the last name is required text",expectedlastname,actuallastname);

        String expectedemail="Email is required.";
        String actualemail=new RegisterPage().gettexttoemailisreqired();
        Assert.assertEquals("verify the email is reqired",expectedemail,actualemail);

        String expectedpassword="Password is required";
        String actualpassword=new RegisterPage().gettexttopassword();
        Assert.assertEquals("verify the text password is required",expectedpassword,actualpassword);

        String expectedconformpassowrd="Password is required";
        String actualconforpassword=new RegisterPage().gettexttoConformpasswordisrequired();
        Assert.assertEquals("verify the text conform is required",expectedconformpassowrd,actualconforpassword);



    }

    @And("^I click on genderbutton$")
    public void iClickOnGenderbutton() {
        new RegisterPage().clickongenderbutton();
    }

    @And("^I enter on firstname$")
    public void iEnterOnFirstname() {
        new RegisterPage().enterfristname("shilpa");
    }

    @And("^I enter on lastname$")
    public void iEnterOnLastname() {
        new RegisterPage().enterlastname("Patel");
    }

    @And("^I select day of birth$")
    public void iSelectDayOfBirth() {
        new RegisterPage().dropdowndateofbirth("2");
    }

    @And("^I select month of birth$")
    public void iSelectMonthOfBirth() {
        new RegisterPage().dropdowndateofmoth("March");
    }

    @And("^I select year of birth$")
    public void iSelectYearOfBirth() {
        new RegisterPage().dropdowndateofyear("2022");
    }


    @And("^verify the text message$")
    public void verifyTheTextMessage() {
        String expectedtext="Your registration completed";
        String actualtext=new RegisterPage().verifyregistertextcompleted();
       // Assert.assertEquals("verify the message",actualtext,expectedtext);
        Assert.assertEquals("verify the text",expectedtext,actualtext);
    }

    @And("^I enter conform \"([^\"]*)\"$")
    public void iEnterConform(String conpassword) {
        new RegisterPage().enterconform(conpassword);
    }
}