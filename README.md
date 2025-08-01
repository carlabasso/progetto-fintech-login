ndpoint

POST /register  
Registra un nuovo utente.  
Body JSON:  
json
{
  "username": "nome_utente",
  "password": "password"
}
  
Risposta:  
- 200: Registrazione avvenuta con successo  
- 400: Utente già registrato

POST /login  
Effettua il login di un utente registrato.  
Body JSON:  
json
{
  "username": "nome_utente",
  "password": "password"
}
  
Risposta:  
- 200: Benvenuto, nome_utente  
- 401: Credenziali errate
