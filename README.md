# Challenge #1: Big Bang

## Overview
This script generates an array of numbers from 1 to 100, replacing:
- Numbers divisible by **3** with `"BIG"`
- Numbers divisible by **5** with `"BANG"`
- Numbers divisible by **both 3 and 5** with `"BIGBANG"`

The result is saved as `output.json` in a **single-line JSON format**.

## Prerequisites
Ensure you have **Node.js** installed on your system.

## Installation & Execution
Follow these steps to run the script:

### 1. Clone the Repository
For both Windows (Git Bash, Command Prompt, or PowerShell) and Mac/Linux (Terminal):
```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Run the Script
- On **Windows (Command Prompt or PowerShell)**:
  ```sh
  node bigbang.js
  ```

- On **Mac/Linux (Terminal)**:
  ```sh
  node bigbang.js
  ```

### 3. Check the Output
- On **Windows (Command Prompt or PowerShell)**:
  ```sh
  type output.json
  ```
- On **Mac/Linux (Terminal)**:
  ```sh
  cat output.json
  ```

### Expected Output Format
The JSON file contains:
```json
["1","2","BIG","4","BANG","BIG","7","8","BIG","BANG","11","BIG","13","14","BIGBANG",...,"100"]
```

## Repository Structure
```
|-- bigbang.js  # The script file
|-- output.json # The generated output file
|-- README.md   # Instructions
```

## Contribution
Feel free to fork the repo, make improvements, and submit a pull request.

## License
This project is open-source and available under the MIT License.

