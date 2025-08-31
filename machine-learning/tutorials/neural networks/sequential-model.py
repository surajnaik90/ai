# UNQ_C1
# GRADED CELL: Sequential model

# layer1: The shape of W1 is (400, 25) and the shape of b1 is (25,)
# layer2: The shape of W2 is (25, 15) and the shape of b2 is: (15,)
# layer3: The shape of W3 is (15, 1) and the shape of b3 is: (1,)

model = Sequential(
    [               
        tf.keras.Input(shape=(400,)),    #specify input size
        ### START CODE HERE ###
        tf.keras.layers.Dense(25, activation='sigmoid', name='layer1'),
        tf.keras.layers.Dense(15, activation='sigmoid', name='layer2'),
        tf.keras.layers.Dense(1, activation='sigmoid', name='layer3'),
        
        
        
        ### END CODE HERE ### 
    ], name = "my_model" 
)  