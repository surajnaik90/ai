Start by implementing the cost function using for loops. Consider developing the cost function in two steps. First, develop the cost function without regularization. A test case that does not include regularization is provided below to test your implementation. Once that is working, add regularization and run the tests that include regularization. Note that you should be accumulating the cost for user  𝑗
  and movie  𝑖
  only if  𝑅(𝑖,𝑗)=1
 .

 Here is some more details. The code below pulls out each element from the matrix before using it. 
One could also reference the matrix directly.  
This code does not contain regularization.
    nm,nu = Y.shape
    J = 0
    ### START CODE HERE ###  
    for j in range(nu):
        w = W[j,:]
        b_j = b[0,j]
        for i in range(nm):
            x = 
            y = 
            r =
            J += 
    J = J/2
    ### END CODE HERE ### 


    Regularization just squares each element of the W array and X array and them sums all the squared elements. You can utilize np.square() and np.sum().
regularization details
    J += (lambda_/2) * (np.sum(np.square(W)) + np.sum(np.square(X)))