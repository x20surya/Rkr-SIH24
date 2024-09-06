import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def calculate_bayesian_avg_ratings(ratings_file='ratings.csv', products_file='products.csv'):
    ratings = pd.read_csv(ratings_file)
    products = pd.read_csv(products_file)

    n_ratings = len(ratings)
    print(f"Number of ratings: {n_ratings}")
    n_products = ratings['productId'].nunique()
    n_users = ratings['userid'].nunique()
    print(f"Number of unique products: {n_products}")
    print(f"Number of unique users: {n_users}")

    mean_ratings = ratings.groupby('userid')['rating'].mean()
    product_ratings = ratings.merge(products, on='productId')
    highest_rated_user = mean_ratings.idxmax()

    product_stats = ratings.groupby('productId')['rating'].agg(['count', 'mean'])
    C = product_stats['count'].mean()
    m = product_stats['mean'].mean()
    print(f"User with the highest average rating: {highest_rated_user}")
    print(f"Average number of ratings for a given product: {C:.2f}")
    print(f"Average rating for a given product: {m:.2f}")

    def bayesian_avg(ratings):
        bayesian_avg = (C * m + ratings.sum()) / (C + ratings.count())
        return round(bayesian_avg, 3)

    bayesian_avg_ratings = ratings.groupby('productId')['rating'].agg(bayesian_avg).reset_index()
    bayesian_avg_ratings.columns = ['productId', 'bayesian_avg']
    product_stats = product_stats.merge(bayesian_avg_ratings, on='productId')
    product_stats = product_stats.merge(products[['productId', 'productName']])
    
    return product_stats.sort_values('bayesian_avg', ascending=False)

