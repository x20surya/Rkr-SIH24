from flask import Flask,render_template, request, jsonify
from pymongo.mongo_client import MongoClient
from bson.objectid import ObjectId
from pymongo.server_api import ServerApi
from flask_cors import CORS
from bayesian_avg_ratings import calculate_bayesian_avg_ratings
from colllabrative_knn import collabrative_knn
from content import content_based_filtering
import pandas as pd
from matrix_factorization_method import matrix_factorization
uri='mongodb+srv://aditya0405raj:1234@thread.dm2nz.mongodb.net/?retryWrites=true&w=majority&appName=thread'
client = MongoClient(uri, server_api=ServerApi('1'))
app = Flask(__name__)

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
db=client['ecommerce']
CORS(app)
@app.route('/')
def home():
    return 'Hello World'


@app.route('/ratings', methods=['GET'])
def get_ratings_csv():
    ratings_collection = db['ratings']
    ratings = list(ratings_collection.find())
    for rating in ratings:
        rating['_id'] = str(rating['_id'])
    df = pd.DataFrame(ratings)
    df.to_csv('ratings.csv', index=False)
    return 'Ratings data updated in ratings.csv'

@app.route('/products', methods=['GET'])
def get_products_csv():
    products_collection = db['products']
    products = list(products_collection.find())
    for product in products:
        product['_id'] = str(product['_id'])
    df = pd.DataFrame(products)
    df.to_csv('products.csv', index=False)
    return 'Products data updated in products.csv'
@app.route('/bayesian_avg_ratings', methods=['GET'])
def get_bayesian_avg_ratings():
    product_stats = calculate_bayesian_avg_ratings()
    return product_stats.to_json(orient="records")
@app.route('/collabrativeknn', methods=['GET'])
def collabrativeknn():
    product_stats = collabrative_knn()
    product_stats = [int(i) for i in product_stats]
    return jsonify(product_stats)
    print(product_stats)

@app.route('/contentbasedfilter', methods=['GET'])
def contentbasedfilter():
    product_stats = content_based_filtering()
    print(product_stats)
    return jsonify(product_stats)

@app.route('/matrixbasedrecommend', methods=['GET'])
def matrixbasedrecommend():
    product_stats = matrix_factorization()
    print(product_stats)
    return jsonify(product_stats)
 
    

if __name__=='__main__':
    app.run(debug=True)

