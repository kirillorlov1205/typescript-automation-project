@search
Feature: Onliner search

    Background:
        Given The user opens web page https://www.onliner.by

    @searchWithoutText
    Scenario: Search without providing text
        When The user clicks on search field
        Then The user sees search field and doesn't see search modal page without providing text

    @searchWithText
    Scenario: Search with providing text "test"
        When The user provides text "test" in the search field
        Then The user sees search results in Catalog section while providing text "test"

    Scenario Outline: As a user, i can open search section by navigation bar on search modal page
        When The user provides text "<Text>" in the search field and clicks button "<Button>"
        Then The user sees search results in "<Section>" section while providing text "<Text>" and clicking "<Button>" button

        Examples:
            | Text | Button       | Section   |
            | test | в новостях   | news      |
            | test | на барахолке | baraholka |
            | test | на форуме    | forum     |

