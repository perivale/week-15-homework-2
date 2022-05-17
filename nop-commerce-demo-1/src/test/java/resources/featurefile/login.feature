
Feature: Login Test
  As user I want to login into nop commerce website
@smoke
  Scenario: User Should naviagate to login page successfully
    Given I m on homepage
    When I click on login link
    Then I should navigate to login page successfully
@sanity
  Scenario: verify The Error Message With InValid Credentials
    Given  I m on homepage
    When I click on login link
    And I enter email "shilpa2_2010@yahoo.in"
    And I enter password "shi123"
    And I click on login button
    Then I should get the error message
@regression
Scenario: verify That User Should LogIn SuccessFully With Valid Credentials
    Given I m on homepage
    When I click on login link
    And I enter email "Shilpa2010_@mail.com"
    And I enter password "123456"
    And I click on login button
    Then I should navigate to login page successfully
@regression
    Scenario:Verify That User Should LogOut SuccessFully
      Given I m on homepage
      When I click on login link
      And I enter email "Shilpa2010_@mail.com"
      And I enter password "123456"
      And I click on login button
      Then I should navigate to login page successfully
      And I click on logout link
      And Verify the login link desplayed














