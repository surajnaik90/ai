import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Generate some sample data for house prices
# Square feet (independent variable X)
np.random.seed(42)
sq_feet = np.random.randint(low=1000, high=4500, size=100)

# House prices (dependent variable y) with some noise to make it realistic
# Base price of $100,000 plus $100 per square foot with some random variation
house_prices = 100000 + 100 * sq_feet + np.random.normal(0, 25000, 100)

# Reshape data for scikit-learn (must be 2D)
X = sq_feet.reshape(-1, 1)
y = house_prices

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred_train = model.predict(X_train)
y_pred_test = model.predict(X_test)

# Model evaluation
mse = mean_squared_error(y_test, y_pred_test)
r2 = r2_score(y_test, y_pred_test)

# Print model parameters and evaluation metrics
print(f"Model Coefficient (slope): ${model.coef_[0]:.2f} per square foot")
print(f"Model Intercept: ${model.intercept_:.2f}")
print(f"Mean Squared Error: ${mse:.2f}")
print(f"R² Score: {r2:.4f}")

# Create a scatter plot of the data and the regression line
plt.figure(figsize=(10, 6))

# Plot training data points
plt.scatter(X_train, y_train, color='blue', alpha=0.5, label='Training Data')

# Plot test data points
plt.scatter(X_test, y_test, color='green', alpha=0.7, label='Testing Data')

# Plot the regression line
x_range = np.linspace(min(sq_feet), max(sq_feet), 100).reshape(-1, 1)
y_range = model.predict(x_range)
plt.plot(x_range, y_range, color='red', linewidth=2, label='Regression Line')

# Add labels and title
plt.xlabel('Square Footage')
plt.ylabel('House Price ($)')
plt.title('Linear Regression: House Price vs. Square Footage')
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend()

# Create a smaller plot to display the equation
equation_text = f'y = ${model.coef_[0]:.2f}x + ${model.intercept_:.2f}'
equation_text += f'\nR² = {r2:.4f}'
plt.figtext(0.15, 0.85, equation_text, fontsize=12, 
            bbox=dict(facecolor='white', alpha=0.8, boxstyle='round,pad=0.5'))

# Save the figure
plt.savefig('c:/Code/ai/machine-learning/tutorials/house_price_regression_plot.png', dpi=300)

# Show the plot
plt.tight_layout()
plt.show()

# Additional demonstration of prediction
# Function to predict price for a given square footage
def predict_price(sq_feet):
    return model.predict([[sq_feet]])[0]

# Example predictions
sample_sizes = [1500, 2000, 3000, 4000]
print("\nSample Predictions:")
for size in sample_sizes:
    predicted_price = predict_price(size)
    print(f"A {size} sq ft house is predicted to cost: ${predicted_price:,.2f}")
