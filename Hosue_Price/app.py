from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model and label encoders
model = None
with open('model.pkl', 'rb') as f:
    



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        adres = request.form['adres']
        semt = request.form['semt']
        yatak_odalari = int(request.form['yatak_odalari'])
        banyolar = int(request.form['banyolar'])
        garaj = int(request.form['garaj'])
        kat_alani = int(request.form['kat_alani'])
        insa_yili = int(request.form['insa_yili'])
        sehir_merkezi_mesafesi = float(request.form['sehir_merkezi_mesafesi'])
        en_yakin_istasyon_mesafesi = float(request.form['en_yakin_istasyon_mesafesi'])
        en_yakin_okul_mesafesi = float(request.form['en_yakin_okul_mesafesi'])

        # Convert categorical features using label encoding

        # Prepare input data
        input_data = np.array([[adres_encoded, semt_encoded, yatak_odalari, banyolar, garaj, kat_alani, insa_yili, sehir_merkezi_mesafesi, en_yakin_istasyon_mesafesi, en_yakin_okul_mesafesi]])

        # Predict the price using the model
        predicted_price = model.predict(input_data)[0]

        return jsonify({'predicted_price': predicted_price})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)



