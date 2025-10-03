# Word Search Generator

A modern, responsive web application for creating custom word search puzzles with advanced formatting options and image export functionality.

## Features

### Core Functionality
- **Custom Word Input**: Enter words one per line to include in your puzzle
- **Backwards Words**: Optional setting to allow words to be placed right-to-left
- **Smart Word Placement**: Intelligent algorithm places words horizontally, vertically, and diagonally
- **Random Letter Fill**: Empty spaces are filled with random letters

### Formatting Options
- **Font Selection**: Choose from multiple fonts including Times New Roman, Arial, Helvetica, Georgia, Courier New, and Verdana
- **Letter Size**: Adjustable from 12px to 32px
- **Letter Spacing**: Customizable spacing from 0px to 10px
- **Grid Size**: Flexible grid size from 10x10 to 30x30

### User Experience
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Real-time Preview**: See changes instantly as you adjust settings
- **Sample Words**: Quick-load button with example words to get started
- **Loading States**: Visual feedback during puzzle generation
- **Input Validation**: Smart validation prevents common errors

### Export Features
- **High-Quality PNG Export**: Download puzzles as high-resolution images
- **Print-Ready Format**: Exported images are optimized for printing
- **Professional Layout**: Clean, organized layout with title and word list

## Technology Stack

- **Astro**: Modern static site generator for optimal performance
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **TypeScript**: Type-safe JavaScript for better development experience
- **Canvas API**: Native browser API for image generation and export

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Usage

1. **Enter Words**: Type your words in the text area, one word per line
2. **Configure Settings**: 
   - Check "Allow backwards words" if desired
   - Select your preferred font family
   - Adjust letter size and spacing using the sliders
   - Set grid size (larger grids can accommodate more/longer words)
3. **Generate**: Click "Generate Puzzle" to create your word search
4. **Export**: Click "Export as Image" to download a PNG file

### Tips for Best Results

- **Grid Size**: Choose a grid size appropriate for your word count and lengths
- **Word Length**: Ensure words fit within your chosen grid size
- **Word Count**: The app will warn you if you have too many words for the grid size
- **Font Choice**: Times New Roman and Georgia work well for printed puzzles
- **Letter Spacing**: Increase spacing for easier reading, especially for younger users

## Performance Features

- **Debounced Updates**: Smooth slider interactions without lag
- **Efficient Rendering**: Optimized DOM updates for large grids
- **Memory Management**: Proper cleanup prevents memory leaks
- **Progressive Enhancement**: Works even with JavaScript disabled (basic functionality)

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

This project uses modern web standards and follows best practices for:
- Accessibility (WCAG 2.1 guidelines)
- Performance (Core Web Vitals optimization)
- SEO (semantic HTML and meta tags)
- Security (no external dependencies for core functionality)

## License

This project is open source and available under the MIT License.