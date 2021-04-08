## Obsługa błędów i statusów serwera.

1. Statusy do obsłużenia:
	
		(a) 200 (sukces)
		(b) 401/403 (brak autoryzacji/dostępu)
		(c) 404 (nie znaleziono)
		(d) 409 (konflikt)
		(e) 500 (błąd serwera)

2. Obsługa statusów z API:

	- status (`Number`) i errorMessage <=> przekazywane do komponentu (**ErrorMessage**),
	- w przypadku sukcesu (`201`)
		
		- przekierowanie na stronę pośrednią,
		- status + ErrorMessage,
		- przyciski: kontynuacji (np. *Dodaj następny* ) i zakończenia operacji,
		
		=> komponent `<Result />`

	- pozostałe statusy albo analogicznie do ww., albo w postaci prostego wyświetlacza tekstu pod komponentem właściwym (na etapie developmentu ocenić, co będzie bardziej praktyczne).

3. Obsługa błędów na poziomie aplikacji:
	
	- nie znaleziono strony => `Route = {*}`, `<Result />`,
	- 403, 500 => `<Result />`, przy 403 `Redirect = {./}`.

### Obsługa poszczególnych statusów.

1. Status `200` (success) <=> komponent `<Success />`.

	( a ) sukces dodawania/edycji/usuwania treści:
	
	- articles, news, users;
	- status w response => `dispatch` => state (**redux**);
	- `if(status)` => wyświetla `<Success />` zawierający

		- obrazek,
		- opisy,
		- przycisk kontynuacji,
		- przycisk powrotu na stronę główną danej sekcji;

	( b ) sukces logowania/rejestracji - podobnie jak wyżej, tyle że po 5 sekundach powinno następować przekierowanie na stronę główną strony;

	( c ) sukces ładowania treści - nieobsługiwany wcale lub prezentowany jedynie w `ErrorMessage` (ikona `:-)`).

2. Statusy `401` i `403` <=> komponent `<Forbidden />`.

	( a ) `PrivateRoute` <=> `<Forbidden />` z przekierowaniem (5 sek);

	( b ) pozostałe przypadki => `ErrorMessage` (ikona warningu).

3. Statusy `404` i `409` <=> komponent `<NotFound />`.

	( a ) `Route '*'` <=> `<NotFound />`,

	( b ) pozostałe => j.w.

4. Status `500`.
