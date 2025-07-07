from flask import Flask, request, jsonify

app = Flask(__name__)

users = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if username in users:
        return jsonify({'message': 'Utente già registrato'}), 400
    users[username] = password
    return jsonify({'message': 'Registrazione avvenuta con successo'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if users.get(username) == password:
        return jsonify({'message': f'Benvenuto, {username}'})
    return jsonify({'message': 'Credenziali errate'}), 401

@app.route('/saldo', methods=['POST'])
def saldo():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = users.get(username)
    if user and user['password'] == password:
        return jsonify({'saldo': user['saldo']})
    return jsonify({'message': 'Accesso negato'}), 401

if __name__ == '__main__':
    app.run(debug=True)
