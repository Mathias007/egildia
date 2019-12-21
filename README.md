# Dziennik dewelopera

## Czwartek 5.12.2019 - rozpoczęcie prac nad projektem

    **FRONTEND**:
        - instalacja **Create-React-App**;
        - stworzenie repozytorium **GitHub**, integracja z projektem (*SSH key*);
        - wybór biblioteki **Ant Design** do struktury komponentów Reacta;
        - stworzenie przykładowej struktury strony głównej (wstępne zapoznanie z Ant Design).

    **BACKEND**:
        - przypomnienie podstaw pracy z MongoDB;
        - instalacja **MongoDB**;
        - instalacja **Express.js** i **Nodemon**, stworzenie *serwera Node.js*;
        - połączenie MongoDB z Express.js (get);
        - stworzenie w MongoDB pierwszej kolekcji merytorycznej (K&M - Budynki);

    **INNE**: założenie dziennika deweloperskiego.

## Piątek 6.12.2019 - początki zabawy z REST API, Reduxem, integracja FE z BE

    **FRONTEND**:
        - instalacja **react-router-dom** i stworzenie pierwszego routingu (3 podstrony);
        - podział generalnej struktury aplikacji na komponenty globalne (nagłówek, panel boczny, stopka i obszar zawartości);
        - standaryzacja komponentów i ich nazw;
        - drobne modyfikacje styli i routów;
        - instalacja **redux** oraz **react-redux**;
        - zaaplikowanie store'a oraz pierwszych akcji i reducerów;
        - pierwsze zapytanie GET do API (budynki K&M);
        - stworzenie pliku z adresem do backendu, poddanym destrukturyzacji;
        - instalacja **react-thunk** i stworzenie za jego pomocą middleware dla aplikacji.

    **BACKEND**:
        - instalacja biblioteki **cors** dla Express.js;
        - dodanie adresu frontendu na whitelist - rozwiązanie problemu z CORS;

    **INNE**: stylizacja dziennika deweloperskiego (format .md).

## Sobota 7.12.2019 - generowanie pierwszej tabeli i porządki w projekcie

    **FRONTEND**:
        - stworzenie tabeli budynków K&M na bazie komponentów Ant Design (struktura),
        - zmapowanie kolekcji MongoDB (treść) do w/w tabeli,
        - rozwiązanie problemów technicznych,
        - dodanie obrazków do projektów (folder img),
        - uporządkowanie aplikacji w ramach nowych katalogów:
            > _store dla _actions i _reducers,
            > _config dla plików konfiguracyjnych (typu adress.js),
            > App dla głównego komponentu aplikacji (+ style i testy),
        - zmiany ścieżek, usunięcie zbędnych plików (logo.svg) i inne drobiazgi,
        - mała aktualizacja nawigacji;

    **INNE*: walka z maszynami, literówkami i błędami.

## Niedziela 8.12.2019 - prace nad generowaniem grafik

    **FRONTEND**:
        - instalacja biblioteki **react-images**,
        - dodanie pierwszych obrazków do tabeli budynków K&M:
            > grafiki budynków z wykorzystaniem funkcji map() komponentu <Img /> z w/w biblioteki,
            > ikony kosztów z użyciem komponentu <Img />,
        - prace nad generowaniem pozostałych obrazków z wykorzystaniem m. in. funkcji map() oraz wyrażeń regularnych,

    **INNE**: bieżące rozwiązywanie problemów technicznych, głównie dot. połączenia z MongoDB.

## Poniedziałek 9.12.2019 - generowanie grafik i nowa funkcjonalność

    **FRONTEND**:
        - dodanie kolejnych obrazków do tabeli budynków K&M:
            > surowce z wykorzystaniem kombinacji map() oraz wyrażeń regularnych i komponentu <Img />,
            > pracownicy z użyciem wyrażeń regularnych i w/w komponentu,
            > ikony budynków pod ich nazwami,
        - zmiany w organizacji katalogu img (m. in. usunięcie podfolderów w jednostkach i zmiany nazw plików),
        - poprawki w bazie danych,
        - destrukturyzacja, refaktoryzacja, uczynienie komponentu względnie szablonowym dla kolejnych podstron,
        - modyfikacja katalogu public (zmiany w index.html, nowe logo i favicon, usunięcie zbędnych plików),
        - stworzenie komponentu Jednostek K&M na bazie budynków:
            > nowy fetch, akcja i reducer oraz adres backendu,
            > połączenie komponentu frontendowego z endpointem w backendzie,
            > stworzenie dynamicznej tabeli z tekstami importowanymi z bazy oraz grafikami wyrenderowanymi z katalogu img,
            > destrukturyzacja, refaktoryzacja, poprawki w kodzie.

    **BACKEND**:
        - nowy endpoint dla jednostek K&M (z użyciem kolekcji MongoDB),
        - drobne poprawki w kolekcji MongoDB oraz nazwach plików img.

## Wtorek 10.12.2019 - początek prac nad logowaniem i autoryzacją

    **BACKEND**:
        - zapoznanie z dokumentacją oraz materiałami na temat JWT i autoryzacji w ogólności,
        - instalacja biblioteki **jsonwebtoken**,
        - rozszerzenie API o przykładową i wstępną autoryzację z wykorzystaniem JWT (metody POST),
        - rozpoczęcie budowy backendu do obsługi logowania, rejestracji i tworzenia userów z autoryzacją JWT.

## Środa 11.12.2019 - reorganizacja projektu, rozbudowa backendu

    **BACKEND**:
        - stworzenie folderu backend i podstawowej struktury katalogów (src -> controllers, models, seed),
        - osobny package.json, .gitignore i .babelrc (do korzystania ze składni ES6),
        - instalacja/reinstalacja bibliotek:
            > **body-parser**,
            > **core-js**,
            > **cors**,
            > **express**,
            > **jsonwebtoken**,
            > **mongoose**,
            > **nodemon**,
        - instalacja pluginów @babel, w szczególności dla wsparcia składni ES6 w Node.js,
        - dodanie schematu mongoose i modułów kontrolujących, umożliwiających połączenie z MongoDB oraz logowanie z autoryzacją JWT,
        - dodanie pliku config.js z ważnymi zmiennymi,
        - dodanie pliku routes.js z routingiem API,
        - stworzenie API z generacją i odświeżeniem tokena (POST), pobraniem listy użytkowników (GET) oraz rejestracją (POST),
        - modyfikacja głównego pliku stosownie do nowych importów, bibliotek i składni, edycja dotychczasowego API (kontrolery knights.js).

    **FRONTEND**:
        - przeniesienie aplikacji React do nowego katalogu frontend,
        - modyfikacja package.json i reinstal node_modules (usunięcie bibliotek przeniesionych do backendu),
        - rozpoczęcie prac nad obsługą logowania i rejestracji.

## Czwartek 12.12.2019 - obsługa autoryzacji we frontendzie

    **FRONTEND**:
        - stworzenie struktury i podstawowej logiki stron logowania oraz rejestracji (komponenty AntDesign),
        - obsługa logowania po stronie frontendu:
            > dodanie odpowiednich akcji, recuderów, funkcji fetch (POST) oraz middleware,
            > połączenie komponentu logowania z Reduxem oraz endpointem, przekierowanie po zalogowaniu
            > przejmowanie tokenów do localStorage,
        - dodanie plików konfiguracyjnych ze statusami serwera i statusami eventów Reduxa, aktualizacja pliku z adresami endpointów;
        - przygotowanie plików Reduxa pod obsługę rejestracji.

    **BACKEND**:
        - modyfikacja dostosowawcza endpointów w celu połączenia.

## Piątek 13.12.2019

    **INNE**:
    - poprawa estetyki kodu, ujednolicenie tabulatorów (4 spacje), uzupełnienie średników, itp. <-> wykorzystanie pluginu **Prettier+**,
    - zmiana nazwy i opisu repozytorium Github w związku z rozszerzeniem tematyki projektu (egildia 2.0).

## Sobota 14.12.2019 - Niedziela 15.12.2019 - prace nad innym projektem (prywatnym)

## Poniedziałek 16.12.2019 - Sobota 21.12.2019 - prace nad autoryzacją logowania we Frontendzie, przestoje związane z trudnością zagadnienia, zmianą sprzętu oraz sprawami prywatnymi (przeprowadzka)
