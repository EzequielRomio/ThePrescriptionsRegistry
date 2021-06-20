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
