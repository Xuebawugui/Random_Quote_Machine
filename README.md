# Random Quote Machine

A modern, stylish Random Quote Machine built with React. Get inspired by a wide variety of quotes about life, success, perseverance, growth, innovation, self, love, and wisdom. Each time you click "New quote", both the quote and the color theme change for a fresh experience.

## Features
- Randomly displays a quote and its author
- Color theme changes with each new quote
- Tweet the current quote with one click
- Responsive and modern UI
- Passes all [freeCodeCamp Random Quote Machine tests](https://freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine)

## Demo
![screenshot](screenshot.png)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/random-quote-machine.git
   cd random-quote-machine
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
```bash
npm start
```
This will start the development server at [http://localhost:3000](http://localhost:3000).

### Running Tests
The project includes the freeCodeCamp test suite. After starting the app, click the green "Test Suite" button in the bottom right, select **Random Quote Machine**, and click **Run Tests**.

## Project Structure
```
random-quote-machine/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── QuoteBox.js
│   ├── quotes.js
│   ├── styles.css
│   └── index.js
├── package.json
└── README.md
```

## Tech Stack
- React
- JavaScript (ES6+)
- CSS

## Notes
- **Do not upload `node_modules` to GitHub.** It is excluded by default via `.gitignore`.
- All quotes are stored locally in `src/quotes.js`.

## License
MIT

## Acknowledgements
- [freeCodeCamp](https://freecodecamp.org/) for the project inspiration and test suite. 