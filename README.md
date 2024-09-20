# House Price Prediction Project

## Project Description
This project aims to predict house prices based on a dataset scraped from http://house.speakingsame.com/. The dataset encompasses data from 322 suburbs in Perth, with an average of approximately 100 rows per suburb. By leveraging this information, the project seeks to provide accurate price estimates for houses, aiding buyers and sellers in the real estate market.

## About the Dataset
The dataset consists of various features believed to be essential for predicting house prices, including:

- **House Size**: Total area of the house.
- **Number of Bedrooms**: Count of bedrooms in the property.
- **Number of Bathrooms**: Count of bathrooms.
- **Land Size**: Total area of the land on which the house is built.
- **School Proximity**: Distance to the nearest ATAR-applicable school.
- **Local Amenities**: Availability of nearby shops, parks, and transport facilities.
- **Suburb Characteristics**: Economic indicators, crime rates, and demographic data relevant to each suburb.

Preliminary analysis indicates a significant correlation between these features and the target variable (i.e., house price).

### Additional Data Sources
- **Longitude and Latitude**: Geographic coordinates obtained from data.gov.au.
- **School Ranking Data**: Information from bettereducation regarding the rankings of local schools.

The nearest schools identified are those defined as 'ATAR-applicable'. Please note that some values in the "NEAREST_SCH_RANK" column may be missing, as certain schools are unranked.

## Project Overview
The project is structured around several key phases:

1. **Data Collection and Preprocessing**: Gathering and cleaning data from various sources to ensure accuracy.
2. **Exploratory Data Analysis (EDA)**: Analyzing the dataset to uncover patterns and trends.
3. **Feature Engineering**: Creating new features based on existing data to improve model performance.
4. **Model Selection and Training**: Evaluating different algorithms to identify the best fit for the data.
5. **User-Friendly Interface**: Developing a simple interface for users to input property details and receive price predictions.
6. **Model Evaluation**: Assessing model performance using metrics like Mean Absolute Error (MAE) and R-squared.

## How to Run the Project
To run the project, follow these steps:

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/yourusername/house-price-prediction.git
2. **Navigate to the Project Directory**
3. ```bash
   cd house-price-prediction
5. **Run the Application: Start the application by running the following command**
   ```bash
   python app.py
7. Access the Application: Open your web browser and go to http://127.0.0.1:5000 to interact with the application.
