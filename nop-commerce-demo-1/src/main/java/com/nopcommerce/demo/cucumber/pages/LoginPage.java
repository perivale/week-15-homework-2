package com.nopcommerce.demo.cucumber.pages;


import com.nopcommerce.demo.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement loginlink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement email;
    @CacheLookup
    @FindBy(id = "Password")
    WebElement password;
    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginbutton;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcometext;
    @CacheLookup
    @FindBy(xpath = "//div[@class=\"message-error validation-summary-errors\"]")
    WebElement verifyerrormess;
    @CacheLookup
    @FindBy(id = "Log out")
    WebElement logoutbutton;


    public void clickonloginlink() {
        clickOnElement(loginlink);
        log.info("click on login link"+loginlink.toString());
    }

    public void enteremailid(String id) {
        sendTextToElement(email, id);
        log.info("enter email id"+email.toString());
    }

    public void enterpassword(String password1) {
        sendTextToElement(password, password1);
        log.info("enter passowrd"+password.toString());
    }

    public void clickonloginbottuon() {
        clickOnElement(loginbutton);
        log.info("click on login button"+loginbutton.toString());
    }

    public String welcometextonloginpage()
    {
        log.info("verify the welcometext on login page"+welcometext.toString());
        return getTextFromElement(welcometext);
    }

    public String verifyerrormessage() {
        log.info("verify the error message"+verifyerrormess.toString());
        return getTextFromElement(verifyerrormess);
    }

    public String verifyLogoutbutton() {
        log.info("verify the log out button"+logoutbutton.toString());
        return getTextFromElement(logoutbutton);

    }

    public void clickonlogoutbutton() {
        clickOnElement(logoutbutton);
        log.info("click on logout button"+logoutbutton.toString());
    }

    public String verifyloginlink() {
        log.info("verify the login link"+loginlink.toString());

        return getTextFromElement(loginlink);
    }

}
