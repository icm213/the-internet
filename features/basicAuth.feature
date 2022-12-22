@test

Feature: Basic Authentiocation

  Background:
    Given I am on the "basic_auth" page

  Scenario Outline: I am able to authenticate prompt
    When I pass <data> to the prompt
    Then It should be "Congratulations! You must have the proper credentials." text

    Examples:
      | data          |
      | "admin:admin" |
      | "sth:sth"     |
      | ""            |