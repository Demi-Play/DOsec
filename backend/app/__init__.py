from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate


db = SQLAlchemy()


migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    # Подключение конфигураций
    app.config.from_object('app.config.Config')
    
    # Инициализация базы данных
    db.init_app(app)
    migrate.init_app(app, db)  # Инициализация миграций

    # Подключение маршрутов
    from .routes import projects, users, audio
    app.register_blueprint(projects.bp)
    app.register_blueprint(users.bp)
    app.register_blueprint(audio.bp)

    return app

