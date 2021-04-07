## Refaktoryzacja ścieżek (Link).

Aktualne wykorzystanie:
		
		(a) edycja artykułów, wpisów, użytkowników,
		(b) usuwanie artykułów, wpisów, użytkowników,
		(c) rezygnacja z (a) lub (b),
		(d) logowanie i rejestracja,
		(e) elementy sidebara (NavLink).

ad. ( a ) i ( b ):

		- część statyczna ścieżki <=> addressFragments.js,
		- część dynamicza <=> id zasobu

		<Link to=`${ARTICLES.EDIT}${id}`/>
		ARTICLES.EDIT = '/admin/articles/edit/' <=> linkPaths.js (config)
		id <=> props komponentu
		
ad. ( c ): 

		- cała ścieżka statyczna 
		addressFragments.js <=> linkPaths.js (config)
		
ad. ( d ):

		- proste przekierowanie - jak w (c)

ad. ( e ): 
	
		- zrefaktoryzowane (routesPaths <=> addressFragments)