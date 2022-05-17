package com.nopcommerce.demo.cucumber.pages;


import com.nopcommerce.demo.cucumber.utility.Utility;
import org.checkerframework.checker.units.qual.C;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.logging.LogManager;
import java.util.logging.Logger;

public class RegisterPage extends Utility {
    private static final org.apache.log4j.Logger log = org.apache.log4j.LogManager.getLogger(RegisterPage.class.getName());
    int num=generateRandomNumber();

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement registerlink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement radiobutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement fristname;
    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastname;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[1]")
    WebElement dataofbirth;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[2]")
    WebElement dateofmonth;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[3]")
    WebElement dateofyesr;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement email;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement password;
    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement conformpassword;
    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registercomplet;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continuebutton;
    @CacheLookup////button[@id='register-button']
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerbutton;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[2]/span[2]")
    WebElement fristnameisreqiredtext;
    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastnameidreqiredtext;
    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailisreqired;
    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordisreqired;
    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement conformpasswordreqiredtext;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement verifyregisterlinktext;


    public void clickonregisterlink() {
        clickOnElement(registerlink);
        log.info("click on register link" + registerlink.toString());
    }

    public void clickongenderbutton() {
        clickOnElement(radiobutton);
        log.info("click on gender button" + radiobutton.toString());
    }

    public void enterfristname(String fname) {
        sendTextToElement(fristname, fname);
        log.info("enter firstname" + fristname.toString());
    }

    public void enterlastname(String lname) {
        sendTextToElement(lastname, lname);
        log.info("enter lastname" + lastname.toString());
    }

    public void dropdowndateofbirth(String date) {
        sendTextToElement(dataofbirth, date);
        log.info("dropdown date of birth" + dataofbirth.toString());
    }

    public void dropdowndateofmoth(String months) {
        sendTextToElement(dateofmonth, months);
        log.info("dropdown date of month" + dateofmonth.toString());
    }

    public void dropdowndateofyear(String yesy) {
        sendTextToElement(dateofyesr, yesy);
        log.info("drop down date of year" + dateofyesr.toString());
    }
    public void enterEmail(){
       //    sendTextToElement(email,"priya" + num + "@gmail.com");
      //  log.info("Enter email : "+"priya" + num + "@gmail.com"+" to email field "+ emailField.toString());
    }

    public void enteremail(String id) {
        sendTextToElement(email, id);
    }

    public void enterpassword(String password1) {
        sendTextToElement(password, password1);
    }

    public void enterconform(String conformpass) {
        sendTextToElement(conformpassword, conformpass);
        log.info("enter conform passowrd" + conformpassword.toString());
    }

    public String textonrigetrfiled() {
        return getTextFromElement(registercomplet);
    }

    public void clickoncontinuebutton() {
        clickOnElement(continuebutton);
        log.info("click on continue button"+continuebutton.toString());
    }

    public String verifyregistertextcompleted() {
        log.info("click on verify the registertext" + registercomplet.toString());


        return getTextFromElement(registercomplet);
    }

    public void clickonregisterbutton() {
        clickOnElement(registerbutton);
        log.info("click on register button" + registerbutton.toString());
    }

    public String verifyfristname() {
        log.info("verify the fristname" + fristname.toString());

        return getTextFromElement(fristname);

    }

    public String verifylastname() {
        log.info("verify the lastname" + lastname.toString());

        return getTextFromElement(lastname);

    }

    public String verifypassword() {
        log.info("verify the password" + password.toString());
        return getTextFromElement(password);

    }

    public String verifyconformpassword() {
        log.info("verify the conpassword" + conformpassword.toString());

        return getTextFromElement(conformpassword);

    }

    public String verifyregistertextonregisterpage() {
        log.info("verify the register text on refister page" + verifyregisterlinktext.toString());
        return getTextFromElement(verifyregisterlinktext);
    }


    public String verifyemailidtext() {

        return getTextFromElement(email);
    }

    public String gettexttofirstnameisreqired() {
        log.info("verify the fristname is required text" + fristnameisreqiredtext.toString());
        return fristnameisreqiredtext.getText();
    }

    public String gettexttolastnameisrequired() {
        log.info("verify the lastname is required text" + lastnameidreqiredtext.toString());

        return lastnameidreqiredtext.getText();
    }

    public String gettexttoemailisreqired() {
        log.info("verify the email is required text" + emailisreqired.toString());

        return emailisreqired.getText();
    }

    public String gettexttopassword() {
        log.info("verify the password is required text" + passwordisreqired.toString());

        return passwordisreqired.getText();
    }

    public String gettexttoConformpasswordisrequired() {
        log.info("verify the conformpassword is required text" + conformpasswordreqiredtext.toString());

        return conformpasswordreqiredtext.getText();
    }
}
