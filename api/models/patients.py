import sqlite3
from datetime import datetime

from models import sql_commands

def post_patient(patient):
    patient['created_date'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    row = ( 
        patient['name'], 
        patient['last_name'], 
        patient['age'], 
        patient['provider'], 
        patient['email'],
    )
    query = 'INSERT INTO patients (name, last_name, age, provider, email) VALUES (?, ?, ?, ?, ?)'

    patient_id = sql_commands.sql_execute_post(query, row)

    return patient_id


def get_patient(patient_id, fields=[]):
    if fields:
        fields_str = ', '.join(fields)
    else:
        fields_str = '*'

    query = "SELECT {} FROM patients WHERE id = {}".format(fields_str, patient_id) 

    query_result = sql_commands.sql_execute_get_list(query)

    if not query_result:
        return None

    patient = query_result[0] # is a list with only one element; a dict with the requiered user 
    return patient


def get_patients():
    query = 'SELECT * FROM patients'

    query_result = sql_commands.sql_execute_get_list(query)

    return query_result
