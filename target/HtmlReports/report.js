$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/testFeatures/login.feature");
formatter.feature({
  "name": "To Test Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check Login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.loginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.loginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.loginSteps.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.loginSteps.the_user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/testFeatures/palindromeTest.feature");
formatter.feature({
  "name": "Determine if String is Palindrome or not. A string is a palindrome if it reads",
  "description": "  the same backwards as forwards.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid Palindrome",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I entered string \"Refer\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.palindromeSteps.iEnteredString(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I test it for Palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.palindromeSteps.iTestItForPalindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result should be \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.palindromeSteps.theResultShouldBe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});