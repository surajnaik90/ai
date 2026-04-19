# Deep Learning

## Perceptron

The perceptron is the fundamental unit of a neural network.

```mermaid
flowchart LR
	x1((x1)) ------>|w1| S((Σ))
	x2((x2)) ------>|w2| S
	xm((xm)) ------>|wm| S
	S ----> A((g))
	A ----> y((ŷ))
```

Inputs: $x_1, x_2, \dots, x_m$  
Weights: $w_1, w_2, \dots, w_m$  
Linear combination: $\sum_{i=1}^{m} x_i w_i$  
Non-linearity (activation): $g(\cdot)$  
Output: $\hat{y}$

$$
\hat{y} = g\left(\sum_{i=1}^{m} x_i w_i\right)
$$