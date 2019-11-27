import requests

url = "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session"

querystring = {"infants_lap":"0","children":"0","seniors":"0","country":"US","from0":"SGN","to0":"DAD","date0":"Jan 27 2019","pax":"1","cabin":"Coach"}

headers = {
    'x-rapidapi-host': "apidojo-hipmunk-v1.p.rapidapi.com",
    'x-rapidapi-key': "6db41f1109msh16c922befc85d56p13aaa8jsnee5dc6551652"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)