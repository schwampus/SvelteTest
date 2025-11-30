Feature: UserForm testing. 

A user gets a few questions that they should answer.

  Scenario: User completes the form
    Given the user is on the homepage
    When the user fills out all form fields
    Then the Thank You message is displayed

  Scenario: User fails to answer a question
    Given the user is on the homepage
    When the user leaves a question blank and clicks next
    Then an error message is shown