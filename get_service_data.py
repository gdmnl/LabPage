from bs4 import BeautifulSoup
import json
import re

content = ''
with open('raw_service.html', 'r') as f:
  content = f.read()

soup = BeautifulSoup(content, 'html.parser')
services = soup.find_all(attrs={'class': 'intro-sub'})

ret = []

num = re.compile(r'\d+')

i = 4

for service in services:
  txt = service.text
  r = {
    "name": "",
    "keyword": "",
    "years": [],
    "category": "Program Committee & Reviewer"
  }
  if i > 0:
    r["category"] = "Teaching"
  i -= 1
  r["name"] = txt.split('(')[0].strip().rstrip()
  # find all number
  r["years"] = num.findall(txt)
  if len(r["years"]) > 0:
    t = txt.split('(')
    if len(t) > 1:
      back_txt = t[1].strip().rstrip()
      idx = back_txt.find(r["years"][0])
      prev = back_txt[:idx]
      r["keyword"] = prev.strip().rstrip()
  ret.append(r)

for i in range(len(ret) - 6, len(ret)):
  ret[i]["category"] = "Journal Reviewer"

with open('service_data.json', 'w+') as f:
  f.write(json.dumps(ret, indent=2))
