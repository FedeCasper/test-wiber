from pydantic import BaseModel

class Script(BaseModel):
   equipment: str
   version: str
   date: str
   body: str