from flask_restplus import Namespace, fields


class UserDto:
    api = Namespace('user', description='user related operations')
    user = api.model('user', {
        'first_name': fields.String(required=True, description='user first name'),
        'last_name': fields.String(required=True, description='user last name'),
        'email': fields.String(required=True, description='user email address'),
        'username': fields.String(description='user username'),
        'password': fields.String(required=True, description='user password'),
        'public_id': fields.String(description='user public id'),
        'admin': fields.String(description='user admin status')
    })


class AuthDto:
    api = Namespace('auth', description='authentication related operations')
    user_auth = api.model('auth_details', {
        'email': fields.String(required=True, description='The email address'),
        'password': fields.String(required=True, description='The user password '),
    })


class ClassesDto:
    api = Namespace('classes', description='classes related operations')
    classes = api.model('classes', {
        'public_id': fields.String(description='The public ID'),
        'name': fields.String(description='The name of the class'),
        'time': fields.String(description='The time of the class'),
        'price': fields.String(description='The price of the class, in GBP'),
        'youtube_id': fields.String(description='The YouTube ID of the class stream')
    })
