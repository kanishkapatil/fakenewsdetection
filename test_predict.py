# import requests

# url = "http://127.0.0.1:5000/predict"

# data = {
#     "news": "Breaking news about celebrity endorsing fake product"
# }

# response = requests.post(url, json=data)
# print(response.json())


import requests

# URL of your backend predict endpoint
url = "http://127.0.0.1:5000/predict"

# The news text you want to check
data = {
    "text": "Breaking news: Something shocking happened today!"
}

# Make POST request
response = requests.post(url, json=data)

# Print the response
print(response.json())
