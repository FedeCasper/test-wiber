from fastapi import APIRouter
from models.scripts import Script
from config.database import collection_name
from schema.schemas import list_serial
from bson import ObjectId

router = APIRouter()

@router.get("/scripts/")
async def get_scripts():
   scripts = list_serial(collection_name.find())
   return scripts

@router.post("/scripts/")
async def post_scripts(script: Script):
   collection_name.insert_one(dict(script))
   scripts = list_serial(collection_name.find())
   return scripts

@router.put("/scripts/{id}")
async def put_scripts(id: str, script: Script):
   collection_name.find_one_and_update( {"_id": ObjectId(id)}, {"$set": dict(script)} )
   scripts = list_serial(collection_name.find())
   return scripts

@router.delete("/scripts/{id}")
async def delete_scripts(id):
   collection_name.find_one_and_delete({"_id": ObjectId(id)})
   scripts = list_serial(collection_name.find())
   return scripts