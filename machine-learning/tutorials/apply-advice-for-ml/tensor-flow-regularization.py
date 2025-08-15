# `Reconstruct your complex model, but this time include regularization. Below, compose a three-layer model:

# Dense layer with 120 units, relu activation, kernel_regularizer=tf.keras.regularizers.l2(0.1)
# Dense layer with 40 units, relu activation, kernel_regularizer=tf.keras.regularizers.l2(0.1)
# Dense layer with 6 units and a linear activation. Compile using
# loss with SparseCategoricalCrossentropy, remember to use from_logits=True
# Adam optimizer with learning rate of 0.01.`

# UNQ_C5
# GRADED CELL: model_r

import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.losses import SparseCategoricalCrossentropy

tf.random.set_seed(1234)
model_r = Sequential(
    [
        ### START CODE HERE ### 
        Dense(120, activation="relu", kernel_regularizer=tf.keras.regularizers.l2(0.1)),
        Dense(40, activation="relu", kernel_regularizer=tf.keras.regularizers.l2(0.1)),
        Dense(6, activation="linear"),
        
        
        ### START CODE HERE ### 
    ], name= None
)
model_r.compile(
    ### START CODE HERE ### 
    loss=SparseCategoricalCrossentropy(from_logits=True),
    optimizer=Adam(learning_rate=0.01),
    ### START CODE HERE ### 
)
