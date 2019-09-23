from flask import Flask, render_template, flash, \
redirect, url_for, request, logging
from wtforms import Form, StringField, TextAreaField, validators
from flask_mysqldb import MySQL
import json

app = Flask (__name__)

# Config MySQL
app.config['MYSQL_HOST'] = '34.83.51.125'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '#CECS445Staging'
app.config['MYSQL_DB'] = 'cecs445stagingdb'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

# TODO Update secret key
app.secret_key = '3sWtqox1OC9M92ivZz4ATWi7MJ74VPf9UGW_yOIzDGI'

# init MYSQL
mysql = MySQL(app)

@app.route('/')
def index():
    return json.dumps({
        'message': 'home',
        'code': 200
    })

@app.route('/persons')
def persons():
    return json.dumps({
        'code': 200,
        'XxBryanxX': {
            'first_name': 'Bryan',
            'last_name': 'Rojas',
            'email': 'BryanRojasCS@gmail.com'
        },
        'Hector123': {
            'first_name': 'Hector',
            'last_name': 'Mendoza',
            'email': 'HM123@gmail.com'
        },
        'Fake': {
            'first_name': 'Fake',
            'last_name': 'Name',
            'email': 'FakeName@gmail.com'
        }
    })

if __name__ == '__main__':
    app.run(debug=True)