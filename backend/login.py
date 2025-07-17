from flask import Blueprint, request, jsonify
from flask_login import login_user
from werkzeug.security import check_password_hash

from .models import Users

login = Blueprint('login', __name__)


@login.route('/login', methods=['POST'])
def login_route():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    user = Users.query.filter_by(username=username).first()

    if not user:
        return jsonify({"success": False, "error": "User not found"}), 404
    
    if not check_password_hash(user.password, password):
        return jsonify({"success": False, "error": "Incorrect password"}), 401
    
    login_user(user)
    return jsonify({"success": True, "message": "Logged in", "user": username}), 200