def individual_serial(script) -> dict:
   return {
      "id": str(script["_id"]),
      "name": script["name"],
      "description": script["description"],
      "complete": script["complete"]
   }

def list_serial(scripts) -> list:
   return [individual_serial(script) for script in scripts]