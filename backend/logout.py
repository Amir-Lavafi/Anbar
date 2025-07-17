from flask import Blueprint, jsonify
from flask_login import login_required, logout_user

logout = Blueprint('logout', __name__)


@logout.route('/logout')
@login_required
def show():
    logout_user()
    return jsonify({"success": True, "message": "Logged out"}), 200