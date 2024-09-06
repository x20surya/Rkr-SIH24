from fuzzywuzzy import process
import pandas as pd
products = pd.read_csv('products.csv')
def product_finder(name):
    all_name = products['productName'].tolist()
    closest_match = process.extractOne(name,all_name)
    return closest_match[0]
