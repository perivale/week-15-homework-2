package com.nopcommerce.demo.cucumber.pages;


import com.nopcommerce.demo.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[1]/a[1]")
    WebElement computer;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[2]/a[1]")
    WebElement electronics;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[3]/a[1]")
    WebElement appreals;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[4]/a[1]")
    WebElement digitalsdownloads;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[5]/a[1]")
    WebElement books;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[6]/a[1]")
    WebElement jeweary;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[7]/a[1]")
    WebElement giftcard;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement registerlink;
    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[1]/div[2]/div[1]/a[1]/img[1]")
    WebElement weblogo;

    public void clickoncomputerlink() {
        clickOnElement(computer);
        log.info("click on computer link" + computer.toString());

    }

    public void clickonelectricslink() {
        clickOnElement(electronics);
        log.info("click on electric link" + electronics.toString());
    }

    public void clickonapprealslink() {
        clickOnElement(appreals);
        log.info("click on appreal link" + appreals.toString());
    }


    public void clickondigitaldownloadrlink() {
        clickOnElement(digitalsdownloads);
        log.info("click on digital download link" + digitalsdownloads.toString());
    }

    public void clickonbookslink() {
        clickOnElement(books);
        log.info("click on books " + books.toString());
    }

    public void clickonjewerlylink() {
        clickOnElement(jeweary);
        log.info("click on jewaary link" + jeweary.toString());
    }

    public void clickongiftcardlink() {
        clickOnElement(giftcard);
        log.info("click on gift card link" + giftcard.toString());
    }

    public void clickonregisterlink() {
        clickOnElement(registerlink);
        log.info("click on registerlink" + registerlink.toString());
    }

    public void clickonlogo() {
        clickOnElement(weblogo);
        log.info("click on weblogo" + weblogo.toString());
    }


}
