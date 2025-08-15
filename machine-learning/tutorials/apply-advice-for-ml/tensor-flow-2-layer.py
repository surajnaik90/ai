# Dense layer with 6 units, relu activation
# Dense layer with 6 units and a linear activation. Compile using
# loss with SparseCategoricalCrossentropy, remember to use from_logits=True
# Adam optimizer with learning rate of 0.01.

# UNQ_C4
# GRADED CELL: model_s
import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.losses import SparseCategoricalCrossentropy

tf.random.set_seed(1234)
model_s = Sequential(
    [
        ### START CODE HERE ### 
        Dense(6, activation="relu"),
        Dense(6, activation="linear"),
        
        ### END CODE HERE ### 
    ], name = "Simple"
)
model_s.compile(
    ### START CODE HERE ### 
    loss=SparseCategoricalCrossentropy(from_logits=True),
    optimizer=Adam(learning_rate=0.01),
    ### START CODE HERE ### 
)