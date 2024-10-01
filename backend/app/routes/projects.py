from flask import Blueprint, jsonify, request
from app.models import Project
from app import db

bp = Blueprint('projects', __name__, url_prefix='/projects')

@bp.route('/', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{'id': p.id, 'name': p.name} for p in projects])

@bp.route('/', methods=['POST'])
def create_project():
    data = request.json
    new_project = Project(name=data['name'])
    db.session.add(new_project)
    db.session.commit()
    return jsonify({'id': new_project.id}), 201
