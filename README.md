# Social Media Feed

This repository contains my solution to the internship challenge for a job application. The challenge was to build a dynamic social media feed with load more functionality using vanilla JavaScript and CSS, without the use of any third-party libraries or frameworks.

## Challenge Details

### Important Notes
- Do not use 3rd party libraries or frameworks.
- The code should be your own and in vanilla JavaScript and your own CSS.
- Do not use JQuery, React, Vue, or any other JS framework.
- Do not use Bootstrap, Material IO, or any other CSS framework.

### Description
- **JSON Data**: The repository includes a file named `data.json` in the same folder as the code. This file contains social media posts with details such as caption, name, date, and image. The information is fetched directly from the file using JavaScript.
- **Feed Layout**: An attractive and responsive social media feed is created using HTML and CSS. The layout is designed to be consistent across different devices.
- **Load More Functionality**: Users can see more posts by clicking the "Load More" button. Initially, four posts are displayed, and clicking the button reveals four additional posts. This process continues until all the posts are loaded, at which point the "Load More" button is hidden.
- **Image Lightbox**: Clicking on an image within a post enlarges it using a lightbox. This feature allows users to view the image in more detail without leaving the feed.
- **Theme Switching**: The user interface design includes a light/dark mode feature. A toggle is placed in the header, allowing users to switch between modes based on their preferences. The theme affects all visual elements, including text, backgrounds, and images, ensuring a consistent viewing experience.

### Requirements
- HTML and CSS are used to structure and style the social media feed.
- An attractive and user-friendly interface is designed for the social media feed, providing a smooth and engaging user experience.
- The design is responsive and adapts well to different devices and screen sizes.
- JavaScript is implemented to integrate the data from the JSON file, fetch the data, and dynamically display it in the feed.
- Performance and loading speed optimizations are implemented for the feed.
- Clean and maintainable code is written, following industry best practices.

## Live Preview

You can view the live preview of the project [here](https://markodavkovski.github.io/Intership_Challenge/).

## Getting Started

To run the social media feed locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-media-feed.git
   ```

2. Open the project folder:

   ```bash
   cd social-media-feed
   ```

3. Open the `index.html` file in your web browser.

## Project Structure

The repository has the following structure:

```
├── index.html
├── reset.css
├── style.css 
├── index.js
│   
└── data.json
```

- `index.html`: The main HTML file that renders the social media feed.
- `reset.css`: The CSS file resetting all the pre-defined styles on the components.
- `style.css`: The CSS file containing the styles for the social media feed.
- `index.js`: The JavaScript file responsible for fetching and displaying the data from `data.json`.
- `data.json`: The JSON file containing the social media posts data.

## Contributing

Contributions to this project are not accepted as it is a completed challenge for a job application.

## License

This project is licensed under the [MIT License](LICENSE).
