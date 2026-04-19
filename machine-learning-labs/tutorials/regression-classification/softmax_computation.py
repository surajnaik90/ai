# UNQ_C1
# GRADED CELL: my_softmax
import numpy as np

def my_softmax(z):  
    """ Softmax converts a vector of values to a probability distribution.
    Args:
      z (ndarray (N,))  : input data, N features
    Returns:
      a (ndarray (N,))  : softmax of z
    """    
    ### START CODE HERE ### 

    exp_z = np.exp(z - np.max(z))
    a = exp_z / np.sum(exp_z)
    
    
    ### END CODE HERE ### 
    return a