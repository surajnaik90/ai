# Building a Simple LLM application (Python) - Translate English to anoher language text

## Pre-requisites (Windows)

1. Install langchain

   `pip install langchain`

2. Set environment variables

   ```
   set LANGSMITH_TRACING="true"
   set LANGSMITH_PROJECT="default"
   ```

3. Using Language Model

   ```
   pip install -qU "langchain[openai]"
   pip install -U langchain-google-genai
   
   Install langchain Open AI dependency.
   q -> Quiet install
   U -> Upgrade to latest
   ```

4. Create Open AI / Google Gemini API Keys


   Create a secret key using [OpenAI API Keys page](https://platform.openai.com/settings/organization/api-keys)
   It is not free.

   OR

   Create a Google Gemini Secret Key [Google Gemini Secret Key](https://aistudio.google.com/apikey)
   $300 credits available.
   

5. Set env for OPEN AI API Key

   ```
   set OPENAI_API_KEY="open-ai-api-key"

   OR

   set GOOGLE_API_KEY = "google-gemini-api-key"
   ```

6. 