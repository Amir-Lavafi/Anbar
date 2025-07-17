from flask import Flask
from flask_cors import CORS
from flask_login import LoginManager

from models import db, Users
from login import login
from logout import logout
from signup import signup

app = Flask(__name__)
app.secret_key = 'your-very-secret-key'

CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))

app.register_blueprint(login)
app.register_blueprint(logout)
app.register_blueprint(signup)

with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run(debug=True)