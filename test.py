import json

# with open('src/components/Publication/pub_data.json', 'r') as f:
#   data = json.load(f)
#   titles = [d['title'] for d in data if d['description'] == ""]
#   for t in titles:
#     print(t)

with open('src/components/Publication/pub_data.json', 'r') as f:
  cur_data = json.load(f)
  with open('raw.json', 'r') as f1:
    add_data = json.load(f1)

    add_data = add_data["papers"]
    add_data_dict = {
      d['title']: d for d in add_data
    }

    for d in cur_data:
      title = d['title'] if d['title'][-1] != '.' else d['title'][:-1]
      if title in add_data_dict and len(d['description']) < len(add_data_dict[title]['introduction']):
        d['description'] = add_data_dict[title]['introduction']
  
  with open('new_raw.json', 'w') as f1:
    json.dump(cur_data, f1, indent=2)