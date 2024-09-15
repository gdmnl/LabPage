import json

with open('src/components/Services/services.json', 'r') as f:
  data = json.load(f)
  for item in data:
    if item['category'] == 'Teaching':
      continue
    years = item['years']
    item['years'] = []
    for year in years:
      if item['category'] == 'Conference Services':
        item['years'].append(
          {"role": "PC Member", "year": year}
        )
      elif item['category'] == 'Journal Services':
        item['years'].append(
          {"role": "Reviewer", "year": year}
        )
  with open('test.json', 'w') as f1:
    json.dump(data, f1, indent=2)