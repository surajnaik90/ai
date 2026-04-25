# Understanding foundational models

## Model architecture

1. **seq2seq architecture**   

    a. Introduced in 2014. Google used it in Google Translate in 2016.   
    b. Components:   
       * Encoder which processes input tokens sequentially and generates a hidden state.
       * Decoder which uses the hidden state and generates the output tokens sequentially.

    Problems:
    * Output tokens uses only the hidden state to generate responses. It's like reading the   
      summary of the book to generate answers.   
    * Since it is a sequential processing, the model takes time process large number of tokens.   


2. **Transformer architecture**   

    a. It addressed both the problems of seq2seq architecture with the **attention mechanism**   
    b. It allows the model to weigh the importance of different input tokens when generating each output token.    
    