# Cursor AI

Cursor is an AI powered IDE. They have their own Composer model 1.5

## Key points

1. Cursor has it's own agentic model called **Composer**.
2. Pricing based on 2 usage pools: **Auto + Composer and API**
3. Ability to summarize **.mp4 recording** using Open AI whisper model & ffmpeg
4. Cursor has this semantic indexing capability which is unique.   

## Features

1. Using multiple models    
2. **Debug mode** for fine-grained root cause analysis. Targeted fixes.   
3. **Cursor rules** to maintain the consistency in naming conventions etc.    
4. **Cursor skills** combining natural language instructions and scripts for the agent to do certain tasks.   


## Pricing

### Individual Plans

| Plan | Pricing | Key aspects |
| --- | --- | --- |
| Hobby (Free) | Free | Limited agent requests and tab completions |
| Pro | $20 / month | Core paid plan for regular individual development workflows. |
| Pro+ | $60 / month| Higher individual tier with more capacity and advanced usage support. |
| Ultra | $200 / month | Top individual tier for intensive usage and maximum access. |

### Business Plans

| Plan | Pricing | Key aspects |
| --- | --- | --- |
| Teams | Paid (team plan) | Collaboration-focused plan for small to mid-sized teams with shared workflows. |
| Enterprise | Custom / Contact sales | Organization-wide plan with advanced governance, security, and scale support. |

## What can we do with Cursor?

1. Understand the codebase - Entry point to the application, key functions etc.   
2. Plan and build features   
3. Reproduce the issues, narrow the root cause, verify fixes.   
4. Review the changes   
5. Use rules, skills, prompts that match how your team works.
6. Connect your workflow with GitHub, GitLab etc
7. **Cursor can understand .mp4 file and generate a summary of the recording**

## Models pricing [prices / 1 million tokens] | As on March 2026

Pricing is based on 2 usage pools:
1. Auto + Compose model - Cursor auto chooses models based on the prompt given.
2. API - Billing happen based on the model's API rate card.   


| Model | Input tokens | Output tokens |
| --- | --- | --- | 
| Claude Sonnet 4.6 | $3 | $15 |
| Gemini 3 Pro | $2 | $12 |
| GPT 5.4 | $2.5 | $15 |
| Composer 1.5 | $3.5 | $17.5 |

## Integrations

It has integrations with Slack, GitHub, GitLab, Notion, Linear, Datadog etc