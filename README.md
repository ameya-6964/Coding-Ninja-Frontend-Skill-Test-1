# Stopwatch App

![Screenshot 2023-09-25 191702](https://github.com/ameya-6964/Coding-Ninja-Frontend-Skill-Test-1/assets/104457295/87b16479-dfb2-4b1a-b483-82b85773efe0)

This is a simple stopwatch web application created using HTML, CSS, and JavaScript. It allows users to start, stop, and reset the stopwatch timer.

## Rough Diagrammatic Representation

![rough skelton of app](https://github.com/ameya-6964/Coding-Ninja-Frontend-Skill-Test-1/assets/104457295/6419ecc8-1fde-42fe-938a-ea58a84f9797)

## Rough Diagrammatic Representation Of Functions

![Functions](https://github.com/ameya-6964/Coding-Ninja-Frontend-Skill-Test-1/assets/104457295/cd189b29-9f4d-4608-bc16-8d16b6b26374)




## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Third Party Services](#third-party-services)
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [Getting Started](#getting-started)

## Demo

You can try out the live demo of the stopwatch app here: [Stopwatch App Demo](https://ameya-belvalkar-frontend-skill-test-1.netlify.app/)

## Features

- Start, stop, and reset the stopwatch timer.
- Accurate timekeeping with millisecond.
- Simple and intuitive user interface.

## Third Party Services

- Google Font Used :- Orbitron 
- Icons :- Font Awesome Icons For Play Stop And Reset

- # HTML

The HTML file (`index.html`) provides the basic page structure and DOM elements:

- The `<head>` section contains meta tags, the title, and links to CSS and font files.
- The `<body>` section has a container `<div>` with the following elements:
  - 4 `<div>` elements for displaying hours, minutes, seconds, and milliseconds.
- Each time display `<div>` includes a label `<span>` (e.g., 'Hours') and a digit `<span>`.
- A `<div>` for control buttons with 3 buttons having IDs of `start`, `stop`, and `reset`.

This HTML structure sets up the necessary DOM elements that the CSS and JavaScript interact with.

## CSS

The CSS file (`styles.css`) handles all visual styling and layout:

- Imported Google fonts are applied to the time displays for improved typography.
- Default margins and padding are reset for cross-browser consistency.
- The `<body>` and container have dark gradient backgrounds to enhance the visual appeal.
- Time displays use large fonts and are positioned for clear visibility.
- Control buttons have appropriate padding, fonts, colors, and hover effects for user interaction.
- The button container is centered with spacing to create an organized layout.
- Flexbox is used for overall positioning and responsiveness, ensuring the app looks good on various screen sizes.

## JavaScript

The JavaScript file (`script.js`) provides interactivity to the timer:

- DOM elements are selected and stored in variables to interact with them programmatically.
- Event listeners are attached to each button to respond to user actions.
- Time values are stored and incremented in variables to keep track of the timer.
- A flag is used to track whether the timer is running or not.
- When the "Start" button is clicked, it disables and starts the timer with the `startTimer` function.
- The "Stop" button enables the "Start" button and pauses the timer with the `stopTimer` function.
- The "Reset" button resets the timer to zero, updates the DOM, and disables it with the `resetTimer` function.


## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/stopwatch-app.git
