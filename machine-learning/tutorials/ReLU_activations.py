# UNQ_C2
# GRADED CELL: Sequential model
# The neural network used in this assignment has two dense layers with ReLU activations,
# followed by an output layer with a linear activation.
# The input images are 20x20 pixels, resulting in 400 input features.
# Layer 1: Dense layer with 25 units, input shape (400,), ReLU activation.
# Layer 2: Dense layer with 15 units, ReLU activation.
# Output Layer: Dense layer with 10 units (one for each digit), linear activation.
# Weight and bias shapes:
#   Layer 1: W1 (400, 25), b1 (25,)
#   Layer 2: W2 (25, 15), b2 (15,)
#   Layer 3: W3 (15, 10), b3 (10,)
# TensorFlow uses 1-D bias vectors.
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
tf.random.set_seed(1234) # for consistent results
model = Sequential(
    [               
        ### START CODE HERE ### 
        
        Dense(25, activation='relu', input_shape=(400,), name='layer1'),
        Dense(15, activation='relu', name='layer2'),
        Dense(10, activation='linear', name='output')
        
        
        
        ### END CODE HERE ### 
    ], name = "my_model" 
)