# Web Development Project 2 - *Vietnamese Food Flashcards*

Submitted by: **Chau Cao**

This web app: **is a sensory flashcard deck designed to test your knowledge of Vietnamese cuisine. It presents users with images of popular dishes, allowing them to flip the card to reveal the name, region, ingredients, and serving tips. The app tracks progress and offers a visual celebration upon mastering the full deck**

Time spent: **17** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Categories used:
    - Soup (Red)
    - Sandwich (Orange)
    - Snack (Green)
    - Main (Blue)
    - Dessert (Berry)
    - Drink (Coffee/Brown)

The following **additional** features are implemented:

* [x] Confetti Celebration: A confetti animation triggers when the user has viewed all unique cards in the deck.
* [x] History Navigation: Users can click a "Previous" button to revisit the last card they saw.
* [x] Keyboard Shortcuts: Users can use the Left and Right arrow keys to navigate between cards.
* [x] Progress Tracking: A visual progress bar and a "Unique Seen" counter track how many distinct cards the user has encountered.
* [x] 3D Animation: Smooth CSS transform animations for card flipping.

## Video Walkthrough

Here's a walkthrough of implemented required features:
![Chau Cao  Vietnamese Food Flashcards Website Walkthrough](https://github.com/user-attachments/assets/fbff9343-7e80-43c7-a0d5-74bb2501244b)
<img src="https://i.imgur.com/ORw95gJ.gif" title='Video Walkthrough' width='' alt='Video Walkthrough'/>

GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

- Implementing the "Previous" button was tricky because I had to maintain a separate array of indices (history) alongside the currentIndex to ensure the user could go back to the exact card they just saw, rather than a random one.

- Unique Card Tracking: I had to use a JavaScript Set instead of a simple counter to track progress. This ensures that seeing the same random card twice doesn't artificially inflate the user's progress score.

- CSS 3D Transforms: Getting the backface-visibility and rotateY properties to work correctly so the text wouldn't appear mirrored required careful CSS structuring.

## License

    Copyright [2026] [Chau Cao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
