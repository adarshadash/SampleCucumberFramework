#@SmokeScenario
Feature: To Test Login Functionality
  @SmokeTest
  Scenario: Check Login is successful with valid credentials
    Given user is on login page
    When User enters username and password
    And Clicks on Login button
    Then the user is navigated to home page

#   // @RegressionTest
#  Scenario Outline: Check login is successful with valid credentials
#    Given user is on login page
#    When user enters <username> and <password>
#    And clicks on login button
#    Then user is navigated to home page