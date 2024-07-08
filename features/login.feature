Feature: Login functionality

  Scenario Outline: Invalid login attempts
    Given I launch the application
    When I enter "<user>" user credentials
    And I click the login button
    Then I should see the "<message>"

    Examples:
      | user            | message                                                     |
      | LOCKED          | Sorry, this user has been locked out.                       |
      | NO_MATCH        | Provided credentials do not match any user in this service. |
      | NO_PASSWORD     | Password is required                                        |
      | NO_USER_DETAILS | Username is required                                        |

  Scenario Outline: Valid login attempt
    Given I launch the application
    When I enter "<user>" user credentials
    And I click the login button
    Then I should see the product catalog

    Examples:
      | user     |
      | STANDARD |
