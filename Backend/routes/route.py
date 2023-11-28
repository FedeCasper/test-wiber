from fastapi import APIRouter, Depends
from models.scripts import Script
from config.database import collection_name
from config.database import collection_version_history
from models.scripts import VersionHistory
from schema.schemas import list_serial
from bson import ObjectId
from datetime import datetime

router = APIRouter()

# Functions --------------------------------------

def generate_version():
   now = datetime.now()
   version = f"v{now.year}.{now.hour}.{now.minute}"
   return version

def get_version_history(script_id: str):
   version_history = collection_version_history.find_one({"script_id": script_id})
   if not version_history:
      version_history = {"script_id": script_id, "versions": []}
      collection_version_history.insert_one(version_history)
   return VersionHistory(**version_history)

def get_version_history(script_id: str):
   version_history = collection_version_history.find_one({"script_id": script_id})
   if not version_history:
      version_history = {"script_id": script_id, "versions": []}
      collection_version_history.insert_one(version_history)
   return VersionHistory(**version_history)


# Endpoints --------------------------------------

@router.get("/scripts/")
async def get_scripts():
   scripts = list_serial(collection_name.find())
   return scripts

@router.post("/scripts/")
async def post_scripts(script: Script, version: str = Depends(generate_version)):
   script.version = version
   collection_name.insert_one(dict(script))
   scripts = list_serial(collection_name.find())
   return scripts

@router.put("/scripts/{script_id}/")
async def put_scripts(script_id: str, script: Script, version: str = Depends(generate_version), version_history: VersionHistory = Depends(get_version_history)):
   script.version = version
   # Actualiza el script
   collection_name.update_one({"_id": ObjectId(script_id)}, {"$set": dict(script)})
   print(script.version)
   # Actualiza el historial de versiones
   version_history.versions.append(version)  # Usar la nueva versión generada
   print(version_history)
   collection_version_history.update_one({"script_id": script_id}, {"$set": version_history.dict()})
   scripts = list_serial(collection_name.find())
   return scripts

@router.delete("/scripts/{id}")
async def delete_scripts(id):
   collection_name.find_one_and_delete({"_id": ObjectId(id)})
   scripts = list_serial(collection_name.find())
   return scripts

@router.get("/scripts/{script_id}/versions")
async def get_script_versions(script_id: str, version_history: VersionHistory = Depends(get_version_history)):
   return {"script_id": script_id, "versions": version_history.versions}

@router.get("/filteredScripts/")
async def get_scripts(equipment: str = None):
   if equipment:
      scripts = list_serial(collection_name.find({"equipment": equipment}))
   else:
      scripts = list_serial(collection_name.find())
   return scripts