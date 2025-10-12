"""In this exercise you'll build a neural network that predicts the price of a house according to a simple formula.
Imagine that house pricing is as easy as:A house has a base cost of 50k, and every additional bedroom adds a cost of 50k. 
This will make a 1 bedroom house cost 100k, a 2 bedroom house cost 150k etc. How would you create a neural network that learns 
this relationship so that it would predict a 7 bedroom house as costing close to 400k etc. Hint: Your network might work better 
if you scale the house price down. You don't have to give the answer 400...it might be better to create something that predicts
the number 4, and then your answer is in the 'hundreds of thousands' etc.
"""
import numpy as np
import tensorflow as tf

no_of_bedrooms = np.array([1, 2, 3, 4, 5, 6], dtype=np.float32)
bedroom_prices = np.array([1.0, 1.5, 2.0, 2.5, 3.0, 3.5], dtype=np.float32)

model = tf.keras.Sequential(
    [
        tf.keras.Input(shape=(1,)),
        tf.keras.layers.Dense(units=1)
    ]
)

# sgd: stochastic gradient descent
model.compile(optimizer='sgd', loss='mean_squared_error')

model.fit(no_of_bedrooms, bedroom_prices, epochs=500)

predicted_value = model.predict(np.array([7.0]))

print(predicted_value)