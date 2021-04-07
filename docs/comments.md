## System komentarzy

 - **MongoDB** => comments
		
			{
				_id: ObjectId(),
				about: /* powiązanie z wpisem (id/title),
				content: 'treść komentarza',
				date: data dodania (momentjs),
				author: 'abc', // nick osoby zalogowanej
				actions [0, 0] // [likes, dislikes]
			}
 - **Express** => commentSchema i controllery => API
		
		(a) lista komentarzy (newsId) - GET
		(b) nowy komentarz (title, content, author) - POST
		(c) edytuj komentarz (j.w. + commentId + modifDate) - UPDATE
		(d) usuń komentarz (commentId) - DELETE

	Prywatność:
		( a ) - widoczna dla wszystkich,
		( b ) - dostępna tylko dla zalogowanych (USER, ADMIN),
		( c ) - dostępna tylko wobec własnych wpisów (por. z polem `author`) + ADMIN,
		( d ) - dostępna tylko dla adminów (ADMIN).

	Zatem zbudować trzeba relacje:	
	-  comments <=> news (`newsId`),
	-  coments <=> users (`role`, `author`).

 - **React** 
	 1. Komponent `<Comment />` (**antd**)
		- `actions` = comments.actions (+1/-1, tylko zalogowani),
		- `author` = comments.author (users.name <=> zalogowany),
		- `avatar` = na ten moment 1. litera nicku (j.w.),
		~~- `children` = obecnie bez (model uproszczony),~~
		-  `content` = comments.content, 
		- `datetime` = comments.date (momentjs).
	
	2. **CommentsList**.js <= (`newsId`) <= NewsCard/NewsSingleView
		
		**Redux**:
		- showComments(`newsId`),
		- commentsList,

		**Return**:
		- renderComments() => DOM,
		- `<Comment />` jako wynik.

	3. **CommentCreator**.js

		- warunki wyświetlenia: zalogowanie + rola `USER` lub `ADMIN`,
		- wykorzystanie przykładu z **antd** na etapie developmentu.

	4. **CommentEditor**.js

		- podobny do ww., wyświetlany po kliknięciu w opcję edycji,
		- sprawdzane, czy `nick zalogowanego === nick autora` lub czy `user.role === admin`.

	5. CommentRemover.js

		- właściwie funkcja po kliknięciu w opcję delecji (nie komponent),
		- sprawdzanie, czy `user.role === admin`.

	6. Obsługa statusów tylko przez **ErrorMessageComponent** nad komentarzami.
