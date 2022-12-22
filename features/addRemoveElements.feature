Feature: Add remove elements

  Background:
    Given I am on the "add_remove_elements/" page

  Scenario Outline: I can add and remove elements
    When I click on "add elements" button <few> times
    Then It should be <few> "delete buttons" on the page


    Examples:
      | few |
      | 2   |
      | 5   |
      | 1   |
      | 9   |


  Scenario Outline: I can delete buttons
    Given There are <some> "Delete" buttons on the page
    When I click on <existing> "Delete" buttons
    Then It should the <rest> of buttons left

    Examples:
      | some | existing | rest |
      | 2    | 1        | 1    |
      | 11   | 7        | 4    |
      | 9    | 8        | 1    |
      | 4    | 1        | 3    |
      | 1    | 1        | 0    |
      | 7    | 3        | 4    |
      | 2    | 2        | 0    |
      | 18   | 18       | 0    |
      | 4    | 1        | 3    |
      | 5    | 0        | 5    |