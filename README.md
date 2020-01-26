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

## Poniedziałek 16.12.2019 - Wtorek 23.12.2019 - prace nad autoryzacją logowania we Frontendzie,

    - przestoje związane z trudnością zagadnienia, zmianą sprzętu oraz sprawami prywatnymi (przeprowadzka)
    - utrata bazy danych w toku przeprowadzki (konieczność odtworzenia przede wszystkim danych z Knights and Merchants)

## Środa 24.12.2019 - Piątek 27.12.2019 - przerwa świąteczna, drobne prace projektowe

## Sobota 28.12.2019 - wielki powrót do aktywnej pracy nad projektem

    **FRONTEND**:
        - przywrócenie starego (niekompletnego) systemu autoryzacji do czasu opracowania działającego rozwiązania JWT;
        - rozszerzenie zawartości nagłówka: dodanie doń logo oraz komponentu z buttonem login/logout i avatarem; modyfikacja styli (flexbox);
        - prace nad stronami logowania i rejestracji: oczyszczenie komponentów ze zbędnych kodów i funkcjonalności, dostosowanie formularzy do założeń projektu, drobne poprawki styli;
        - rozbudowa komponentu avatara, wprowadzenie doń logiki umożliwiającej wyświetlanie nazwę aktualnie zalogowanego użytkownika (w formie wiadomości powitalnej);
        - przeniesienie formularzy rejestracji i logowania do odrębnych komponentów i dostosowanie struktury tychże komponentów do założeń projektu;
        - poprawa kodu projektu pod kątem eliminacji drobnych błędów wyświetlanych w konsoli.

    **INNE**: testowanie frameworka Vue wraz z Bootstrapem i systemem autoryzacji JWT w ramach odrębnego projektu (doświadczenia mogą okazać się przydatne z perspektywy rozwoju eGildii 2.0).

## Niedziela 29.12.2019 - początek kolejnej dużej sekcji merytorycznej

    **FRONTEND**:
        - odnowa połączenia podstron Knights and Merchants z API;
        - folder knights dla podstron/komponentów Knights and Merchants;
        - dodanie obrazków z Tzar: Ciężar Korony do folderu img, standaryzacja nazw plików i katalogów, pominięcie zbędnych;
        - utworzenie podstawowej struktury sekcji Tzara - folder tzar, a w nim komponenty podstron i ich contentu (Nacje, Jednostki, Magia, Technologie, Wprowadzenie) - zawartość do uzupełnienia;
        - dodatnie odpowiedniego routingu i aktualizacja nawigacji;
        - zmiany w strukturze projektu:
            > podział podstron na sekcje techniczne i merytoryczne (obecnie: global, knights, tzar, users),
            > dodanie katalogów components dla każdej sekcji,
            > zmiany nazw plików i komponentów - standaryzacja, racjonalizacja,
            > niezbędne modyfikacje importów,
            > usunięcie pliku testowego;
        - rozwinięcie walidacji hasła w formularzu rejestracji z wykorzystanie RegEx i metod AntDesign.

    **BACKEND**:
        - przywrócenie połączenia z bazą danych w modułach Knights and Merchants,
        - początek prac nad przywróceniem utraconych kolekcji w MongoDB.

    **INNE**:
        - poprawienie nazw i opisów w package.json zarówno w BE, jak i FE;
        - najbliższe dni naznaczone będą:
            > uzupełnieniem bazy danych (zaginione kolekcje K&M i nowe kolekcje Tzara),
            > stworzeniem komponentów sekcji Tzara oraz stosownego API i wszystkiego, co z tym związane,
            > opracowaniem jeszcze bardziej generalnych rozwiązań dotyczących layoutu podstron,
            > rozdzieleniem contentu podstron na większą liczbę mniejszych komponentów i rozbudową tegoż contentu,
            > dalszym rozwojem operacji związanych z userami.

## Poniedziałek 30.12.2019 - powstanie sekcji Tzara

    **FRONTEND**:
        - stworzenie akcji, funkcji i reducerów do pobrania danych Tzara z API;
        - uzupełnienie pliku z adresami oraz pliku z nazwami eventów, poprawki nazw w storze;
        - uzupełnienie komponentów sekcji Tzara treścią:
            > wywołanie akcji,
            > pobranie danych z Reduxa,
            > wyrenderowanie tabel (kolumn i treści),
            > render obrazków na podstawie danych z API.

    **BACKEND**:
        - stworzenie w bazie danych kolekcji Tzara: nacji (budynków), jednostek, zaklęć i technologii;
        - dodanie controllerów do pobrania w/w danych z bazy do Expressa;
        - uzupełnienie routingu oraz configa (fragmenty adresów API).

## Wtorek 31.12.2019 - początki wykuwania panelu administracyjnego

    **FRONTEND**:
        - drobne poprawki w komponentach merytorycznych (po uzupełnieniu bazy danych) oraz technicznych;
        - utworzenie akcji, funkcji, reducerów dla obsługi API dodawnia artykułów,
        - przygotowanie podłoża pod kolejne funkcjonalności.

    **BACKEND**:
        - uzupełnienie kolekcji Tzara w MongoDB, poprawki w nazwach plików, naprawa błędów;
        - uzupełnienie kolekcji Knights and Merchants w MongoDB, naprawa błędów;
        - utworzenie kolekcji (MongoDB), modelu, controllera, seedera i routingu (Express) dla mechanizmu dodawania artykułów.

    **INNE**:
        - zaprojektowanie systemu (MongoDB <-> Express <-> Redux <-> React.Component):
            > artykułów (tekstów wyświetlanych na podstronach statycznych, generowanych dzięki tekstowemu identyfikatorowi, nazwanemu przeze mnie - allocationKey) oraz
            > newsów (wpisów wyświetlanych docelowo na stronie głównej);
        - zaprojektowanie wstępne wyglądu panelu administracyjnego oraz poszczególnych komponentów pod kątem CRUD;
        - przemyślenie koncepcji obsługi użytkowników z panelu analogicznie do systemu artykułów/newsów.

## Środa 1.01.2020 - noworoczne prace nad systemem artykułów

    **Szczęśliwego Nowego Roku!**

    **FRONTEND**:
        - redux dla wyświetlania listy artykułów,
        - utworzenie komponentu z listą artykułów (połączenie z Redux/API),
        - redux dla wyświetlania pojedynczego artykułu (po allocationKey),
        - utworzenie komponentu do dodawania nowych artykułów (połączenie z Redux/API)

    **BACKEND**:
        - utworzenie controllera i routingu dla wyświetlania listy artykułów,
        - utworzenie w/w dla wyświetlania pojedynczego artykułu na podstawie przesłanego z FE allocationKey,
        - utworzenie w/w dla usuwania pojedynczego artykułu (na podstawie allocationKey.)

    **INNE*: wstępne rozważenie planów i celów rozwoju projektu na I kwartał 2020 roku (szczegóły wkrótce).

## Czwartek 2.01.2020 - budowa systemu artykułów i newsów

    **FRONTEND**:
        - rozbudowa komponentu dodawania artykułu (struktura i logika);
        - utworzenie komponentów do usuwania i edycji artykułów oraz szkicu strony głównej (newsy);
        - implementacja biblioteki **moment.js**;
        - uzupełnienie reduxa - CRUD dla artykułów;
        - aktualizacja plików konfiguracyjnych we frontendzie;
        - uzupełnienie routingu;
        - refactoring i zmiana rozmieszczenia funkcji serwisowych dla akcji, stworzenie pliku fetchOptions w configu.

    **BACKEND**:
        - dokończenie tworzenia controllerów dla artykułów (CRUD) i dodanie domyślnej daty do modelu;
        - dodanie kolekcji w bazie dla newsów i stworzenie modelu;
        - utworzenie kompletu controllerów (CRUD) i seedera dla newsów;
        - uzupełnienie routingu dla artykułów i newsów;
        - uzupełnienie plików konfiguracyjnych w backendzie;
        - podmiana require na importy oraz stworzenie katalogu config

## Piątek 3.01.2020 - kolejne postępy w budowie systemu newsów i artykułów

    **FRONTEND**:
        - utworzenie plików i funkcji reduxa dla news (CRUD), uzupełnienie plików konfiguracyjnych;
        - połączenie NewsPage ze storem i utworzenie dynamicznego komponentu z aktualnościami;
        - stworzenie komponentów edycji, usuwania, listy newsów dla panelu admina;
        - utworzenie katalogów admin i news wewnątrz admin;
        - aktualizacja routingu (przekazywanie parametrów id dla edycji i usuwania newsów);
        - standaryzacja nazw komponentów;
        - przeniesienie komponentów nagłówka, stopki i panelu bocznego z poszczególnych podstron do globalnego routera w App.js (uproszczenie struktury);
        - aktualizacja panelu bocznego oraz prace nad panelem specjalnym dla sekcji administracyjnej.

    **BACKEND**: kosmetyczne poprawki po stronie backendu.

## Sobota 4.01.2020 - refaktoryzacja i konfiguracja we frontendzie

    **FRONTEND**:
        - poprawki w plikach konfiguracyjnych (statuses -> serverStatuses), pomniejsze zmiany w różnych plikach;
        - dodanie plików addressFragments i apiAddresses i refaktoryzacja adresów w funkcjach fetch;
        - dodanie pliku routesPaths i refaktoryzacja ścieżek podstron w Routerze oraz Sidebarze;
        - zmiany w systemach artykułów i newsów - poprawki w parametrach, implementacja moment.js i dodanie opcji edycji/usuwania w listach, dodanie resetu pól w formularzach, refaktoryzacja.

## Niedziela 5.01.2020 - prace wykończeniowe nad systemem newsów i artykułów

    **FRONTEND**:
        - Edycja i rozbudowa komponentów Newsów (style, format, struktura, funkcje, itp.);
        - dodanie komponentu pojedynczego newsa (NewsSingleCard) - struktura, logika, routing;
        - debug systemu newsów, poprawki w komponentach;
        - Edycja, rozbudowa i unifikacja komponentów Artykułów (style, format, funkcje, itp.).

    **BACKEND**:
        - poprawki kontrolerów (zwł. w nazwach), debug systemu newsów.

    **INNE**: stworzenie pisemnej listy rzeczy do zrobienia w systemie newsów i artykułów (większość już wykonana).

## Poniedziałek 6.01.2020 - wygenerowanie treści podstron z bazy i nowa struktura komponentów

    **FRONTEND**:
        - dodanie reduxa dla wyszukiwania artykułu po id (GET);
        - implementacja w/w Editorze i Removerze artykułów;
        - finalne poprawki i debug systemu newsów i artykułów;
        - dodanie pliku konfiguracyjnego z kluczami artykułów;
        - implementacja nowej struktury (szablonowej) w sekcjach Knights i Tzar, obejmującej:
            > wrapper (Layout z andt),
            > komponent z Breadcrumbem,
            > uniwersalny komponent nagłówka (generowanego z API),
            > uniwersalny komponent treści tekstowej (generowanej z API),
            > komponenty szczególne (tabele, formularze, etc.);
        - dodanie funkcji obsługującej sidebara, refaktoryzacja tego komponentu (plik konfiguracyjny navigationTitles).

    **BACKEND**:
        - utworzenie API dla wyszukiwania artykułu po id;
        - finalne poprawki i debug systemu newsów i artykułów.

## Wtorek 7.01.2020 - parsowanie HTML z bazy danych, zmiany drobne i drobniejsze

    **FRONTEND**:
        - implementacja biblioteki react-html-parser w komponencie treści tekstowej - dzięki temu artykuły tematyczne będą generowane wraz z przypisaną im strukturą HTML, co znacznie uprości pracę nad nimi;
        - usprawnienie struktury w/w komponentu (Card z andt);
        - Funkcjonalizacja komponentu Breadcrumb - generowanie właściwych ścieżek po propsach, uzupełnienie propsów w poszczególnych komponentach z użyciem pliku konfiguracyjnego z tytułami nawigacji;
        - drobny refactoring komponentów, dodanie działającego favicona.

## Środa 8.01.2020 - implementacja systemu użytkowników

    **FRONTEND**:
        - utworzenie plików reduxowych dla systemu użytkowników, modyfikacja istniejących plików autoryzacyjnych;
        - utworzenie komponentów do zarządzania użytkownikami: Creator, Editor, Remover i List (toDo: ProfileCard);
        - uzupełnienie routingu i plików konfiguracyjnych;
        - bugfix & refactor.

    **BACKEND**:
        - uzupełnienie controllerów i routingu dla API użytkowników (CRUD);
        - modyfikacja UsersSchema (rola na stronie i daty);
        - początek prac refaktoryzacyjnych w backendzie - wydzielenie statusów do pliku konfiguracyjnego, podmiana module.exports na składnię ES6.

    **INNE**: system userów został utworzony na bazie systemu artykułów i newsów, pozostaje on jednak w związku z systemem autoryzacji/autentykacji, nad którym prace zostaną niebawem wznowione.

## Czwartek 9.01.2020 - wielkie porządkowanie kodu

    **FRONTEND**:
        - usprawnienie systemu użytkowników, uzupełnienie niedoróbek;
        - rozszerzenie obsługi statusów/komunikatów serwera dla sekcji knights i tzar (Redux);
        - analogiczne rozszerzenie w przypadku systemów newsów, artykułów i użytkowników;
        - uzupełnienie eventStatuses o nowe akcje;
        - poprawki drobne;
        - utworzenie komponentu UserProfileCard i jego wstępna funkcjonalizacja;
        - dodanie menu typu dropdown do komponentu globalnego avatara (otwieranego po najechaniu na tenże avatar).

    **BACKEND**:
        - utworzenie nowych plików konfiguracyjnych (na wzór FE);
        - refaktoryzacja ścieżek API;
        - dodanie i poprawa komunikatów wysyłanych z API;
        - wydzielenie konfiguracji mongoose dla sekcji knights i tzar do nowych plików (models);
        - poprawki drobne.

## Piątek 10.01.2020 - testy czas zacząć!

    **FRONDEND**:
        - przygotowanie testów jednostkowych (JEST) dla reducerów: articles, news, knights, tzar, users (a więc większości);
        - otwarcie profilu użytkownika z opcją jego modyfikacji przez menu w nagłówku (Breadcrumb).

    **BACKEND**: dodanie wysyłania id użytkownika do frontendu przy logowaniu (potrzebnego do wejścia w profil).

## Sobota 11.01.2020 - testowania ciąg dalszy

    **FRONTEND**:
        - uzupełnienie testów reducerów o segment autoryzacyjny (przy okazji jego drobne poprawienie);
        - utworzenie snapshotów, skrócenie i uelastycznienie w ten sposób kodu testów (funkcja matchToSnapshot());
        - poprawienie testów i snapshotów w celu wiernego odwzorowania przekazywanych danych (obiektów);
        - uzupełnienie reducerów o obsługę komunikatów serwera przy pozytywnych akcjach (dotąd pominiętych);
        - prace refaktoryzacyjne w komponentach administracyjnych:
            > articles - wydzielenie formularzy i list do osobnych komponentów (folder data),
            > news - j.w. + poprawki w NewsCard (opcje edycji).

    **INNE*: dodanie obrazka dla repozytorium egildia (tiamath) na GitHubie.

## Niedziela 12.01.2020 - refaktoryzacja komponentów administracyjnych

    **FRONTEND**:
        - sekcja users - wydzielenie formularzy i list do osobnych komponentów;
        - rozbudowa PageHeaderComponent o funkcje dla panelu administracyjnego;
        - implementacja PageHeaderComponent w komponentach sekcji: articles, news, users;
        - refaktoryzacja treści w/w komponentów;
        - utworzenie pliku styles.js, w którym docelowo przechowywane mają być style dodawane do komponentów liniowo w formacie obiektowym;
        - implementacja pliku styles.js w komponentach oraz rozpoczęcie refaktoryzacji (style);
        - prace nad przenoszeniem danych buttonów do zmiennych (buttonData).

    **INNE**: dodanie tagów (titles) dla repozytorium egildia na GitHubie.

## Poniedziałek 13.01.2020 - dalsze prace refaktoryzacyjne

    **FRONTEND**:
        - refaktoryzacja kolejnych styli dodawanych liniowo obiektem z wykorzystaniem pliku styles.js oraz danych buttonów;
        - implementacja PageHeaderComponent w stronach logowania i rejestracji;
        - refaktoryzacja NewsPage i przeniesienie do folderu general (wraz z komponentami logowania i rejestracji).
        - wznowienie prac nad autoryzacją po stronie frontendu (JWT).

## Wtorek 14.01.2020 - Środa 15.01.2020 - eksperymenty z autoryzacją

    **FRONTEND**:
        - próby implementacji nowych rozwiązań dla autoryzacji JWT (rezygnacja),
        - uzupełnienie artykułów w bazie danych (z wykorzystaniem zbudowanego wcześniej panelu admina).

## Czwartek 16.01.2020 - PrivateRoute i przebudowa kodu komponentów globalnych

    **FRONTEND**:
        - Utworzenie funkcjonalności PrivateRoute dla zabezpieczenia sekcji administracyjnej projektu przed niezalogowanymi;
        - Sidebar:
            > dodanie możliwości włączania i wyłączania widoczności panelu bocznego po kliknięciu,
            > wydzielenie submenów do oddzielnych komponentów (funkcyjnych) wedle kategorii, rozwiązanie problemów z przekazywaniem props,
            > refaktoryzacja komponentu, poprawienie defaultów;
        - Header:
            > wydzielenie logo i górnego menu do oddzielnych komponentów (funkcyjnych),
            > przekształcenie komponentów headera oraz avatara w funkcyjne;
        - Breadcrumb - przekształcenie w komponent funkcyjny;
        - Footer:
            > dodanie funkcji generującej aktualny rok,
            > dodanie hiperłącza do serwisu egildia.pl,
            > przekształcenie w komponent funkcyjny.
        - Rozpoczęcie prac nad przebudową formularzy:
            > utworzenie komponentu ogólnego SingleFormElement, zawierającego alternatywy dla inputów zwykłych, textarea i datepicker,
            > utworzenie prostych komponentów ogólnych ButtonComponent oraz ErrorMesageComponent,
            > implementacja w/w komponentów w formularzu dodawania artykułów (w celach głównie testowych).

    **INNE**:
        + od dnia dzisiejszego zamierzam przeprowadzić poważniejszą refaktoryzację według kilku podstawowych założeń:
            (1) rozbicie większych komponentów na mniejsze,
            (2) utworzenie jak największej liczby komponentów uniwersalnych, do zastosowania w wielu miejscach projektu,
            (3) zwiększenie roli i liczby komponentów funkcyjnych w projekcie (w pewnym momencie praktycznie z nich zrezygnowałem),
            (4) przygotowanie budowy komponentów pod kątem przyszłych testów;
        + powyższe ma na celu możliwe zmniejszenie ilości kodu oraz pojemności projektu, uwzględnienie dobrych praktyk oraz przygotowanie do dalszego poszerzania sekcji merytorycznych;
        + cel poboczny acz również istotny stanowić ma ułatwienie pracy z projektem, tak aby następnie móc dopracować poszczególne komponenty, wyodrębnić ich specyfikę, itd;

    **PODSUMOWANIE**:
        - Po nieco ponad miesiącu prac stan projektu uważam za zadowalający, już w dużej mierze odzwierciedlający mój obecny stan wiedzy programistycznej.
        - Przez ten krótki czas rozwinąłem swoje umiejętności w większym stopniu niż miało to miejsce we wcześniejszej pracy.
        - Zaczynam coraz bardziej wierzyć, że projekt egildia 2.0, który zacząłem z dość minimalistycznymi założeniami, a który z czasem stał się naprawdę poważną inwestycją czasu i wysiłku, ma szansę ujrzeć światło dzienne.

## Piątek 17.01.2020 - dalsza przebudowa komponentów

    **FRONTEND**:
        - implementacja SingleFormElement, ButtonComponent i ErrorMessageComponent w formularzach:
            > ArticlesEdit, ArticlesRemove,
            > NewsAdd, NewsEdit, NewsRemove,
            > UsersAdd, UsersEdit, UsersRemove, UsersCard,
            > Login, Register;
        - rozbudowa SingleFormElement i ButtonComponent dla potrzeb obsługi różnych przypadków;
        - poważna przebudowa SingleFormComponent w celu racjonalizacji kodu (wykorzystanie m. in. instrukcji switch);
        - utworzenie pliku konfiguracyjnego dla danych typu wzory Regex, wykorzystywanych w komponentach;
        - przebudowa kolejnych kompunentów na funkcyjne.

## Sobota 18.01.2020 - refaktoryzacja na całego

    **FRONTEND**:
        - utworzenie pliku FormElementsBuilder i przeniesienie do niego switcha z SingleFormElement;
        - utworzenie pliku InputCreators, a w nim funkcji kreujących poszczególne typy elementów formularza;
        - aktualnie system tworzenia pól formularzy działa następująco:
            (1) dodajemy do komponentu głównego formularza SingleFormElement i przekazujemy do niego niezbędne propsy,
            (2) SingleFormElement buduje komponent Form.Item i uruchamia funkcję FormElementsBuilder,
            (3) FormElementsBuilder ustala w drodze instrukcji Switch, jaki input i jakie rules dla getFieldDecorator ma zwrócić, wywołując przy tym odpowiednią metodę z InputCreators,
            (4) odpowiednia funkcja z InputCreator zwraca do FormElementBuilder żądany przez komponent nadrzędny input,
            (5) FormElementBuilder przesyła do SingleFormElement input i rules,
            (6) w SingleFormElement następuje ostateczne "złożenie" komponentu od wykorzystania w komponencie głównym formularza;
        - początek przebudowy tabel (sekcje Tzar & Knights):
            > plik ColumnData dla przechowywania statycznych fragmentów tabel danej sekcji,
            > pliki Generators dla tworzenia komponentów wyświetlanych w poszczególnych wierszach danej tabeli,
            > plik serviceData dla przechowywania stałych niezbędnych do generowania komponentów (w szczególności fragmentów ścieżek obrazków);
        - refaktoryzacja w powyższy sposób tabel:
            > KnightsBuildings, KnightsUnits,
            > TzarNations, TzarSpells, TzarTechnologies, TzarUnits,
            przy czym rozważyć należy dalszą przebudowę dla zaoszczędzenia kodu.

## Niedziela 19.01.2020 - ostateczne rozwiązanie kwestii tabel

    **FRONTEND**:
        - sekcje Tzar i Knights: przeniesienie wszystkich danych struktury kolumn do odpowiednich zmiennych oraz i zamieszczenie w plikach generatorów poszczególnych komponentów;
        - dostosowanie nazw plików i komponentów w sekcjach merytorycznych do przyjętej konwencji(Sekcja|Podsekcja|Komponent|Rola|);
        - aktualnie tabele powstają wedle następującego schematu:
            (1) komponent główny pobiera z API dane budulcowe, mapowane w odpowiedniej funkcji, a następnie umieszczane w zmiennej tableData,
            (2) w plikach DataGenerators znajdują się dwa typy obiektów:
                > funkcje generate(), służące do renderowania struktur DOM,
                > obiekty columnsStructure, zawierające "przepisy", na podstawie których składana jest tabela korzystają przy tym z funkcji generate(),
            (3) gotowa struktura tabeli przekazywana jest do komponentu głównego, a ściślej w zmiennej tableColumns;
            (4) komponent główny renderuje <Table>, w którym źródłem danych jest tableData, zaś informacji o strukturze poszczególnych kolumn - tableColumns.
        - implementacja w/w systemu w przypadku tabel artykułów, newsów i użytkowników.
            > ponieważ funkcje generatorów są w tych sekcjach niemalże identyczne, warto pomyśleć nad ich uwspólnieniem,
            > czas także zrobić porządek ze ścieżkami Linków, które powinny być wydzielone do zmiennych i racjonalnie przetworzone.

    **PODSUMOWANIE**:
        Ostatnie dni przyniosły postęp, jeśli chodzi o realizację postawionych celów refaktoryzacyjnych.
        + Po pierwsze, zminimalizowałem liczebność komponentów klasowych na rzecz funkcyjnych. Obecnie klasy występują jedynie tam, gdzie komponenty używają lokalnego stanu lub metod cyklu życia.
        + Po drugie, udało się rozdzielić kod na mniejsze fragmenty, wydzielić drobniejsze komponenty. Staram się w jak największym stopniu doprowadzić do stanu, w którym jedna funkcja odpowiada za jedną funkcjonalność.
        + Po trzecie, struktura komponentów stała się bardziej (w mojej ocenie) czytelna. Powyższe podziały kodu na mniejsze jednostki zostały dokonane z zachowaniem standardów, które zostaną opisane w dokumentacji projektu (póki co krótko opisane w nin. dzienniku).
        + Po czwarte, zatrzymana została inflacja kodu, staram się w jak największym stopniu unifikować te fragmenty, które w różnych komponentach są tożsame. Ponadto upraszczam te, które zanadto się przekomplikowały w trakcie pisania.
        + Po piąte, za standaryzacją struktur i funkcjonalności podąża standaryzacja nazw plików i obiektów.

## Poniedziałek 20.01.2020 - przyciski i linki

    **FRONTEND**:
        - przebudowa ButtonComponent - przeniesienie funkcji kreujących poszczególne kompozycje do odrębnego pliku, zastosowanie switcha oraz przeniesienie zmiennych określających kompozycję do odpowiedniego pliku konfiguracyjnego;
        - implementacja ButtonComponent w pozostałych plikach projektu - sekcjach administracyjnych (articles, news, users) i generalnych (login, register, index);
        - refaktoryzacja ścieżek Linków na wzór Route'ów - utworzenie pliku konfiguracyjnego linksPaths, w których tworzone są poszczególne ścieżki z fragmentów pobranych z addressFragments;
        - implementacja linksPaths w plikach projektu - sekcjach administracyjnych i generalnych;
        - unifikacja funkcji generujących DOM w tabelach sekcji administracyjnych w pliku AdminDataGenerators, zmiana nazw plików ze strukturami kolumn (rozmieszczenie elementów systemu jest zatem nieco inne niż w przypadku tabel sekcji merytorycznych, ale ma to swoje uzasadnienie);
        - inne drobne poprawki i refactoring (np. format daty w zmiennej konfiguracyjnej).

## Wtorek 21.01.2020 - obsługa statusów i początek testów komponentów

    **FRONTEND**:
        - dodanie podstawowej struktury komponentów, które mają docelowo obsługiwać określone statusy/błędy, bazujące na <Result> (antd);
        - research oraz pierwsze kroki w kierunku przygotowania testów poszczególnych komponentów projektu.

## Środa 22.01.2020 - prace nad statusami i testami komponentów

    **FRONTEND**:
        - dodanie do dispatchów akcji reduxa przekazywania statusów, celem ich wykorzystania w reducerach, a następnie w komponentach;
        - rozbudowywanie komponentów błędów (katalog errors);
        - przygotowanie najbardziej podstawowej struktury testów JEST dla komponentów (bez contextu i specyfiki, zatem większość jeszcze nie przechodzi), z wykorzystaniem doinstalowanej metody **renderer**.

## Czwartek 23.01.2020 - Niedziela 26.01.2020 - spokojne prace nad drobiazgami

    **FRONTEND**:
        - rozbudowanie komponentów Success, NotFound, Forbidden, ErrorMessageComponent,
        - dodanie obsługi komponentu Success w odpowiednich zakładkach oraz obsługi statusów w reduxie,
        - rozszerzenie PrivateRoute'a o Forbidden,
        - dodanie ogólnego routingu dla NotFound {*},
        - rozważenie różnych koncepcji co do obsługi InternalServerError (jeszcze niewdrożonej),
        - próby prac nad testami - ostatecznie zdecydowałem się usunąć testy komponentów JEST i zostawić tylko testy reducerów; dlaczego? Pokrótce problematyczność ich utworzenia w mojej ocenie całkowicie wypacza sensowność ich wdrożenia, a że jest to mój projekt autorski, to mogę sobie na taki krok pozwolić; jeśli zmienie zdanie (co możliwe), testy wrócą, ale w innej formie.

    **BACKEND**:
        - instalacja i implementacja biblioteki bcrypt oraz poprawki a obsłudze API autoryzacyjnego.

    **INNE**: Na ten moment projekt nadaje się już do "wystawienia publicznego", dlatego niebawem pojawi się on na jakimś serwerze testowym. Wciąż można w nim jeszcze wiele zmienić, jednak ostatnio trochę za bardzo zatapiam się w rzeczach drobnych i mało w zasadzie istotnych. Tym nie mniej prace nad projektem będą trwały, tyle że być może rozpocznę równolegle prace nad czymś nowym, aby nie odczuć ewentualnego znużenia.
