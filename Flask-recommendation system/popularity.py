import numpy as np
import pandas as pd

def popularitybasedrecommendation():
    ratings = pd.read_csv('ratings.csv')
    products = pd.read_csv('products.csv')

    ratings = ratings.drop(columns=['_id'])

    products = products.drop(columns=['_id'])

    print(ratings.head())
    print(products.head())

    rating_count=pd.DataFrame(ratings.groupby('productId')['rating'].count().sort_values(ascending=False))

    print(rating_count.head())

    return rating_count
popularitybasedrecommendation()






    