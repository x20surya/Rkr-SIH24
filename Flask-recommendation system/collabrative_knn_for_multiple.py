import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
print("Imported all the required libraries")
def collabrative_knn(ratings_file='ratings.csv', products_file='products.csv'):
    print("Inside collabrative_knn")

    ratings = pd.read_csv('ratings.csv')
    products = pd.read_csv('products.csv')

    products['tags'] = products['tags'].apply(lambda x: x.split(","))

    def create_X(df):
        M = df['userid'].nunique()
        N = df['productId'].nunique()

        user_mapper = dict(zip(np.unique(df["userid"]), list(range(M))))
        product_mapper = dict(zip(np.unique(df["productId"]), list(range(N))))
    
        user_inv_mapper = dict(zip(list(range(M)), np.unique(df["userid"])))
        product_inv_mapper = dict(zip(list(range(N)), np.unique(df["productId"])))
    
        user_index = [user_mapper[i] for i in df['userid']]
        item_index = [product_mapper[i] for i in df['productId']]

        X = csr_matrix((df["rating"], (user_index,item_index)), shape=(M,N))
    
        return X, user_mapper, product_mapper, user_inv_mapper, product_inv_mapper
    X, user_mapper, product_mapper, user_inv_mapper, product_inv_mapper = create_X(ratings)

    print(X.shape)

    n_total = X.shape[0]*X.shape[1]
    n_ratings = X.nnz
    sparsity = n_ratings/n_total
    print(f"Matrix sparsity: {round(sparsity*100,2)}%")

    n_ratings_per_user = X.getnnz(axis=1)
    print(len(n_ratings_per_user))

    print(f"Most active user rated {n_ratings_per_user.max()} products.")
    print(f"Least active user rated {n_ratings_per_user.min()} products.")

    n_ratings_per_product = X.getnnz(axis=0)
    len(n_ratings_per_product)

    print(f"Most rated product has {n_ratings_per_product.max()} ratings.")
    print(f"Least rated product has {n_ratings_per_product.min()} ratings.")

    def find_similar_products(product_ids, X, product_mapper, product_inv_mapper, k, metric='cosine'):
        X = X.T
        results = {}
    
        for product_id in product_ids:
           neighbour_ids = []
           product_ind = product_mapper[product_id]
           product_vec = X[product_ind]
           if isinstance(product_vec, (np.ndarray)):
                 product_vec = product_vec.reshape(1, -1)
        
           kNN = NearestNeighbors(n_neighbors=k+1, algorithm="brute", metric=metric)
           kNN.fit(X)
           neighbour = kNN.kneighbors(product_vec, return_distance=False)
           for i in range(0, k):
                
                n = neighbour.item(i)
                neighbour_ids.append(product_inv_mapper[n])
        
           neighbour_ids.pop(0)
           results[product_id] = neighbour_ids
    
        return results

    product_ids = [1001]
    similar_products_dict = find_similar_products(product_ids, X, product_mapper, product_inv_mapper, k=20)

    for product_id, similar_products in similar_products_dict.items():
       
       similar_products = [int(i) for i in similar_products]
       print(f"Similar products for {product_id}: {similar_products}")

    product_tags = dict(zip(products['productId'], products['productName']))

    for product_id in product_ids:
      product_tag = product_tags[product_id]
      print(f"Because you rated {product_tag}:")
    for i in similar_products:
       print(product_tags[i])

    return similar_products

print(collabrative_knn())
   
    
        
   




    



    
