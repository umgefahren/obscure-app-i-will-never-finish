import json

f = open("drinks_raw.json")
j = json.load(f)

glasses = set({})

for drink in j:
    glasses.add(drink['strIBA'])

glasses.remove(None)

with open('ibas.json', 'w') as f:
    json.dump(list(glasses), f, indent=2)
