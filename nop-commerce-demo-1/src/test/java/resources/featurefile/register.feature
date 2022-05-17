Feature: Register Test
  As user I want to login into nop commerce website

  @sanity
  Scenario:verify User Should Navigate To Register Page Successfully
    Given I am on homepage
    When I click on register link
    And I should navigate to registration page successful
    Then Verify the register text on register page

  @smoke
  Scenario: verify That FirstName,LastName,Email,Password,AndConfirmPassword Fields Are Mandatory
    Given I m on homepage
    When I click on register link
    Then I click on register button
    And I should not navigate to next page
    And Verify that all fields are Mandatory

  @regression
  Scenario: verify That User Should Create Account Successfully
    Given I m on homepage
    When I click on register link
    Then I should navigate to registration page successful
    And I click on genderbutton
    And I enter on firstname
    And I enter on lastname
    And I select day of birth
    And I select month of birth
    And I select year of birth
    And I enter email "shilpa20_2010@gmail.com"
    And I enter password "shh123456"
    And I enter conform "shh123456"
    And I click on register button
    And verify the text message








