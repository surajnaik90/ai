# Understand TensorFlow in Simple Terms

TensorFlow helps us build and layer neural networks.

## Example

```python
from tensorflow.keras.layers import Dense

layer1 = Dense(units=3, activation='sigmoid')
a1 = layer1(x)  # x is the input data

layer2 = Dense(units=2, activation='sigmoid')
a2 = layer2(a1)

if a2 > 0.5:
    print("Class A")
else:
    print("Class B")
```

## Key Concepts

- **Dense**: Create a neural network layer using Dense in TensorFlow.
- **units**: Number of neurons in the layer.
- **activation**: Function applied to an each neuron in the layer, e.g., sigmoid.
- **x**: Input data.
- **a1**: Output of the first layer.
- **a2**: Output of the second layer.