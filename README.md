# BhookhApp

A simple React Native application that simulates a food ordering experience, focusing on clean code, API integration, and modular component design.

## Features

1. **Login Screen**:
   - Accepts username and password inputs.
   - Performs basic validation.
   - Simulates authentication using mock user data.
   - Navigates to the Home Screen on successful login.

2. **Home Screen**:
   - Displays a personalized greeting.
   - Fetches and displays a list of recipes from the API: `https://dummyjson.com/recipes`.
   - Shows recipe titles, descriptions, and images (uses a placeholder if the image is not provided).
   - Includes a refresh button to re-fetch data.
   - Displays a loading indicator while fetching data.
   - Handles errors gracefully.

## Prerequisites

Ensure the following tools are installed:

- **Node.js** (v16.x or later): [Download Node.js](https://nodejs.org/)
- **React Native CLI**: Install using `npm install -g react-native-cli`
- **Android Studio** (for Android development) or Xcode (for iOS development).

## Setup Instructions

1. Clone the repository or download the project zip file.
2. Navigate to the project directory:
   ```bash
   cd BhookhApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Metro bundler:
   ```bash
   npm start
   ```
5. Run the application:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS (requires macOS):
     ```bash
     npm run ios
     ```

## Project Structure

```
BhookhApp/
├── App.js                # Main application entry point
├── src/
│   ├── LoginScreen.js    # Login screen component
│   ├── HomeScreen.js     # Home screen component
│   └── styles/           # Folder for shared styles (optional)
├── assets/               # Placeholder for images or other assets
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## API Reference

- **Recipes API**: `https://dummyjson.com/recipes`
  - Fetches a list of recipes with attributes like title, description, and images.

## Challenges

- **Handling API Errors**: Gracefully displaying user-friendly error messages for network or API failures.
- **Placeholder Images**: Ensuring consistent UI for recipes without images by using a default placeholder image.

## Future Enhancements

- Add pagination for recipes.
- Implement advanced authentication and user session management.
- Include state management using Redux or Zustand.

## Author

Kuldeep Singh
