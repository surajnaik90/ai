# AI Use cases

| Type | Use Case | Approach |
|------|----------|----------|
| Oracle database | Query database in natural language | Oracle SQL developer extension in VSCode. MCP integrated within extension. |
| Snowflake database | Query database in natural language | Setup & configure MCP server in Snowflake environment. Upload semantic model to Snowflake defining business entities and relationships. LLM through MCP talks to Semantic layer of Snowflake. Snowflake's Cortex Analayst, Cortex Search will be exposed as MCP tools and use Semantic model to work with LLM for query execution using natural language.|
| Figma Make | Create design mockups | Use Figma Make to provide prompts in natural language to Figma for creating design mockups. Understand the existing designs as well using Figma Make |
| Figma + GitHub Copilot | Create user stories from Figma design | Use official Figma MCP server to fetch Figma design and create user stories with copilot | 
| Jira + GitHub Copilot | Create user stories in Jira | Use official Jira MCP server with Copilot to create user stories in Jira | 

