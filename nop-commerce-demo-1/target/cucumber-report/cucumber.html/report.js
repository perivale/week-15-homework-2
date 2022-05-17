$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a User I want to login nop commerce web site",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4468306400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I m on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to computer page suceessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify the computer text on computer page",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1006323400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToComputerPageSuceesssfully()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyTheComputerTextOnComputerPage()"
});
formatter.result({
  "duration": 48052900,
  "status": "passed"
});
formatter.after({
  "duration": 33000,
  "status": "passed"
});
formatter.before({
  "duration": 2469896400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I m on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify the user should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 669848399,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 456248099,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyTheUserShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 34901601,
  "status": "passed"
});
formatter.after({
  "duration": 15300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "verify That User Should BuildYouOwnComputer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select on \"\u003cProcessor\u003e\" dropdown menubar",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select on \"\u003cRAM\u003e\" option dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select on \"\u003cHDD\u003e\"option radio button menu",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select on \"\u003cOS\u003e\" menu button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select on \"\u003cSoftware\u003e\" select menu",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADDTOCART button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "verify the text message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Processor",
        "RAM",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2204425500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I m on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should BuildYouOwnComputer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select on \"2.2 GHz Intel Pentium Dual-Core E2200\" dropdown menubar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select on \"2 GB\" option dropdown menu",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select on \"320 GB\"option radio button menu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select on \"Vista Home [+$50.00]\" menu button",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select on \"Microsoft Office [+$50.00]\" select menu",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADDTOCART button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "verify the text message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 587078601,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 470918301,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 1163466400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnDropdownMenubar(String)"
});
formatter.result({
  "duration": 201635499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnOptionDropdownMenu(String)"
});
formatter.result({
  "duration": 150888199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnOptionRadioButtonMenu(String)"
});
formatter.result({
  "duration": 151254300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d101.0.4951.54)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-JPKCAVC\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [16baeacccf93310fbe4c32a632d6775c, sendKeysToElement {id\u003d2e6921ed-175c-4ef3-9411-7aba156f3b3d, value\u003d[Ljava.lang.CharSequence;@316a598d}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55612}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55612/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (16baeacccf93310fbe4c32a632d6775c)] -\u003e xpath: //body/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[7]/dl[1]/dd[3]/ul[1]/li[2]]\nSession ID: 16baeacccf93310fbe4c32a632d6775c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:107)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.nopcommerce.demo.cucumber.utility.Utility.sendTextToElement(Utility.java:77)\r\n\tat com.nopcommerce.demo.cucumber.pages.BuildYourOwnComputerPage.hddradioobutton(BuildYourOwnComputerPage.java:61)\r\n\tat com.nopcommerce.demo.cucumber.steps.ComputerSteps.iSelectOnOptionRadioButtonMenu(ComputerSteps.java:75)\r\n\tat ✽.And I Select on \"320 GB\"option radio button menu(computer.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnMenuButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.verifyTheTextMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32100,
  "status": "passed"
});
formatter.before({
  "duration": 4282058800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I m on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should BuildYouOwnComputer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select on \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" dropdown menubar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select on \"4GB [+$20.00]\" option dropdown menu",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select on \"400 GB [+$100.00]\"option radio button menu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select on \"Vista Premium [+$60.00]\" menu button",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select on \"Acrobat Reader [+$10.00]\" select menu",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADDTOCART button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "verify the text message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 832943800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 673981900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 1055191800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnDropdownMenubar(String)"
});
formatter.result({
  "duration": 201379600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnOptionDropdownMenu(String)"
});
formatter.result({
  "duration": 130545900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnOptionRadioButtonMenu(String)"
});
formatter.result({
  "duration": 112064901,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d101.0.4951.54)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-JPKCAVC\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [99c153c661c83de2bc991cf38a9611e2, sendKeysToElement {id\u003d28235f10-9502-41dd-b739-d8bf71f63a78, value\u003d[Ljava.lang.CharSequence;@25d93198}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55634}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55634/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (99c153c661c83de2bc991cf38a9611e2)] -\u003e xpath: //body/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[7]/dl[1]/dd[3]/ul[1]/li[2]]\nSession ID: 99c153c661c83de2bc991cf38a9611e2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:107)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.nopcommerce.demo.cucumber.utility.Utility.sendTextToElement(Utility.java:77)\r\n\tat com.nopcommerce.demo.cucumber.pages.BuildYourOwnComputerPage.hddradioobutton(BuildYourOwnComputerPage.java:61)\r\n\tat com.nopcommerce.demo.cucumber.steps.ComputerSteps.iSelectOnOptionRadioButtonMenu(ComputerSteps.java:75)\r\n\tat ✽.And I Select on \"400 GB [+$100.00]\"option radio button menu(computer.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnMenuButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.verifyTheTextMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25900,
  "status": "passed"
});
formatter.before({
  "duration": 3220961300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I m on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should BuildYouOwnComputer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select on \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" dropdown menubar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select on \"8GB [+$60.00]\" option dropdown menu",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select on \"320 GB\"option radio button menu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select on \"Vista Home [+$50.00]\" menu button",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select on \"Total Commander [+$5.00]\" select menu",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ADDTOCART button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "verify the text message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 760088200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 681906300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 1314299000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnDropdownMenubar(String)"
});
formatter.result({
  "duration": 193239299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnOptionDropdownMenu(String)"
});
formatter.result({
  "duration": 132915999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnOptionRadioButtonMenu(String)"
});
formatter.result({
  "duration": 108646200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d101.0.4951.54)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-JPKCAVC\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0017898d584abdf1dd01c94bbcb60bbb, sendKeysToElement {id\u003d267faa23-f1db-4ebd-af94-c6aed04ab8f2, value\u003d[Ljava.lang.CharSequence;@574a89e2}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55658}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55658/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (0017898d584abdf1dd01c94bbcb60bbb)] -\u003e xpath: //body/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[7]/dl[1]/dd[3]/ul[1]/li[2]]\nSession ID: 0017898d584abdf1dd01c94bbcb60bbb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:107)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.nopcommerce.demo.cucumber.utility.Utility.sendTextToElement(Utility.java:77)\r\n\tat com.nopcommerce.demo.cucumber.pages.BuildYourOwnComputerPage.hddradioobutton(BuildYourOwnComputerPage.java:61)\r\n\tat com.nopcommerce.demo.cucumber.steps.ComputerSteps.iSelectOnOptionRadioButtonMenu(ComputerSteps.java:75)\r\n\tat ✽.And I Select on \"320 GB\"option radio button menu(computer.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnMenuButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOnSelectMenu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.verifyTheTextMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27699,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3042334400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should naviagate to login page successfully",
  "description": "",
  "id": "login-test;user-should-naviagate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 77100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 692399600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 63181399,
  "status": "passed"
});
formatter.after({
  "duration": 25700,
  "status": "passed"
});
formatter.before({
  "duration": 3346670801,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"shilpa2_2010@yahoo.in\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"shi123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should get the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 40801,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 785142099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shilpa2_2010@yahoo.in",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 287064599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shi123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 180031900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 704527000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 357899,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.cucumber.steps.LoginSteps.iShouldGetTheErrorMessage(String) in file:/C:/Users/User/IdeaProjects/com-orangehrmlive/com-nopcommerce-mvn/nop-commerce-demo-1/target/test-classes/\u0027 with pattern [^I should get the error message$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then I should get the error message\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 33500,
  "status": "passed"
});
formatter.before({
  "duration": 3589577401,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"Shilpa2010_@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 786814100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shilpa2010_@mail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 195043701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 141168700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 617245199,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 67384299,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 4012697201,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"Shilpa2010_@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify the login link desplayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 924009600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shilpa2010_@mail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 252450501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 170603000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 669828699,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 81715099,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 20047841100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#Log\\ out\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-JPKCAVC\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f9a04846d491f966c88871055ba59c1f, findElement {using\u003did, value\u003dLog out}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55735}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55735/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f9a04846d491f966c88871055ba59c1f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.cucumber.utility.Utility.clickOnElement(Utility.java:55)\r\n\tat com.nopcommerce.demo.cucumber.pages.LoginPage.clickonlogoutbutton(LoginPage.java:80)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iClickOnLogoutLink(LoginSteps.java:53)\r\n\tat ✽.And I click on logout link(login.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.verifyTheLoginLinkDesplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25900,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I want to login into nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2641225501,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to registration page successful",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the register text on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 139900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 594633500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegistrationPageSuccessful()"
});
formatter.result({
  "duration": 16201,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheRegisterTextOnRegisterPage()"
});
formatter.result({
  "duration": 29839100,
  "status": "passed"
});
formatter.after({
  "duration": 9999,
  "status": "passed"
});
formatter.before({
  "duration": 2273150400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify That FirstName,LastName,Email,Password,AndConfirmPassword Fields Are Mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname,lastname,email,password,andconfirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should not navigate to next page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify that all fields are Mandatory",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 543305399,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 53405900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNotNavigateToNextPage()"
});
formatter.result({
  "duration": 24900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyThatAllFieldsAreMandatory()"
});
formatter.result({
  "duration": 37316300,
  "error_message": "org.junit.ComparisonFailure: verify the first name is required text expected:\u003c[First name is required.]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.verifyThatAllFieldsAreMandatory(RegisterSteps.java:53)\r\n\tat ✽.And Verify that all fields are Mandatory(register.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 20599,
  "status": "passed"
});
formatter.before({
  "duration": 2569421700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should navigate to registration page successful",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on genderbutton",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter on firstname",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter on lastname",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select day of birth",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select month of birth",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select year of birth",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"shilpa_2010@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"shh123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter conform \"shh123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "verify the text message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 565815200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegistrationPageSuccessful()"
});
formatter.result({
  "duration": 16900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnGenderbutton()"
});
formatter.result({
  "duration": 107505600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterOnFirstname()"
});
formatter.result({
  "duration": 108748600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterOnLastname()"
});
formatter.result({
  "duration": 85432300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iSelectDayOfBirth()"
});
formatter.result({
  "duration": 67088400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iSelectMonthOfBirth()"
});
formatter.result({
  "duration": 68157600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iSelectYearOfBirth()"
});
formatter.result({
  "duration": 68172199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shilpa_2010@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 92815300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shh123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 89176300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shh123456",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iEnterConform(String)"
});
formatter.result({
  "duration": 82939900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 51902399,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheTextMessage()"
});
formatter.result({
  "duration": 40098052800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Your registration completed\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-JPKCAVC\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5fe405adb16ed6687257370fc75e7d93, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Your registration completed\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55860}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55860/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5fe405adb16ed6687257370fc75e7d93\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.cucumber.utility.Utility.getTextFromElement(Utility.java:66)\r\n\tat com.nopcommerce.demo.cucumber.pages.RegisterPage.verifyregistertextcompleted(RegisterPage.java:142)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.verifyTheTextMessage(RegisterSteps.java:109)\r\n\tat ✽.And verify the text message(register.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 38801,
  "status": "passed"
});
});