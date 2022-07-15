from flask import Flask, request, send_from_directory
import xgboost 
import pandas as pd

app=Flask(__name__, static_folder='./client/', static_url_path='')

model = xgboost.XGBRegressor()
model.load_model('model/model.json')

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/predict', methods=['GET'])
def predict():
    keys = list(request.args.keys())
    vals = list(map(lambda x: float(x), request.args.values()))
    input = pd.DataFrame([vals], columns=keys)
    res = model.predict(input)
    
    return str(res[0])