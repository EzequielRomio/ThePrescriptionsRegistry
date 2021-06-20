CREATE TABLE prescriptions (
    id INTEGER PRIMARY KEY,
    patient_id INTEGER NOT NULL,
    prescription_date TEXT NOT NULL,
    created_date TEXT NOT NULL, 
    right_eye TEXT NOT NULL,
    left_eye TEXT NOT NULL,
    addition TEXT,
    notes TEXT,
    doctor TEXT   
);
