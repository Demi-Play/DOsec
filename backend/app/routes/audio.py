import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from app.models import AudioFile
from app import db
from app.utils.auth import token_required

bp = Blueprint('audio', __name__, url_prefix='/audio')

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'wav', 'mp3', 'flac'}

@bp.route('/upload', methods=['POST'])
@token_required
def upload_audio(current_user):
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)

        new_audio = AudioFile(filename=filename, project_id=request.form['project_id'])
        db.session.add(new_audio)
        db.session.commit()
        return jsonify({'message': 'File uploaded successfully', 'filename': filename}), 201

    return jsonify({'message': 'File type not allowed'}), 400

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
