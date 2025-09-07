import numpy as np
def select_threshold(y_val, p_val): 
   best_epsilon = 0
   best_F1 = 0
   F1 = 0

   step_size = (max(p_val) - min(p_val)) / 1000

   for epsilon in np.arange(min(p_val), max(p_val), step_size):

       ### START CODE HERE ### 
       predictions = (p_val < epsilon).astype(int)

       tp = np.sum((predictions == 1) & (y_val == 1))
       fp = np.sum((predictions == 1) & (y_val == 0))
       fn = np.sum((predictions == 0) & (y_val == 1))

       prec = tp / (tp + fp) if (tp + fp) > 0 else 0
       rec = tp / (tp + fn) if (tp + fn) > 0 else 0

       F1 = (2 * prec * rec) / (prec + rec) if (prec + rec) > 0 else 0
       ### END CODE HERE ###

       if F1 > best_F1:
           best_F1 = F1
           best_epsilon = epsilon

   return best_epsilon, best_F1