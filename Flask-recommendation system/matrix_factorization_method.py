import numpy as np
import pandas as pd
import sklearn

from sklearn.decomposition import TruncatedSVD

print("Imported all the required libraries")

def matrix_factorization(ratings_csv="ratings.csv",products_csv="products.csv",searchquery="Serum"):
    
    rating=pd.read_csv(ratings_csv)
    rating=rating.drop(columns=['_id'])
    print(rating.head())
    products=pd.read_csv(products_csv)

    combined_products_data=pd.merge(rating,products,on='productId')
    print(combined_products_data.head())

    print(combined_products_data.groupby('productId')['rating'].count().sort_values(ascending=False).head())

    ratings_crosstab = combined_products_data.pivot_table(values='rating', index='userid', columns='productName', fill_value=0)
    print(ratings_crosstab.head())

    print(ratings_crosstab.shape)

    X=ratings_crosstab.values.T
    print(X.shape)

    SVD=TruncatedSVD(n_components=12,random_state=17)

    resultant_matrix =SVD.fit_transform(X)

    print(resultant_matrix.shape)

    corr_mat=np.corrcoef(resultant_matrix)
    print(corr_mat.shape)

    products_names=ratings_crosstab.columns
    products_list=list(products_names)
    searchedone=products_list.index(searchquery)

    print(searchedone)

    corr_searchedone=corr_mat[searchedone]
    
    resultant =list(products_names[(corr_searchedone<1.0) & (corr_searchedone>0.5)].sort_values(ascending=False))
    print(resultant.__len__())
    print(resultant)
    return resultant
    

    


matrix_factorization('ratings.csv', 'products.csv', 'Serum')