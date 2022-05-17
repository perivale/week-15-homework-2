package com.nopcommerce.demo.cucumber.pages;


import com.nopcommerce.demo.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement buildyourowncom;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement processercdropdown;
    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement ramdropdown;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement hddbutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement osbutton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement software;
    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addtocart;
    @CacheLookup
    @FindBy(xpath = "//p[contains(text(),'The product has been added to your shopping cart')]")
    WebElement verifytext2;

    public void buildyoutowncomputer() {
        clickOnElement(buildyourowncom);
        log.info("build yout own computer"+buildyourowncom.toString());
    }

    public void proseccesdropdownmenu(String processor) {
        sendTextToElement(processercdropdown, processor);
        log.info("procecces drop down menu"+processercdropdown.toString());
    }

    public void ramradiobutton(String ram) {
        sendTextToElement(ramdropdown, ram);
        log.info("ramradio button"+ramdropdown.toString());
    }

    public void hddradioobutton(String radiobutto) {
        sendTextToElement(hddbutton, radiobutto);
        log.info("click on hdd button"+hddbutton.toString());
    }

    public void clickonosbutton(String osbutton1) {
        sendTextToElement(osbutton, osbutton1);
        log.info("click on os button"+osbutton.toString());
    }

    public void clickonsoftware(String softwser) {
        sendTextToElement(software, softwser);
        log.info("click on software option"+software.toString());
    }

    public void addtocart() {
        clickOnElement(addtocart);
        log.info("add to cart"+addtocart.toString());
    }

    public String verifyTextOnFiled() {
        log.info("verify the text"+verifytext2.toString());
        return getTextFromElement(verifytext2);

    }


}
