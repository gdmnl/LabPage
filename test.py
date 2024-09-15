import json

journal_extensions = [
  "Seesaw Counting Filter: A Dynamic Filtering Framework for Vulnerable Negative Keys.",
  "Information-Oriented Random Walks and Pipeline Optimization for Distributed Graph Embedding.",
  "Scalable Decoupling Graph Neural Network with Feature-Oriented Optimization.",
  "Single-Source Personalized PageRanks with Workload Robustness.",
  "On Spatial-Aware Community Search.",
  "Effective and efficient attributed community search.",
  "On Minimal Steiner Maximum-Connected Subgraph Queries."
]

original_papers = [
  "Seesaw Counting Filter: An Efficient Guardian for Vulnerable Negative Keys During Dynamic Filtering.",
  "Distributed Graph Embedding with Information-Oriented Random Walks.",
  "SCARA: Scalable Graph Neural Networks with Feature-Oriented Optimization.",
  "Agenda: Robust Personalized PageRanks in Evolving Graphs.",
  "Effective Community Search over Large Spatial Graphs.",
  "Effective Community Search for Large Attributed Graphs.",
  "Querying Minimal Steiner Maximum-Connected Subgraphs in Large Graphs."
]

invisibles = [
  "Deep Graph Structural Infomax."
]

id = 0

extension_ids = [-1 for _ in range(len(journal_extensions))]
original_ids = [-1 for _ in range(len(journal_extensions))]

with open('src/components/Publication/pub_data.json', 'r') as f:
  cur_data = json.load(f)
  for item in cur_data:
    item['id'] = id
    id += 1
    item['isExtension'] = False
    item['hasExtension'] = -1
    item['isVisible'] = True
    try:
      original_idx = original_papers.index(item['title'])
      original_ids[original_idx] = item['id']
    except:
      pass
    try:
      extension_idx = journal_extensions.index(item['title'])
      extension_ids[extension_idx] = item['id']
      item['isExtension'] = True
      item['isVisible'] = False
    except:
      pass
    
    if item['title'] in invisibles:
      item['isVisible'] = False
    if item['conference'] == 'arXiv':
      item['isVisible'] = False
    if item['conference'] == 'KDD':
      item['conference'] = 'SIGKDD'

    for i in range(len(item['keywords'])):
      if item['keywords'][i] == 'graph':
        item['keywords'][i] = 'Graph System'
      elif item['keywords'][i] == 'key-value':
        item['keywords'][i] = 'Data System'

  
  for idx in range(len(original_ids)):
    oid = original_ids[idx]
    eid = extension_ids[idx]

    cur_data[oid]['hasExtension'] = eid
  
  with open('test.json', 'w') as f1:
    json.dump(cur_data, f1, indent=2)