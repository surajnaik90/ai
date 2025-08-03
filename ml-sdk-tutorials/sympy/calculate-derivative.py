#Script to calculate the derivate of J(W) = W^2

import sympy as sp

# Define the symbols
J, W = sp.symbols('J, W')

# Define the function J in terms of W
J = W**2

# Calculate the derivative of J with respect to W
dJ_dW = sp.diff(J, W)

print(f"The derivative of J(W) = W^2 with respect to W is: {dJ_dW}")