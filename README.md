# Singapore Enrichment Tuition Finder

A responsive web application that helps parents and students find suitable enrichment classes in Singapore based on various filters.

## Features

- **Comprehensive Filtering**: Filter classes by location, timing, subject module, student age group, and price range
- **Real-time Search**: Instant results as you apply filters
- **Sorting Options**: Sort results by relevance, price (low to high/high to low), or rating
- **Detailed Information**: Each class listing includes:
  - Class name and description
  - Location and timing
  - Price per lesson
  - Rating and reviews
  - Contact information (address, phone, email)
  - Direct call functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Mock Data**: Pre-populated with realistic Singapore tuition centers

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid layouts)
- Vanilla JavaScript (ES6+)
- Responsive design principles

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (optional but recommended)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` directly in your browser, OR
4. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Usage

1. **Apply Filters**: Use the dropdown menus to filter classes by:
   - **Location**: Central, North, South, East, or West regions
   - **Timing**: Weekday/weekend morning, afternoon, or evening slots
   - **Module**: Mathematics, Science, English, Chinese, Coding, Art, Music, or Sports
   - **Age Group**: Primary 1-3, Primary 4-6, Secondary 1-2, Secondary 3-4, or JC
   - **Price Range**: Various budget options from $0-50 to $150+

2. **Search**: Click "Search Classes" to apply filters
3. **Sort Results**: Use the sort dropdown to organize results
4. **View Details**: Each card shows comprehensive information about the class
5. **Contact**: Click "Contact Now" to call the tuition center directly

## Project Structure

```
singapore-tuition-finder/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality and data
└── README.md           # This documentation
```

## Data Model

The application includes mock data for 12 major tuition chains across Singapore, featuring:

**Multi-Location Support**: Each tuition center can have multiple branches across different regions, reflecting real-world operations:
- **The Learning Point**: 3 locations (Central, West, East)
- **Tree Art Education Centre**: 3 locations (East, Central, North)
- **Joyme Learning Centre**: 2 locations (West, South)
- **I Can Read Learning Center**: 3 locations (Central, East, West)
- **Wang Learning Centre**: 2 locations (North, Central)
- **Mind Stretcher Education Centre**: 3 locations (South, West, East)
- **Excel Learning Centre**: 2 locations (East, Central)
- **Ace Learning Centre**: 2 locations (West, North)

**Subject Specializations**:
- Mathematics (Olympiad training, exam preparation)
- Science (Hands-on experiments, critical thinking)
- English (Phonics, creative writing, literature)
- Chinese (Hanyu Pinyin, character writing)
- Art & Creative (Drawing, painting, crafts)
- Music (Piano, violin, comprehensive programs)
- Coding (Python, Scratch, web development)
- Sports & Physical education

Each center includes:
- Unique ID
- Center name
- Multiple locations with region, address, and phone
- Subject specialization
- Class timing
- Target age group
- Pricing information
- Rating (out of 5)
- Email contact
- Detailed description of services

## Customization

To add more tuition centers or modify existing data:
1. Edit the `tuitionData` array in `script.js`
2. Follow the existing data structure
3. Refresh the page to see changes

## Responsive Features

- Mobile-first design approach
- Flexible grid layout that adapts to screen size
- Touch-friendly controls
- Optimized typography for all devices
- Collapsible filter sections on smaller screens

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Future Enhancements

Potential improvements that could be added:
- User reviews and ratings system
- Map integration showing exact locations
- Booking/scheduling functionality
- Favorite classes feature
- Real-time data from actual tuition providers
- Advanced search with keywords
- Comparison tool for multiple classes

## License

This project is for educational purposes and demonstration only.

---

Built with ❤️ for Singapore families seeking quality enrichment education.