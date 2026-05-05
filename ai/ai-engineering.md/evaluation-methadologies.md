# Evaluation methadoogy

## Language model performance metrics   

1. **Entropy**: How much info a token holds?    
2. **Cross-entropy**: How difficult it is predict a next token?   
3. **Perplexity**: The amount of uncertainity in predicting the next token?   


## AI as a judge [AI judge = AI model + Prompt]     

Right prompt for the right model can make AI a good judge.     

How to use AI as a judge? 3 different ways:     
1. Give question and answer to it. Ask how good the answer is?   
2. Give reference answer. Compare generated answer with reference answer.    
3. Generate 2 responses. Compare the responses.   

How to give prompts to AI judge ?  It should clearly explain the following:

1. Clarity in the task the model to perform.   
2. Scoring: Classification (yes / no). Discrete value (1 - 5). Continuous value (0 - 1)    
   Classification and discrete values work better. Models are good at those.   

 ### Limitations of AI as a judge   

 1. Responses are inconsistent.   
 2. Criteria ambiguity