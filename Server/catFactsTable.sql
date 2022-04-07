
//just designing the tables
REATE DATABASE cats CREATE TABLE catfacts { _id SERIAL NOT NULL PRIMARY KEY,
type status json,
user NOT NULL VARCHAR,
text VARCCHAR(255),
created_at VARCCHAR,
updated_at VARCCHAR }