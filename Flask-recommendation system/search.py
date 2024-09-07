import pandas as pd
from fuzzywuzzy import fuzz
from fuzzywuzzy import process


products = pd.read_csv('products.csv')


def search_products(query, limit=5):
    products['combined'] = products['productName'] + ' ' + products['tags']
    
    results = process.extract(query, products['combined'], limit=limit)
    
    indices = [result[2] for result in results]
    
    return results

query = "car"
results = search_products(query)
print(results)