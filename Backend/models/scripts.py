from pydantic import BaseModel

class Script(BaseModel):
   name: str
   description: str
   complete: bool 