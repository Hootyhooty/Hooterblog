# Resume Portfolio - React Application

A modern personal portfolio website converted from Bootstrap HTML to React.

## Features

- **React Router** for client-side routing
- **Bootstrap 5** for styling
- **Responsive design** that works on all devices
- **Multiple pages**: Home, Resume, Projects, Contact
- **Modern UI** with gradient effects and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/      # Reusable components (Navigation, Footer)
│   ├── pages/           # Page components (Home, Resume, Projects, Contact)
│   ├── utils/           # Utility files
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── assets/              # Static assets (images, favicon)
├── css/                 # Bootstrap styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React 18** - UI library
- **React Router 6** - Routing
- **Vite** - Build tool
- **Bootstrap 5** - CSS framework
- **Bootstrap Icons** - Icon library

## Customization

- Update personal information in the respective page components
- Modify styles in `css/styles.css`
- Add/remove pages by updating routes in `App.jsx`
- Update navigation links in `src/components/Navigation.jsx`

## License

This project is open source and available under the MIT License.

