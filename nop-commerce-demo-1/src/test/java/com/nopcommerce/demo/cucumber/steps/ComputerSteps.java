package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.cucumber.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;

public class ComputerSteps {

    @When("^I click on computer link$")
    public void iClickOnComputerLink() {
        new HomePage().clickoncomputerlink();
    }

    @Then("^I should navigate to computer page suceessfully$")
    public void iShouldNavigateToComputerPageSuceesssfully() {
    }

    @And("^verify the computer text on computer page$")
    public void verifyTheComputerTextOnComputerPage() {
        String expectedresults = "Computers";
        String actualresults = new ComputerPage().verifycoputertext();
        Assert.assertEquals(actualresults, expectedresults);
    }

    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickondesktoplink();
    }

    @Then("^verify the user should navigate to desktop page successfully$")
    public void verifyTheUserShouldNavigateToDesktopPageSuccessfully() {
        String expectedrusult = "Desktops";
        String actualresult = new DesktopsPage().verifydesktoptext();
        Assert.assertEquals(actualresult, expectedrusult);
    }

    @And("^I click on product build your own computer link$")
    public void iClickOnProductBuildYourOwnComputerLink() {
        new BuildYourOwnComputerPage().buildyoutowncomputer();
    }


    @And("^I click on ADDTOCART button$")
    public void iClickOnADDTOCARTButton() {
        new BuildYourOwnComputerPage().addtocart();
    }

    @Then("^verify the text message \"([^\"]*)\"$")
    public void verifyTheTextMessage() {
        String expectedMeaasge = "The product has been added to your shopping cart";
        String actualMeaasge = new BuildYourOwnComputerPage().verifyTextOnFiled();
       // boolean actualMessage=new BuildYourOwnComputerPage().verifyTextOnFiled();
        Assert.assertTrue(actualMeaasge.contains(expectedMeaasge));
      //  Assert.assertEquals("verify the text on filed", expectedMeaasge, actualMeaasge);
        //Assert.assertture(new.buildyourowncomputer().verifyontextfiled.contains());

    }


    @And("^I Select on \"([^\"]*)\" dropdown menubar$")
    public void iSelectOnDropdownMenubar(String Processor) {
        new BuildYourOwnComputerPage().proseccesdropdownmenu(Processor);

    }

    @And("^I Select on \"([^\"]*)\" option dropdown menu$")
    public void iSelectOnOptionDropdownMenu(String RAM)  {
        new BuildYourOwnComputerPage().ramradiobutton(RAM);

    }

    @And("^I Select on \"([^\"]*)\"option radio button menu$")
    public void iSelectOnOptionRadioButtonMenu(String HDD)  {
        new BuildYourOwnComputerPage().hddradioobutton(HDD);

    }

    @And("^I Select on \"([^\"]*)\" menu button$")
    public void iSelectOnMenuButton(String OS)  {
        new BuildYourOwnComputerPage().clickonosbutton(OS);

    }

    @And("^I Select on \"([^\"]*)\" select menu$")
    public void iSelectOnSelectMenu(String Software)  {
        new BuildYourOwnComputerPage().clickonsoftware(Software);

    }

    @And("^I can see the message on topin green colour menu bar$")
    public void iCanSeeTheMessageOnTopinGreenColourMenuBar() {

    }
}

