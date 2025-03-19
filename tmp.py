a = 'March 2025: Siqiang starts to serve as a proceeding co-chair of PVLDB 2026!\
March 2025: A MOE Tier-2 grant is awarded!\
February 2025: Four papers and one tutorial are accepted to SIGMOD 2025!\
February 2025: Siqiang receives a NRF Frontier Competitive Research Program grant!\
February 2025: Siqiang serves as an area chair of NeurIPS 2025!\
January 2025: Siqiang serves as an area chair of SIGKDD 2025!\
January 2025: Siqiang is awarded a grant from AISG!'

news = a.split('!')
out = []

for n in news:
  print(n)
  if n == '':
    continue
  t = n.split(': ')[0]
  content = n.split(': ')[1]
  y = t.split(' ')[1]
  m = t.split(' ')[0]
  out.append(
    {
      "year": int(y),
      "month": m,
      "content": content + '!'
    }
  )
import json

print(json.dumps(out, indent=2))