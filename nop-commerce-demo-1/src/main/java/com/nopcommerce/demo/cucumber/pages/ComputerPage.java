package com.nopcommerce.demo.cucumber.pages;


import com.nopcommerce.demo.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());


    public ComputerPage() {
        PageFactory.initElements(driver, this);

    }

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h2[1]/a[1]")
    WebElement desktoplink;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[1]/a[1]")
    WebElement notebook;
    @CacheLookup
    @FindBy(xpath = "//body[1]/div[6]/div[2]/ul[1]/li[1]/ul[1]/li[3]")
    WebElement software;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement computertext;


    public void clickondesktoplink() {
        clickOnElement(desktoplink);
        log.info("click on desktop teb" + desktoplink.toString());
    }

    public void clickonnotebooklink() {
        clickOnElement(notebook);
    }

    public void clickonsoftwarelink() {
        clickOnElement(software);
        log.info("click on software link" + software.toString());
    }

    public String verifycoputertext() {
        log.info("verify the computer text" + computertext.toString());
        return getTextFromElement(computertext);

    }
}

