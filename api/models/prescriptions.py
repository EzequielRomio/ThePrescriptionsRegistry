import sqlite3
from datetime import datetime

from models import sql_commands

def post_prescription(prescription):
    prescription['created_date'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    row = (
        prescription['patient_id'], 
        prescription['prescription_date'], 
        prescription['created_date'], 
        prescription['right_eye'], 
        prescription['left_eye'], 
        'addition' in prescription and prescription['addition'], 
        'notes' in prescription and prescription['notes'], 
        'doctor' in prescription and prescription['doctor']
    )
    query = 'INSERT INTO prescriptions (patient_id, prescription_date, created_date, right_eye, left_eye, addition, notes, doctor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'

    prescription_id = sql_commands.sql_execute_post(query, row)

    return prescription_id


def get_prescription(prescription_id):
    """Returns the required prescription"""

    query = "SELECT * FROM prescriptions WHERE id = {}".format(prescription_id) 

    query_result = sql_commands.sql_execute_get_list(query)

    if not query_result:
        return None

    prescription = query_result[0] # is a list; ix 0 is the dict with the prescription

    return prescription


def get_prescriptions_by_patient(patient_id):
    query = 'SELECT * FROM prescriptions WHERE patient_id = {}'.format(patient_id)

    return sql_commands.sql_execute_get_list(query)


def modify_prescription(prescription_id, data_to_modify):

    data_str_format = ', '.join(['{} = "{}"'.format(k, v) for k, v in data_to_modify.items()])

    query = 'UPDATE prescriptions SET {} WHERE id = {}'.format(data_str_format, prescription_id)

    sql_commands.sql_execute(query)


def delete_prescription(prescription_id):
    query = 'DELETE FROM prescriptions WHERE id={}'.format(prescription_id)
    sql_commands.sql_execute(query)


"""
TODO - give the option to select fields
"""