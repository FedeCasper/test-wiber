def individual_serial(script) -> dict:
   return {
      "id": str(script["_id"]),
      "equipment": script["equipment"],
      "version": script["version"],
      "date": script["date"],
      "body": script["body"]
   }

def list_serial(scripts) -> list:
   return [individual_serial(script) for script in scripts]