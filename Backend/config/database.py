from pymongo import MongoClient
from pymongo.mongo_client import MongoClient
from decouple import config

client = MongoClient( config('MONGO_DB_URI') )
db = client.scripts

collection_name = db[config('MONGO_DB_NAME')]

try:
   client.admin.command('ping')
   print(" *** Pinged your deployment. You successfully connected to MongoDB! *** ")
except Exception as e:
   print(e)



