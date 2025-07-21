# NumPy Tutorial - Array Creation and Manipulation

This tutorial covers the fundamental capabilities of NumPy for creating and working with multi-dimensional arrays.

## Overview

NumPy (Numerical Python) is a powerful library for scientific computing in Python. This tutorial demonstrates the core array creation functionalities that form the foundation of data science and machine learning workflows.

## NumPy Capabilities Covered

### 1. Create Multi-dimensional Arrays
- **1D Arrays**: Simple one-dimensional arrays (vectors)
- **2D Arrays**: Two-dimensional arrays (matrices)
- **3D Arrays**: Three-dimensional arrays (collections of matrices)
- **4D Arrays**: Four-dimensional arrays (collections of 3D arrays)

### 2. Create Evenly Spaced Arrays with Step Size - `arange()`
- Generate arrays with specific start, stop, and step values
- Useful for creating sequences with regular intervals
- Example: `np.arange(1, 11, 3)` creates [1, 4, 7, 10]

### 3. Create Evenly Spaced Arrays without Step Size - `linspace()`
- Generate arrays with a specified number of evenly spaced values
- Useful when you know the number of points needed between two values
- Example: `np.linspace(0, 1, 5)` creates 5 evenly spaced values from 0 to 1:  0.0, 0.25, 0.5, 0.75, 1.0

### 4. Create Arrays Filled with Zeros or Ones
- **Zeros**: `np.zeros()` - Create arrays filled with zeros
- **Ones**: `np.ones()` - Create arrays filled with ones
- Works for multi-dimensional arrays as well

### 5. Create Arrays with Random Values
- `np.random.rand()` - Generate arrays with random values between 0 and 1
- Useful for initializing weights in machine learning models
- Can create multi-dimensional random arrays

### 6. Fill Arrays with a Specific Value
- `np.full()` - Create arrays filled with any specified value
- Example: `np.full((2, 3), 7)` creates a 2x3 array filled with 7s

## Getting Started

### Prerequisites
```bash
pip install numpy
```

### Basic Usage
```python
import numpy as np

# Create a simple 1D array
arr = np.array([1, 2, 3, 4, 5])
print(arr)
```

## File Structure

- `numpy-tutorial-1.py` - Main tutorial file with examples of all array creation methods

## Key Concepts

### Array Dimensions
- **1D**: Single row of elements (vector)
- **2D**: Rows and columns (matrix)
- **3D**: Collection of 2D arrays (like a stack of matrices)
- **4D**: Collection of 3D arrays (like multiple stacks)

### When to Use Each Method

| Method | Use Case |
|--------|----------|
| `np.array()` | When you have specific data to convert to array |
| `np.arange()` | When you need a sequence with specific step size |
| `np.linspace()` | When you need a specific number of evenly spaced points |
| `np.zeros()` | For initialization, placeholders, or mathematical operations |
| `np.ones()` | For initialization or when you need arrays of 1s |
| `np.random.rand()` | For random initialization, testing, or simulation |
| `np.full()` | When you need arrays filled with a specific value |

## Next Steps

After mastering array creation, explore:
- Array indexing and slicing
- Mathematical operations on arrays
- Array reshaping and manipulation
- Broadcasting rules
- Integration with other libraries (matplotlib, pandas, sklearn)

## Tips

1. **Memory Efficiency**: Use appropriate data types for your arrays
2. **Performance**: NumPy operations are much faster than pure Python loops
3. **Broadcasting**: Understanding how NumPy handles operations between different shaped arrays
4. **Vectorization**: Replace loops with NumPy operations when possible

This tutorial provides the foundation for working with NumPy arrays, which are essential for data science, machine learning, and scientific computing in Python.
