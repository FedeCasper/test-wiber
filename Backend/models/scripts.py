from pydantic import BaseModel
from typing import List

class Script(BaseModel):
   equipment: str
   version: str
   date: str
   body: str

class VersionHistory(BaseModel):
   script_id: str
   versions: List[str]