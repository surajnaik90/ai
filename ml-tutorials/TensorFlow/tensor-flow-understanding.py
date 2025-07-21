#Understand TensorFlow in simple terms
# It helps us in layering neural networks

#Example
# layer1 = Dense(units=3, activation='sigmoid')
# a1 = layer1(x)  # x is the input data
# layer2 = Dense(units=2, activation='sigmoid')
# a2 = layer2(a1)
# if a2 > 0.5:
#     print("Class A")
# else:
#     print("Class B")


#Dense is the layer that connects all neurons in the previous layer to the next layer
#units is the number of neurons in the layer
#activation is the function for example is a sigmoid function
#x is the input data, a1 is the output of the first layer, a2 is the output of the second layer