
# Rick and Morty Location Explorer

This is a React web application for exploring locations and residents from the [Rick and Morty API](https://rickandmortyapi.com/).

## Features

- **Search locations** with an autocomplete search bar
- **View location details** (name, type, dimension, number of residents)
- **Paginated resident list** for each location
- **Resident details** (name, status, origin, episode count, and image)
- **Modern, responsive UI**

## Demo

![App Screenshot](public/logo192.png)

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Start the development server:**
	```bash
	npm start
	```
	The app will open at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/App.js` — Main app logic and state
- `src/components/SearchBox.js` — Autocomplete search bar
- `src/components/LocationContainer.js` & `LocationInfo.js` — Location display
- `src/components/ResidentContainer.js` & `ResidentInfo.js` — Resident display
- `src/App.css` — App styling

## API

This app uses the [Rick and Morty API](https://rickandmortyapi.com/documentation) to fetch location and character data.

## License

This project is for educational purposes and is not affiliated with Rick and Morty or Adult Swim.
