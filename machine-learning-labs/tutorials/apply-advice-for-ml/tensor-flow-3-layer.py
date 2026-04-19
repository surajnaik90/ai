# Dense layer with 120 units, relu activation
# Dense layer with 40 units, relu activation
# Dense layer with 6 units and a linear activation (not softmax)
# Compile using
# loss with SparseCategoricalCrossentropy, remember to use from_logits=True
# Adam optimizer with learning rate of 0.01.

# UNQ_C3
# GRADED CELL: model
import logging
import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.losses import SparseCategoricalCrossentropy

logging.getLogger("tensorflow").setLevel(logging.ERROR)

tf.random.set_seed(1234)
model = Sequential(
    [
        ### START CODE HERE ### 

        Dense(120, activation="relu"),
        Dense(40, activation="relu"),
        Dense(6, activation="linear"),

    ], name="Complex"
)
model.compile(
    ### START CODE HERE ### 
    loss=SparseCategoricalCrossentropy(from_logits=True),
    optimizer=Adam(learning_rate=0.01),
    ### END CODE HERE ### 
)