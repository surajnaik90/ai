In this exercise you will implement line 12 of the algorithm outlined in Fig 3 above and you will also compute the loss between the  𝑦
  targets and the  𝑄(𝑠,𝑎)
  values. In the cell below, complete the compute_loss function by setting the  𝑦
  targets equal to:

𝑦𝑗={𝑅𝑗𝑅𝑗+𝛾max𝑎′𝑄̂ (𝑠𝑗+1,𝑎′)if episode terminates at step 𝑗+1otherwise
 

Here are a couple of things to note:

The compute_loss function takes in a mini-batch of experience tuples. This mini-batch of experience tuples is unpacked to extract the states, actions, rewards, next_states, and done_vals. You should keep in mind that these variables are TensorFlow Tensors whose size will depend on the mini-batch size. For example, if the mini-batch size is 64 then both rewards and done_vals will be TensorFlow Tensors with 64 elements.
Using if/else statements to set the  𝑦
  targets will not work when the variables are tensors with many elements. However, notice that you can use the done_vals to implement the above in a single line of code. To do this, recall that the done variable is a Boolean variable that takes the value True when an episode terminates at step  𝑗+1
  and it is False otherwise. Taking into account that a Boolean value of True has the numerical value of 1 and a Boolean value of False has the numerical value of 0, you can use the factor (1 - done_vals) to implement the above in a single line of code. Here's a hint: notice that (1 - done_vals) has a value of 0 when done_vals is True and a value of 1 when done_vals is False.
Lastly, compute the loss by calculating the Mean-Squared Error (MSE) between the y_targets and the q_values. To calculate the mean-squared error you should use the already imported package MSE:

from tensorflow.keras.losses import MSE