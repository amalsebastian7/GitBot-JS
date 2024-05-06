```markdown
# GitHub Commit Bot

## Overview
The GitHub Commit Bot is a Node.js script designed to automate the process of making commits to a GitHub repository. It uses the `fs`, `util`, `child_process`, and `crypto` modules to create a series of commits with random dates within the past year.

## Features
- **Automated Commits**: Generates commits automatically with random dates.
- **Promise-based Workflow**: Utilizes `promisify` to handle asynchronous file system operations and child process executions.
- **Error Handling**: Implements try-catch blocks to manage errors during the commit process.

## How It Works
1. **Initialization**: The script defines asynchronous versions of `writeFile` and `exec` using `promisify`.
2. **Commit Function**: The `makeCommit` function is a recursive asynchronous function that creates commits until the specified number of commits (`n`) is reached.
3. **Random Date Generation**: For each commit, it generates a random date within the last year.
4. **Data File Creation**: It writes a JSON file with the generated date as content.
5. **Git Operations**: The script stages the file, commits it with the generated date, and pushes the commits to the repository once all commits are made.

## Usage
To use the GitHub Commit Bot, follow these steps:
1. Ensure Node.js is installed on your system.
2. Place the script in the root directory of your local Git repository.
3. Run the script with the desired number of commits: `node script.js 1000`.

## Error Handling
If an error occurs during the commit process, the script logs the error to the console and halts execution.

## Limitations
- The script assumes the repository is already initialized with Git.
- It requires network access to push commits to the remote repository.
- The random date generation is limited to the past year.

## Conclusion
The GitHub Commit Bot is a useful tool for developers looking to automate commit history generation for testing or other purposes. Its promise-based approach ensures a smooth and efficient operation.
```
This documentation provides a clear overview of the bot's functionality, how it works, and how to use it. It can be included in your GitHub repository's README file to help users understand and utilize the bot effectively.