import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.metrics.pairwise import cosine_similarity
from fuzzy_utils import product_finder



def content_based_filtering (ratings_file='ratings.csv', products_file='products.csv',searchquery='soap'):
    print("Inside collabrative_knn")

    ratings = pd.read_csv(ratings_file)
    products = pd.read_csv(products_file)

    products['tags'] = products['tags'].apply(lambda x: x.split(","))

    tags = set(g for G in products['tags'] for g in G)

    for g in tags:
      products[g] = products.tags.transform(lambda x: int(g in x))
    
    product_tags = products.drop(columns=['productId', 'productName','tags','_id'])

    print(product_tags.head())

    

    cosine_sim = cosine_similarity(product_tags, product_tags)
    print(f"Dimensions of our tags cosine similarity matrix: {cosine_sim.shape}")

    product_idx = dict(zip(products['productName'], list(products.index)))

    def get_tags_based_recommendations(name_string, n_recommendations=10):
        name = product_finder(name_string)
        idx = product_idx[name]
        sim_scores = list(enumerate(cosine_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:(n_recommendations+1)]
        similar_products = [i[0] for i in sim_scores]
        print(f"Because you purchased {name}:")
        print(products['productName'].iloc[similar_products])
        return(list(products['productId'].iloc[similar_products]))
        
    
    return get_tags_based_recommendations(searchquery, 20)


content_based_filtering('ratings.csv', 'products.csv', 'soap')


      





