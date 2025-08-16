# House Price Prediction using Linear Regression

This tutorial demonstrates a simple linear regression model that predicts house prices based on the square footage of the house.

## Overview

The program:
1. Generates synthetic housing data (square footage and corresponding prices)
2. Splits the data into training and testing sets
3. Creates and trains a linear regression model
4. Evaluates the model's performance using metrics like MSE and R²
5. Visualizes the data and regression line
6. Makes sample predictions for different house sizes

## Requirements

To run this program, you'll need the following Python libraries:
- NumPy
- Matplotlib
- scikit-learn

You can install these dependencies using pip:
```
pip install numpy matplotlib scikit-learn
```

## Running the Program

Execute the Python script:
```
python house_price_prediction.py
```

This will:
1. Train the model on the generated data
2. Display the model coefficients and evaluation metrics in the console
3. Show a scatter plot with the regression line
4. Save the plot as 'house_price_regression_plot.png'
5. Print sample price predictions for various house sizes

## Model Details

The model uses a simple formula:
```
price = coefficient * square_feet + intercept
```

The scatter plot shows the relationship between square footage and house prices, with the red line representing the best-fit linear model.

## Next Steps

To extend this project:
1. Use real housing data instead of synthetic data
2. Add more features (bedrooms, bathrooms, location, etc.)
3. Try different regression techniques
4. Implement cross-validation for more robust evaluation
