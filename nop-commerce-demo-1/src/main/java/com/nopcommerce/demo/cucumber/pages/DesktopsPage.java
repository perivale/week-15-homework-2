package com.nopcommerce.demo.cucumber.pages;
import com.nopcommerce.demo.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopsPage extends Utility {
    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }
@CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
    WebElement desktoptext;
@CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Sort by')]")
    WebElement sortby;
@CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Display')]")
    WebElement disply;

    public void clickondesktoptext() {
        clickOnElement(desktoptext);
        log.info("click on desktop link"+desktoptext.toString());
    }

    public void clickonsortbytext() {
        clickOnElement(sortby);
    }

    public void clickondisplytext() {
        clickOnElement(disply);

    }
    public String verifydesktoptext(){
        log.info("verify the desktop text"+desktoptext.toString());
        return getTextFromElement(desktoptext);

    }
}