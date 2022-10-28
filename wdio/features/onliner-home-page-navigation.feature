@navigation
Feature: Onliner Home Page Navigation

    Scenario Outline: As a user, i can open page by Navigation bar
        Given the User opens web page https://www.onliner.by
        When the User clicks on <PageLink> navigation button
        Then the User sees <PageName> page and page header has text <HeaderText>

        Examples:
            | PageLink                      | PageName  | HeaderText     |
            | https://catalog.onliner.by    | Catalog   | Все суперцены! |
            | https://ab.onliner.by         | Auto      | Автобарахолка  |
            | https://r.onliner.by/pk       | Realt     | Продажа        |
            | https://s.onliner.by/tasks    | Tasks     | Заказы         |
            | https://baraholka.onliner.by/ | Baraholka | Барахолка      |