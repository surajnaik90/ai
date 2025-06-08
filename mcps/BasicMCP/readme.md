# Basic MCP Server

This project provides a minimal GitHub MCP (Model Context Protocol) server.

## Getting Started

Before you begin, ensure you have the following prerequisites:

- **Docker**: Install Docker from [https://www.docker.com/get-started](https://www.docker.com/get-started).
- **Node.js and npm**: Download and install from [https://nodejs.org/](https://nodejs.org/).
- **GitHub Personal Access Token (PAT)**: Create a token by following the instructions at [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

Once you have these prerequisites, follow the steps below to set up the project.

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/BasicMCP.git
    cd BasicMCP
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the server:**
    ```sh
    npm start
    ```

## Usage

- Access the MCP server at `http://localhost:PORT` (replace `PORT` with your configured port).
- Use the web interface or API to manage your Minecraft server.

## Configuration

Edit `config.json` to set server options such as port, authentication, and Minecraft server path.

## License

MIT