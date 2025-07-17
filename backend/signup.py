import sqlalchemy.exc
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash

from .models import Users, db

signup = Blueprint('/signup', __name__)


@signup.route('/signup', methods=['POST'])
def signup_route():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')

    if not all([username, email, password, confirm_password]):
        return jsonify({"success": False, "error": "Missing required fields"}), 400
    
    if password != confirm_password:
        return jsonify({"success": False, "error": "Passwords do not match"}), 400
    
    hashed_password = generate_password_hash(password, method='sha256')

    try:
        new_user = Users(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"success": True, "message": "User registered successfully"}), 201
    except sqlalchemy.exc.IntegrityError:
        return jsonify({"success": False, "error": "Username or email already exists"}), 409