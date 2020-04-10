from flask import request
from flask_restplus import Resource

from ..util.dto import UserDto
from ..service.user_service import save_new_user, get_all_users, get_a_user

from ..util.decorator import admin_token_required

from ..service.auth_helper import Auth

api = UserDto.api
_user = UserDto.user


@api.route('/')
class UserList(Resource):
    @admin_token_required
    @api.doc('list_of_registered_users')
    @api.marshal_list_with(_user, envelope='data')
    def get(self):
        """List all registered users"""
        return get_all_users()

    @api.response(201, 'User successfully created.')
    @api.doc('create a new user')
    @api.expect(_user, validate=True)
    def post(self):
        """Creates a new User """
        data = request.json
        response = save_new_user(data=data)

        if 'Authorization' in response[0]:
            data, status = Auth.get_logged_in_user(response[0]['Authorization'])
            data['data'].pop('user_id')
            response[0]['user'] = data['data']

        return response


@api.route('/<public_id>')
@api.param('public_id', 'The User identifier')
@api.response(404, 'User not found.')
class User(Resource):
    @admin_token_required
    @api.doc('get a user')
    @api.marshal_with(_user)
    def get(self, public_id):
        """get a user given its identifier"""
        user = get_a_user(public_id)
        if not user:
            api.abort(404)
        else:
            return user
