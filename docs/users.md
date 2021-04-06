## USERS CRUD
`analogicznie do systemu newsów/artykułów`
### A. Backend.
#### I. UsersSchema.
#### II. Controllers: 
`docelowo wymagają zalogowania + role='admin' lub zgodności username (przy 2.)`

 - getUsersList()
 - getSingleUserById() <-> `id`
 - addNewUser() <-> `dane z usersSchema`
 - editSelectedUser() <-> `id, dane z usersSchema`
 - deleteSelectedUser() <-> `id`
#### III. route, docelowo powiązanie z autoryzacją (`JWT`).
### B. Frontend.
#### I. akcje, reducery, fetche (docelowo powiązane z autoryzacją `JWT`).
#### II. Komponenty
 1. UsersList
 2. UserProfile
 3. UserCreator
 4. UserEditor
 5. UserRemover

 - `pkt 1, 3, 4, 5 - stricte admin`
 - `pkt 2 - także user`
 - `struktura analogiczna do news/articles`