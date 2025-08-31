# UNQ_C1
# GRADED FUNCTION: compute_entropy
import numpy as np

def compute_entropy(y):
    """
    Computes the entropy for 
    
    Args:
       y (ndarray): Numpy array indicating whether each example at a node is
           edible (`1`) or poisonous (`0`)
       
    Returns:
        entropy (float): Entropy at that node
        
    """
    # You need to return the following variables correctly
    entropy = 0.
    
    ### START CODE HERE ###
    p = np.sum(y == 1) / len(y)
    if p > 0:
        entropy -= p * np.log2(p)
    p = np.sum(y == 0) / len(y)
    if p > 0:
        entropy -= p * np.log2(p)
    ### END CODE HERE ###

    return entropy