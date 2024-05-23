import json
file = open('uncoded_data', 'r').readlines()
dane = {}
file = [x.strip().split('\t')[-1] for x in file]
#remove  '' from list
file = [x for x in file if x]

for i in range(0, len(file)-1, 2):
    dane[file[i]] = file[i+1]

with open('permissions.json', 'w') as f:
    json.dump(dane, f)