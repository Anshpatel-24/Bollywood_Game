# Bollywood Movie Guessing Game

A web-based interactive Bollywood Movie Guessing Game built with HTML, CSS, and JavaScript.

## Features

- **Random Movie Generation :** Generate a random Bollywood movie for each round from a CSV file.
- **Manual Movie Entry :** Enter your own movie to play with custom choices.
- **Hero & Heroine Guessing :** Guess the hero and heroine for the selected movie.
- **Autocomplete Suggestions :** Real-time suggestions for movie, hero, and heroine names as you type.
- **Hint System :** Get hints for genre, release year, and a summary (summary shown after several failed attempts).
- **Pass Movie :** If stuck, reveal the answer by passing the movie (with a score penalty).
- **Score System :**
  - +10 for correct movie guess, -2 for wrong movie guess.
  - +5 for correct hero/heroine guess (only once per unique correct guess), -1 for wrong guess.
  - -5 for using the "Pass Movie" feature.
  - Score is stored in localStorage and persists across sessions.
- **Reset Score :** Button to reset your score at any time.
- **Animated Feedback :** Typewriter and popup animations for results and feedback.
- **Responsive UI :** Works well on both desktop and mobile devices.
- **CSV Data Management :** Movie, hero, and heroine data is loaded from a CSV file for easy updates.

## How to Play

1. Start by generating a random movie or entering your own.
2. Guess the hero and heroine names using the input fields (with suggestions).
3. Guess the movie name.
4. Use the hint button if you get stuck.
5. If you can't guess, use the "Pass Movie" button to reveal the answer (with a score penalty).
6. Your score is displayed at the top and can be reset anytime.

## Technologies Used

- HTML, CSS, JavaScript
- [PapaParse](https://www.papaparse.com/) for CSV parsing

## Author

Game Created By : Ansh Patel 😇
