# Transformer Architecture   

Scenario:   

1. Predict the next word in a sentence:   

   `Transformer architecture is a`   

   **Basic idea behind how transformer model works?**    

   a. Sentence is broken down into tokens. Token could be a word, part of a word etc.   
      [Tokenization is one approach]    

   b. These tokens are represented in numericals. Semantic encoding done.    
      For ex: King, Queen will have closer values.   

   c. Position of the token is encoded too. This is to maintain the order.   

   d. Using deep learning model, the key message of the sentence is extracted.  
      Attention is given to each token w.r.t other tokens in a sentence.    

   e. In the end, model produces probability distribution over the vocabulary for the next token.


## Key insights   

1. A word will have 100+ dimensions learnt from training.   
   
   For ex: Location on earth has 2 dimensions: Latitute and Longitude.

   Similary, "king" word will have 100+ dimensions depending on how it is used in english language.    
   These dimensions can be "gender", "royalty" etc. But we can't define each dimension in understandable way.    
   These dimesions are learnt during training of that language and are just numbers.    
   Important thing is we can't say "gender" as 1 dimesion i.e., concept / dimension.    