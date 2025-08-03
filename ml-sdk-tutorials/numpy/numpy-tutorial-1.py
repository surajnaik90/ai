#Summarizing the numpy capabilities
#1. Create multi-dimensional arrays
#2. Create evenly spaced arrays with stepsize - arange
#3. Create evenly spaced arrays wihout stepsize - linspace
#4. Create arrays filled with zeros or ones. This could be for multidimensional arrays as well.
#5. Create arrays with random values
#6. Create arrays with ones.
#7. Fill arrays with a specific value
#8. Create an identity matrix

#Create numpy arrays
import numpy as np

# Create a 1D array
one_dimensional_array = np.array([1, 2, 3, 4, 5])

# Create a 2D array - Collection of 1D arrays
# The below example holds two 1D arrays, each with 3 elements
two_dimensional_array = np.array(
    [
        [1, 2, 3], 
        [4, 5, 6]
    ])

# Create a 3D array - Collection of 2D arrays
# The below example holds two 2D arrays, each with 4 rows and 2 columns
three_dimensional_array = np.array(
    [
        [
            [1, 2], 
            [3, 4],
            [5, 6],
            [7, 8]
        ],
        [
            [5, 6], 
            [7, 8],
            [9, 10],
            [11, 12]
        ]
    ]
)

# Create a 4D array - Collection of 3D arrays
# The below example holds two 3D arrays, each with 2 layers of 2D arrays
four_dimensional_array = np.array(
    [
        [
            [
                [1, 2], 
                [3, 4]
            ],
            [
                [5, 6], 
                [7, 8]
            ]
        ],
        [
            [
                [9, 10], 
                [11, 12]
            ],
            [
                [13, 14], 
                [15, 16]
            ]
        ]
    ]
)

# arange function
# Create a 1D array with values from 0 to 9
arange_array = np.arange(1, 11, 3)
print("1D array using arange:", arange_array)

# linspace function
# Create a 1D array with 5 evenly spaced values between 0 and 1
linspace_array = np.linspace(0, 1, 5)
print("1D array using linspace:", linspace_array)

# zeros function
single_zero_array = np.zeros(5)  # 1D array of zeros
print("1D array of zeros:", single_zero_array)

# Create arrays with random values
random_array = np.random.rand(3, 3)  # 2D array of random values
print("2D array of random values:\n", random_array)

# ones function
single_one_array = np.ones(5)  # 1D array of ones
print("1D array of ones:", single_one_array)

#fill arrays with a specific value
filled_array = np.full((2, 3), 7)  # 2D array filled with the value 7
print("2D array filled with 7:\n", filled_array)

#Create an identity matrix
identity_matrix = np.eye(3)
print("Identity matrix:\n", identity_matrix)