# Typescript React Counter

This project is a simple React application built with Typescript. It demonstrates a counter component with global state management and toast notifications.

## Features

- **Counter Component**: A button that increments the counter by 1 and displays the current value.
- **Global State Management**: Uses `CounterContext` and `CounterProvider` to manage the counter state globally.
- **Custom Hook**: `useCounter()` hook to expose the count and increment function.
- **Toast Notifications**: Displays a toast notification with the updated counter value using Chakra UI.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FaisalFasi/yendou-assignment.git
   ```

Navigate to the project directory:
cd yendou-assignment

### Install dependencies:

npm install

### Run the application:

npm start


Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

Technologies Used:
React
Typescript
Chakra UI (for toast notifications)

Create React App (for bootstrapping the project)

Folder Structure
src/

├── components/ # Contains the Counter component

├── context/ # Contains the CounterContext and CounterProvider and Contains the useCounter custom hook

├── App.tsx # Main application component

├── index.tsx # Entry point of the application

└── ... # Other configuration files

How It Works
The Counter component uses the useCounter hook to access the current count and the increment function.

When the "+1" button is clicked, the increment function updates the global counter state.

A toast notification is displayed using Chakra UI, showing the updated counter value.

Contributing
If you'd like to contribute, please fork the repository and create a pull request. You can also open an issue for any bugs or feature requests.
Ω
