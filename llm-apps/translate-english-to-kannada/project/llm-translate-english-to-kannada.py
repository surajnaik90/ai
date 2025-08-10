import getpass
import os

if not os.environ.get("OPENAI_API_KEY"):
  os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter API key for OpenAI: ")

from langchain.chat_models import init_chat_model

#model = init_chat_model("gpt-5", model_provider="openai")
model = init_chat_model("gemini-2.5-flash", model_provider="google_genai")

from langchain_core.messages import HumanMessage, SystemMessage

messages = [
    SystemMessage("Translate the following from English into Kannada"),
    HumanMessage("Hello, how are you?"),
]

response = model.invoke(messages)

#Print the response
print(response.content)