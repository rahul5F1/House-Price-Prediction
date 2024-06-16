# Mini-Group-Project
My 1st and mini group project is on 'House Price Prediction' that is in 3-2 semester.

This repository contains a simple House Price Prediction model implemented using Python. The project follows a structured process, including data cleaning, model development using Ridge regression, and the creation of a web-based user interface using Flask.


**Procedure:**

_Step - 1_: The dataset is taken from Kaggle, instead we can create a csv file that containing the attributes and values just like the dataset from kaggle is having. The dataset undergoes cleaning to handle missing values, categorical data, and other preprocessing steps inorder to get the prediction (output) accurately without fail.

_Step - 2_: Now should implement the learning model by choosing any of the 3 methods (i.e., Linear Regression, Lasso Regression, Ridge Regression). Among those 3 methods we'll get to know that Ridge Regression method will be the right one to implement becuase of its better accuracy compared with rest of the two methods. So, the machine learning model is implemented using Ridge regression, leveraging the scikit-learn library. The trained model is saved for later use.

_Step - 3_: The project incorporates a Flask web application, providing a user-friendly interface for predicting house prices. Users can input details such as selectingthe location, number of bedrooms & bathrooms, and area in square feet to receive a price prediction.

**Softwares used:**

1. `Python` (Version 3.12.4)
2. `VisualStudio Code` (to execute main python code, html, css & javascript codes for web page)
3. `pip` (for importing pandas, numpy)
4. `scikit-learn` (for importing 3 regression methods)
5. `Flask` (for user friendly interface)
