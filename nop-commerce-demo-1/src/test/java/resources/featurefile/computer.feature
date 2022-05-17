Feature: Computer Test
  As a User I want to login nop commerce web site

  Background: I m on homepage

  @sanity
  Scenario: verify User Should Navigate To Computer Page Successfully
    When I click on computer link
    Then I should navigate to computer page suceessfully
    And verify the computer text on computer page

  @regression
  Scenario: verify User Should Navigate To Desktops Page Successfully
    When I click on computer link
    And I click on desktop link
    Then verify the user should navigate to desktop page successfully

  @smoke
  Scenario Outline: verify That User Should BuildYouOwnComputer And Add Them To Cart Successfully
    When  I click on computer link
    And I click on desktop link
    And I click on product build your own computer link
    And I Select on "<Processor>" dropdown menubar
    And I Select on "<RAM>" option dropdown menu
    And I Select on "<HDD>"option radio button menu
    And I Select on "<OS>" menu button
    And I Select on "<Software>" select menu
    And I click on ADDTOCART button
    And I can see the message on topin green colour menu bar
    Then verify the text message "The product has been added to your shopping cart"

    Examples:
      | Processor                                       | RAM           | HDD               | OS                      | Software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |




