# UNQ_C2
# GRADED CELL: eval_cat_err
# complete the routine to calculate classification error. Note, in this lab, target values are the index of the category and are not one-hot encoded.
def eval_cat_err(y, yhat):
    """ 
    Calculate the categorization error
    Args:
      y    : (ndarray  Shape (m,) or (m,1))  target value of each example
      yhat : (ndarray  Shape (m,) or (m,1))  predicted value of each example
    Returns:|
      cerr: (scalar)             
    """
    m = len(y)
    incorrect = 0
    for i in range(m):
    ### START CODE HERE ### 
       if y[i] != yhat[i]:
           incorrect += 1
    cerr = incorrect / m
    ### END CODE HERE ### 
        
    return(cerr)