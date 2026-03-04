// Mock tuition data for Singapore - Extended with popular chains and multi-location support
const tuitionData = [
    // Popular Singapore tuition chains with multiple locations
    {
        id: 1,
        name: "The Learning Point",
        module: "english",
        locations: [
            { region: "central", address: "301 Upper Thomson Road, #03-19/20, Thomson Plaza, Singapore 574408", phone: "+65 6453 3323" },
            { region: "west", address: "1 Jalan Anak Bukit, #02-01D, Bukit Timah Plaza, Singapore 588996", phone: "+65 6465 1101" },
            { region: "east", address: "1 Marine Parade Central, #05-07/08/09, Parkway Centre, Singapore 449408", phone: "+65 6447 0030" },
            { region: "north", address: "681 Punggol Drive, #04-10/11, Oasis Terraces, Singapore 820681", phone: "+65 6244 8050" }
        ],
        timing: "weekday-evening",
        ageGroup: "secondary-1-2",
        price: 95,
        rating: 4.7,
        email: "enquiry@learningpoint.com.sg",
        description: "Established tuition center specializing in English language and literacy programs. Multiple convenient locations."
    },
    {
        id: 2,
        name: "Tree Art Education Centre",
        module: "art",
        locations: [
            { region: "central", address: "290 Orchard Road, #06-16, Paragon, Singapore 238859", phone: "+65 6836 0191" },
            { region: "north", address: "930 Yishun Avenue 2, #03-64, Northpoint City, Singapore 769098", phone: "+65 6481 8369" },
            { region: "east", address: "1 Tampines Walk, #02-35, Our Tampines Hub, Singapore 528523", phone: "+65 6260 4212" }
        ],
        timing: "weekend-morning",
        ageGroup: "primary-1-3",
        price: 60,
        rating: 4.6,
        email: "info@treeart.co",
        description: "Specialized art education with focus on creativity and technique. Convenient branches island-wide."
    },
    {
        id: 3,
        name: "Joyme Art Studio",
        module: "art",
        locations: [
            { region: "west", address: "2 Venture Drive, #02-10, Vision Exchange, Singapore 608526", phone: "+65 9058 2468" }
        ],
        timing: "weekday-afternoon",
        ageGroup: "primary-4-6",
        price: 70,
        rating: 4.5,
        email: "contact@joymeart.com",
        description: "Holistic and progressive arts education for children with focus on creativity development."
    },
    {
        id: 4,
        name: "I Can Read Learning Center",
        module: "english",
        locations: [
            { region: "central", address: "101 Thomson Road, #01-41/42/43, United Square, Singapore 307591", phone: "+65 6397 7134" },
            { region: "east", address: "80 Marine Parade Road, #12-01, Parkway Parade, Singapore 449269", phone: "+65 6440 6115" },
            { region: "west", address: "135 Jurong Gateway Road, #03-339, Singapore 600135", phone: "+65 6569 0712" },
            { region: "north", address: "53 Ang Mo Kio Ave 3, #03-05/06, AMK Hub, Singapore 569933", phone: "+65 6552 5122" }
        ],
        timing: "weekday-morning",
        ageGroup: "primary-1-3",
        price: 65,
        rating: 4.8,
        email: "hello@icanread.asia",
        description: "Phonics-based reading program for young learners. Multiple branches for convenience."
    },
    {
        id: 5,
        name: "Wang Learning Centre (Wang Laoshi)",
        module: "chinese",
        locations: [
            { region: "east", address: "46 East Coast Road, #02-01, EastGate, Singapore 428766", phone: "+65 6441 6606" },
            { region: "central", address: "896 Dunearn Road, #04-10, Link@896, Singapore 589472", phone: "+65 6592 2792" },
            { region: "west", address: "321 Clementi Ave 3, #03-01A, Singapore 129905", phone: "+65 6517 9277" },
            { region: "north", address: "598 Yishun Ring Road, #01-33/34, Wisteria Mall, Singapore 768698", phone: "+65 6282 6606" }
        ],
        timing: "weekend-afternoon",
        ageGroup: "primary-4-6",
        price: 110,
        rating: 4.4,
        email: "admin@wang.edu.sg",
        description: "Renowned Chinese tuition center (Wang Laoshi) specializing in PSLE Chinese preparation and language mastery."
    },
    {
        id: 6,
        name: "Mind Stretcher Education Centre",
        module: "math",
        locations: [
            { region: "central", address: "101 Thomson Road, #04-20/22, United Square, Singapore 307591", phone: "+65 6513 6606" },
            { region: "west", address: "3151 Commonwealth Avenue West, #03-01, Grantral Mall, Singapore 129581", phone: "+65 6684 0060" },
            { region: "east", address: "1 Marine Parade Central, #12-08, Parkway Centre, Singapore 449408", phone: "+65 6636 0010" },
            { region: "north", address: "60 Yishun Avenue 4, #01-08, SAFRA Yishun, Singapore 769027", phone: "+65 6257 0100" }
        ],
        timing: "weekday-evening",
        ageGroup: "primary-4-6",
        price: 125,
        rating: 4.7,
        email: "enquiries@mindstretcher.com",
        description: "Premier education centre with Power Codes methodology for Mathematics. Also offers English and Science."
    },
    {
        id: 7,
        name: "Excel Learning Centre",
        module: "chinese",
        locations: [
            { region: "east", address: "180 Joo Chiat Road, #07-04, Singapore 427449", phone: "+65 6901 2346" },
            { region: "central", address: "30 Havelock Road, #05-03, Singapore 169639", phone: "+65 6901 2347" }
        ],
        timing: "weekend-morning",
        ageGroup: "secondary-1-2",
        price: 80,
        rating: 4.6,
        email: "info@excelchinese.sg",
        description: "Comprehensive Chinese language program with cultural immersion. Multiple centers."
    },
    {
        id: 8,
        name: "Ace Learning Centre",
        module: "coding",
        locations: [
            { region: "west", address: "200 Boon Lay Drive, #06-18, Singapore 640200", phone: "+65 6012 3457" },
            { region: "north", address: "80 Yishun Avenue 2, #03-12, Singapore 768553", phone: "+65 6012 3458" }
        ],
        timing: "weekday-afternoon",
        ageGroup: "primary-4-6",
        price: 85,
        rating: 4.5,
        email: "contact@acecoding.sg",
        description: "Interactive coding classes with project-based learning approach. Convenient locations."
    },
    
    // Additional specialized centers
    {
        id: 9,
        name: "Brilliant Minds Tuition",
        module: "math",
        locations: [
            { region: "central", address: "55 Bras Basah Road, #03-01, Singapore 189559", phone: "+65 6123 4569" }
        ],
        timing: "weekend-morning",
        ageGroup: "primary-4-6",
        price: 75,
        rating: 4.6,
        email: "enrol@brilliantminds.sg",
        description: "Olympiad math training with competition preparation"
    },
    {
        id: 10,
        name: "Creative Writing Hub",
        module: "english",
        locations: [
            { region: "north", address: "80 Ang Mo Kio Avenue 10, #08-12, Singapore 560080", phone: "+65 6234 5670" }
        ],
        timing: "weekday-evening",
        ageGroup: "secondary-3-4",
        price: 90,
        rating: 4.4,
        email: "write@creativewritinghub.sg",
        description: "Advanced creative writing and literature appreciation program"
    },
    {
        id: 11,
        name: "Science Discovery Centre",
        module: "science",
        locations: [
            { region: "east", address: "150 Marine Parade Road, #09-03, Singapore 440150", phone: "+65 6345 6781" }
        ],
        timing: "weekend-afternoon",
        ageGroup: "primary-1-3",
        price: 70,
        rating: 4.7,
        email: "discover@sciencediscovery.sg",
        description: "Fun-filled science experiments and discovery learning"
    },
    {
        id: 12,
        name: "Melody Music Academy",
        module: "music",
        locations: [
            { region: "west", address: "100 Clementi Road, #02-15, Singapore 120100", phone: "+65 6456 7892" }
        ],
        timing: "weekday-morning",
        ageGroup: "primary-4-6",
        price: 65,
        rating: 4.5,
        email: "music@melodyacademy.sg",
        description: "Comprehensive music education with performance opportunities"
    }
];

// DOM Elements
const filterForm = document.getElementById('tuition-filter-form');
const resultsContainer = document.getElementById('results-container');
const noResultsDiv = document.getElementById('no-results');
const resultsCount = document.getElementById('results-count');
const sortBySelect = document.getElementById('sort-by');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application loaded successfully');
    console.log('Total classes:', tuitionData.length);
    console.log('Supporting multiple locations per tuition center');
    console.log('Popular chains with multi-location support: The Learning Point, Tree Art, Joyme, I Can Read, Wang Learning Centre, and more');
    // Display all classes initially
    displayClasses(tuitionData);
    
    // Add event listeners
    filterForm.addEventListener('submit', handleFilterSubmit);
    filterForm.addEventListener('reset', handleFilterReset);
    sortBySelect.addEventListener('change', handleSortChange);
});

// Handle form submission
function handleFilterSubmit(e) {
    e.preventDefault();
    const formData = new FormData(filterForm);
    const filters = {
        location: formData.get('location'),
        timing: formData.get('timing'),
        module: formData.get('module'),
        age: formData.get('age'),
        priceRange: formData.get('price-range')
    };
    
    const filteredClasses = filterClasses(tuitionData, filters);
    displayClasses(filteredClasses);
}

// Handle form reset
function handleFilterReset() {
    setTimeout(() => {
        displayClasses(tuitionData);
    }, 100);
}

// Handle sorting change
function handleSortChange() {
    const currentClasses = getCurrentDisplayedClasses();
    const sortedClasses = sortClasses(currentClasses, sortBySelect.value);
    displayClasses(sortedClasses);
}

// Filter classes based on criteria
function filterClasses(classes, filters) {
    return classes.filter(classItem => {
        // Location filter - now checks if ANY location matches
        if (filters.location) {
            const hasMatchingLocation = classItem.locations.some(location => 
                location.region === filters.location
            );
            if (!hasMatchingLocation) {
                return false;
            }
        }
        
        // Timing filter
        if (filters.timing && classItem.timing !== filters.timing) {
            return false;
        }
        
        // Module filter
        if (filters.module && classItem.module !== filters.module) {
            return false;
        }
        
        // Age group filter
        if (filters.age && classItem.ageGroup !== filters.age) {
            return false;
        }
        
        // Price range filter
        if (filters.priceRange) {
            const [min, max] = getPriceRange(filters.priceRange);
            if (max === Infinity) {
                if (classItem.price < min) return false;
            } else {
                if (classItem.price < min || classItem.price > max) return false;
            }
        }
        
        return true;
    });
}

// Get price range values
function getPriceRange(range) {
    switch(range) {
        case '0-50': return [0, 50];
        case '50-100': return [50, 100];
        case '100-150': return [100, 150];
        case '150+': return [150, Infinity];
        default: return [0, Infinity];
    }
}

// Sort classes
function sortClasses(classes, sortBy) {
    const sorted = [...classes];
    
    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted; // Relevance (original order)
    }
}

// Get current displayed classes from DOM
function getCurrentDisplayedClasses() {
    const classCards = document.querySelectorAll('.class-card');
    const ids = Array.from(classCards).map(card => parseInt(card.dataset.id));
    return tuitionData.filter(item => ids.includes(item.id));
}

// Display classes in the results container
function displayClasses(classes) {
    // Update results count
    resultsCount.textContent = `${classes.length} Classes Found`;
    
    // Show/hide no results message
    if (classes.length === 0) {
        resultsContainer.innerHTML = '';
        noResultsDiv.style.display = 'block';
        return;
    }
    
    noResultsDiv.style.display = 'none';
    
    // Generate HTML for class cards
    const classesHTML = classes.map(classItem => {
        // Generate location information for all locations
        const locationInfo = classItem.locations.map(location => `
            <div class="location-item">
                <div class="info-item">
                    <span>📍 ${getLocationName(location.region)}:</span>
                    <span>${location.address}</span>
                </div>
                <div class="info-item">
                    <span>📞 Phone:</span>
                    <span>${location.phone}</span>
                </div>
            </div>
        `).join('');
        
        return `
            <div class="class-card" data-id="${classItem.id}">
                <h3>${classItem.name}</h3>
                <div class="class-info">
                    <div class="info-item">
                        <span>📚 Module:</span>
                        <span>${getModuleName(classItem.module)}</span>
                    </div>
                    <div class="info-item">
                        <span>⏰ Timing:</span>
                        <span>${getTimingName(classItem.timing)}</span>
                    </div>
                    <div class="info-item">
                        <span>👶 Age Group:</span>
                        <span>${getAgeGroupName(classItem.ageGroup)}</span>
                    </div>
                </div>
                
                <div class="price">$$${classItem.price}/lesson</div>
                
                <div class="rating">
                    <div class="stars">${'★'.repeat(Math.floor(classItem.rating))}${classItem.rating % 1 ? '½' : ''}${'☆'.repeat(5 - Math.ceil(classItem.rating))}</div>
                    <span>${classItem.rating}/5.0</span>
                </div>
                
                <div class="locations-info">
                    <h4>📍 Multiple Locations:</h4>
                    ${locationInfo}
                </div>
                
                <div class="contact-info">
                    <div class="info-item">
                        <span>📧 Email:</span>
                        <span>${classItem.email}</span>
                    </div>
                    <div class="info-item">
                        <span>📝 About:</span>
                        <span>${classItem.description}</span>
                    </div>
                </div>
                
                <div class="actions">
                    ${classItem.locations.map(location => `
                        <a href="tel:${location.phone.replace(/[^0-9+]/g, '')}" class="enroll-btn">📞 Call ${getLocationName(location.region)}</a>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    resultsContainer.innerHTML = classesHTML;
}

// Helper functions for display names
function getModuleName(module) {
    const moduleNames = {
        'math': 'Mathematics',
        'science': 'Science',
        'english': 'English',
        'chinese': 'Chinese',
        'coding': 'Coding/Programming',
        'art': 'Art & Creative',
        'music': 'Music',
        'sports': 'Sports & Physical'
    };
    return moduleNames[module] || module;
}

function getLocationName(location) {
    const locationNames = {
        'central': 'Central Area',
        'north': 'North Region',
        'south': 'South Region',
        'east': 'East Region',
        'west': 'West Region'
    };
    return locationNames[location] || location;
}

function getTimingName(timing) {
    const timingNames = {
        'weekday-morning': 'Weekday Morning',
        'weekday-afternoon': 'Weekday Afternoon',
        'weekday-evening': 'Weekday Evening',
        'weekend-morning': 'Weekend Morning',
        'weekend-afternoon': 'Weekend Afternoon'
    };
    return timingNames[timing] || timing;
}

function getAgeGroupName(ageGroup) {
    const ageGroupNames = {
        'primary-1-3': 'Primary 1-3 (7-9 years)',
        'primary-4-6': 'Primary 4-6 (10-12 years)',
        'secondary-1-2': 'Secondary 1-2 (13-14 years)',
        'secondary-3-4': 'Secondary 3-4 (15-16 years)',
        'jc': 'Junior College (17-18 years)'
    };
    return ageGroupNames[ageGroup] || ageGroup;
}