# Crew AI 

## AI Agent

It talks to LLM model and goes through multiple iterations to generate a better response for a given task.

`Human would have spent time on iterations without the AI agents to get to the better results`

## Key elements of AI agents

1. **Role playing**
2. **Focus**   
    a. Provide enough context and not bombard with too much info. Else, it will hallucinate.   
    b. Agent should have the precise context to better generate the response.
3. **Tools**
4. **Cooperation**   
    a. AI agent should take feedback from each other.   
    b. AI agent should delegate tasks when needed.   
5. **Guardrails**   
    a. Crew AI fraweworks or any other AI agent orchestration framework will have to make sure   
       the AI agents are not getting stuck in loops, executing same tools over and over again,   
       generating hallucinations etc.   
    b. The AI agent framework will make sure those guardrails are in place for making sure
       things are not derailed.    
6. **Memory**   
    a. Short term memory: It lives in the current execution of Crew.   
    b. Long term memory: It lives even after the execution is complete.   
    It learns from the previous memory.   
    c. Entity memory

## Building blocks of Crew AI

1. Agents
2. Tasks
3. Crew

## Best practices for building AI agents

1. Have separate agents for distinct tasks. Do not mix responsibilities for an AI agent.
   Similar to Single Responsibility Principle.