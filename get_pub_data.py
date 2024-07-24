from bs4 import BeautifulSoup
import json

content = ''
with open('raw_pub_data.html', 'r') as f:
  content = f.read()

soup = BeautifulSoup(content, 'html.parser')
papers = soup.find_all(attrs={'class': 'slice-sm'})
all_paper = []
with open('pub_data.json', 'w+') as f:
  for p in papers:
    paper_info = {
      'title': '',
      'authors': [],
      'conference': '',
      'year': 0,
      'video': '',
      'href': '',
      'description': '',
      'imgSrc': '',
      'keywords': [],
    }
    title = p.find('h4').text
    metas = p.find_all(attrs={'class': 'paper-plain'})
    authors = metas[0].text.split(', ')
    for i in range(len(authors)):
      if authors[i][0] == ' ':
        authors[i] = authors[i].lstrip()
      if authors[i][-1] == '.':
        authors[i] = authors[i][:-1]
    paper_info["title"] = title
    paper_info["authors"] = authors
    if len(metas) > 1:
      conference_info = metas[1]
      words = conference_info.text.split('.')[0].split(' ')
      year = words[-1]
      if year.isdigit():
        paper_info["year"] = int(year)
      conference_name = ' '.join(words[1:-1]).rstrip()
      paper_info["conference"] = conference_name

    resources = p.find_all('a')
    for r in resources:
      if r.text == 'Video':
        paper_info["video"] = r['href']
      elif r.text == 'Paper':
        paper_info["href"] = r['href']
    all_paper.append(paper_info)
  
  f.write(json.dumps(all_paper, indent=2))