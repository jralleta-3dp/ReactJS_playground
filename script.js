// Science theme color definitions
const SCIENCE_THEMES = {
    "Impact History": {
        color: "#92c49f",
        name: "Impact History"
    },
    "Volcanic History": {
        color: "#4aa55f", 
        name: "Volcanism"
    },
    "Color Provinces/Albedo": {
        color: "#c47b2c",
        name: "Color/Albedo"
    },
    "Photometric Obsercations": {
        color: "#f1ba38",
        name: "Basin Formation"
    },
    "Tectonics": {
        color: "#307442",
        name: "Ring Structures"
    },
    "Landing Sites": {
        color: "#8eccf1",
        name: "Thermal Properties"
    },
    "Dust/Exosphere/Deep Space": {
        color: "#de79a5",
        name: "Space Weathering"
    },
    "Earth Observations": {
        color: "#a5597d",
        name: "Crustal Evolution"
    },
    "Impact Flashes": {
        color: "#e59fc1",
        name: "Polar Processes"
    },
    "Limb and Terminator": {
        color: "#46a3e7",
        name: "Crustal Evolution"
    },
};

// Helper function to get theme color
function getThemeColor(themeName) {
    return SCIENCE_THEMES[themeName]?.color || "#6c757d"; // Default gray if theme not found
}

// Synthetic target data for prototyping
const targetsData = [
    {        name: "Buys-Ballot Crater",
        phoneticName: "BUY-z BAL-ot",
        centerCoordinates: "20.86° 174.82°",
        priority: "Normal",
        scienceThemes: ["Impact History", "Volcanic History", "Color Provinces/Albedo"],
          images: {
            lensComparison: [
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_50mm_enc_start.jpg",
                    caption: "Naked Eye - Start"
                },
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_50mm_closest_approach.jpg",
                    caption: "Naked Eye - Closest Approach"
                },
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_50mm_enc_end.jpg",
                    caption: "Naked Eye - End"
                }
                
            ],
            gallery: [
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_180mm_enc_start.jpg", 
                    caption: "180mm - Start"
                },
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_180mm_closest_approach.jpg",
                    caption: "180mm - Closest Approach"
                },
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_180mm_enc_end.jpg", 
                    caption: "180mm - End"
                },
                
            ],
            roller: [
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_400mm_enc_start.jpg", 
                    caption: "400mm - Start"
                },
                {
                    src: `Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_400mm_closest_approach.jpg`,
                    caption: "400mm - Closest Approach"
                },
                {
                    src: "Encounters Guide/a2_enc_12Jan202610H30M-13H30M_all_labels/BuysBallotCrater/BuysBallotCrater_400mm_enc_end.jpg", 
                    caption: "400mm - End"
                },
                
            ],
        },
        
        encounterTiming: {
            start: "10:30:00 GMT",
            closestApproach: "12:00:47 GMT", 
            end: "13:30:00 GMT",
            duration: "180.0 min"
        },
        
        sunElevation: {
            start: "9.73°",
            closestApproach: "10.44°",
            end: "11.14°"
        },
        
        phaseAngle: {
            start: "25.91°",
            closestApproach: "74.82°", 
            end: "123.16°"
        },
        
        emissionAngle: {
            start: "58.54°",
            closestApproach: "28.91°",
            end: "50.65°"
        },
        
        distance: {
            start: "9621 km (5978 mi)",
            closestApproach: "7168 km (4454 mi)",
            end: "9546 km (5932 mi)"
        },
        
        optimalConditions: {
            minPhaseAngle: "25.91°",
            timeOfMinPhase: "10:30:00 GMT",
            idealSunElevation: "70° - 90°",
            morphology: "0° - 10°"
        }    },
    {
        name: "Test Target 2",
        phoneticName: "tsee-ol-KOV-skee",
        centerCoordinates: "20.4°S 128.9°E",
        priority: "High",
        scienceThemes: ["Impact History", "Volcanism", "Composition"],
        
        images: {
            hero: "https://via.placeholder.com/600x400/2c3e50/ffffff?text=Tsiolkovsky+Crater+Hero",
            lensComparison: [
                {
                    type: "naked-eye",
                    src: "https://via.placeholder.com/200x150/34495e/ffffff?text=Naked+Eye",
                    caption: "Naked Eye View"
                },
                {
                    type: "180mm",
                    src: "https://via.placeholder.com/200x150/27ae60/ffffff?text=180mm",
                    caption: "180mm Lens"
                },
                {
                    type: "400mm",
                    src: "https://via.placeholder.com/200x150/e74c3c/ffffff?text=400mm",
                    caption: "400mm Lens"
                }
            ],
            gallery: [
                {
                    src: "https://via.placeholder.com/300x200/3498db/ffffff?text=Mare+Fill",
                    caption: "Dark mare material filling"
                },
                {
                    src: "https://via.placeholder.com/300x200/e67e22/ffffff?text=Central+Peak",
                    caption: "Central peak detail"
                }
            ],
            roller:[

            ]
        },
        
        encounterTiming: {
            start: "09:15:00 GMT",
            closestApproach: "11:23:15 GMT",
            end: "13:45:00 GMT",
            duration: "270.0 min"
        },
        
        sunElevation: {
            start: "12.5°",
            closestApproach: "15.2°",
            end: "18.7°"
        },
        
        phaseAngle: {
            start: "32.1°",
            closestApproach: "65.4°",
            end: "98.2°"
        },
        
        emissionAngle: {
            start: "45.2°",
            closestApproach: "22.8°",
            end: "67.1°"
        },
        
        distance: {
            start: "8750 km (5436 mi)",
            closestApproach: "6200 km (3852 mi)",
            end: "9100 km (5654 mi)"
        },
        
        optimalConditions: {
            minPhaseAngle: "32.1°",
            timeOfMinPhase: "09:15:00 GMT",
            idealSunElevation: "65° - 85°",
            morphology: "5° - 15°"
        }
    },    {
        name: "Test Target 3",
        phoneticName: "MAH-ray or-ee-en-TAH-lay",
        centerCoordinates: "19.4°S 92.8°W",
        priority: "Very High",
        scienceThemes: ["Impact History", "Basin Formation", "Ring Structures"],
        
        encounterTiming: {
            start: "14:20:00 GMT",
            closestApproach: "16:45:30 GMT",
            end: "19:10:00 GMT",
            duration: "290.0 min"
        },
        
        sunElevation: {
            start: "8.2°",
            closestApproach: "12.9°",
            end: "17.4°"
        },
        
        phaseAngle: {
            start: "28.7°",
            closestApproach: "58.3°",
            end: "87.9°"
        },
        
        emissionAngle: {
            start: "52.1°",
            closestApproach: "31.5°",
            end: "44.8°"
        },
        
        distance: {
            start: "10200 km (6340 mi)",
            closestApproach: "7890 km (4904 mi)",
            end: "9750 km (6058 mi)"
        },
        
        optimalConditions: {
            minPhaseAngle: "28.7°",            timeOfMinPhase: "14:20:00 GMT",
            idealSunElevation: "75° - 90°",
            morphology: "0° - 5°"
        }
    }
];

// Current state
let currentTargets = [...targetsData];
let selectedTarget = null;

// DOM elements
const targetList = document.getElementById('targetList');
const targetDetail = document.getElementById('targetDetail');
const imagePanel = document.getElementById('imagePanel');
const sortBy = document.getElementById('sortBy');
const searchBox = document.getElementById('searchBox');

// Initialize the application
function init() {
    renderTargetList();
    setupEventListeners();
    setupModalEventListeners(); // Setup modal listeners
}

// Render the target list
function renderTargetList() {
    targetList.innerHTML = currentTargets.map(target => 
        `<li data-target="${target.name}" class="${selectedTarget === target.name ? 'selected' : ''}">
            ${target.name}
        </li>`
    ).join('');
}

// Show target details
function showTargetDetail(targetName) {
    const target = targetsData.find(t => t.name === targetName);
    
    if (!target) return;
      selectedTarget = targetName;
    renderTargetList(); // Re-render to update selection
      targetDetail.innerHTML = `
        <div class="target-header">
            <h1 class="target-title">${target.name}</h1>
            <p class="target-subtitle">${target.phoneticName} • Priority: ${target.priority}</p>
            <p class="coordinates">${target.centerCoordinates}</p>
        </div>
        
        <div class="science-info">
            <h3>Science Themes</h3>
            <div class="theme-tags">
                ${target.scienceThemes.map(theme => `<span class="theme-tag" style="background-color: ${getThemeColor(theme)}">${theme}</span>`).join('')}
            </div>
        </div>
        
        <div class="encounter-timeline">
            <h3>Encounter Timeline</h3>
            <div class="timeline-grid">
                <div class="timeline-point">
                    <span class="time-label">Start</span>
                    <span class="time-value">${target.encounterTiming.start}</span>
                </div>
                <div class="timeline-point highlight">
                    <span class="time-label">Closest Approach</span>
                    <span class="time-value">${target.encounterTiming.closestApproach}</span>
                </div>
                <div class="timeline-point">
                    <span class="time-label">End</span>
                    <span class="time-value">${target.encounterTiming.end}</span>
                </div>
                <div class="timeline-point">
                    <span class="time-label">Duration</span>
                    <span class="time-value">${target.encounterTiming.duration}</span>
                </div>
            </div>
        </div>
        
        <div class="observation-parameters">
            <h3>Observation Parameters</h3>
            <table class="params-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Start</th>
                        <th>Closest Approach</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sun Elevation</td>
                        <td>${target.sunElevation.start}</td>
                        <td>${target.sunElevation.closestApproach}</td>
                        <td>${target.sunElevation.end}</td>
                    </tr>
                    <tr>
                        <td>Phase Angle</td>
                        <td>${target.phaseAngle.start}</td>
                        <td>${target.phaseAngle.closestApproach}</td>
                        <td>${target.phaseAngle.end}</td>
                    </tr>
                    <tr>
                        <td>Emission Angle</td>
                        <td>${target.emissionAngle.start}</td>
                        <td>${target.emissionAngle.closestApproach}</td>
                        <td>${target.emissionAngle.end}</td>
                    </tr>
                    <tr>
                        <td>Distance</td>
                        <td>${target.distance.start}</td>
                        <td>${target.distance.closestApproach}</td>
                        <td>${target.distance.end}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="optimal-conditions">
            <h3>Optimal Conditions</h3>
            <div class="metadata-grid">
                <div class="metadata-item">
                    <span class="metadata-label">Min Phase Angle</span>
                    <span class="metadata-value">${target.optimalConditions.minPhaseAngle}</span>
                </div>
                <div class="metadata-item">
                    <span class="metadata-label">Time of Min Phase</span>
                    <span class="metadata-value">${target.optimalConditions.timeOfMinPhase}</span>
                </div>
                <div class="metadata-item">
                    <span class="metadata-label">Ideal Sun Elevation</span>
                    <div class=bottom-metadata-item>
                        <span class="metadata-sublabel">Albedo:</class>
                        <span class="metadata-value">${target.optimalConditions.idealSunElevation} |</span>           
                        <span class="metadata-sublabel">Morphology:</class>
                        <span class="metadata-value">${target.optimalConditions.morphology}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Also populate the image panel
    showImagePanel(target);
}

// Show images in the image panel
function showImagePanel(target) {
    if (!target.images) {
        imagePanel.innerHTML = `
            <div class="no-images-message">
                <h3>Images</h3>
                <p>No images available for this target</p>
            </div>
        `;
        return;
    }
      imagePanel.innerHTML = `
        <div class="image-panel-section collapsible-section">
            <h4 class="collapsible-header" onclick="toggleSection('naked-eye')">
                <span class="collapse-icon" id="naked-eye-icon">−</span>
                Naked Eye View
            </h4>
            <div class="collapsible-content" id="naked-eye-content">
                <div class="image-panel-lens-grid">
                    ${target.images.lensComparison.map((lens, index) => `
                        <div class="image-panel-lens-item">
                            <img src="${lens.src}" alt="${lens.caption}" 
                                 onclick="openImageModal('${lens.src}', '${lens.caption}')"
                                 data-index="${index}">
                            <div class="image-panel-lens-caption">${lens.caption}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="image-panel-section collapsible-section">
            <h4 class="collapsible-header" onclick="toggleSection('180mm')">
                <span class="collapse-icon" id="180mm-icon">−</span>
                180mm View
            </h4>
            <div class="collapsible-content" id="180mm-content">
                <div class="image-panel-gallery-grid">
                    ${target.images.gallery.map((image, index) => `
                        <div class="image-panel-gallery-item">
                            <img src="${image.src}" alt="${image.caption}"
                                 onclick="openImageModal('${image.src}', '${image.caption}')"
                                 data-index="${index}">
                            <div class="image-panel-gallery-caption">${image.caption}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="image-panel-section collapsible-section">
            <h4 class="collapsible-header" onclick="toggleSection('400mm')">
                <span class="collapse-icon" id="400mm-icon">−</span>
                400mm View
            </h4>
            <div class="collapsible-content" id="400mm-content">
                <div class="image-panel-roller-grid">
                    ${target.images.roller.map((roll, index) => `
                        <div class="image-panel-roller-item">
                            <img src="${roll.src}" alt="${roll.caption}"
                                 onclick="openImageModal('${roll.src}', '${roll.caption}')"
                                 data-index="${index}">
                            <div class="image-panel-roller-caption">${roll.caption}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Toggle collapsible sections in image panel
function toggleSection(sectionId) {
    const content = document.getElementById(`${sectionId}-content`);
    const icon = document.getElementById(`${sectionId}-icon`);
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '−';
    } else {
        content.style.display = 'none';
        icon.textContent = '+';
    }
}

// Sort targets
function sortTargets(sortBy) {
    currentTargets.sort((a, b) => {
        const aVal = a[sortBy] || '';
        const bVal = b[sortBy] || '';
        return aVal.localeCompare(bVal);
    });
    renderTargetList();
}

// Filter targets
function filterTargets(searchTerm) {
    if (!searchTerm.trim()) {
        currentTargets = [...targetsData];
    } else {
        currentTargets = targetsData.filter(target =>
            target.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            target.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            target.description.toLowerCase().includes(searchTerm.toLowerCase())
        );    }
    renderTargetList();
}

// Setup event listeners
function setupEventListeners() {
    // Target list clicks
    targetList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const targetName = e.target.getAttribute('data-target');
            showTargetDetail(targetName);
            showImagePanel(targetsData.find(t => t.name === targetName)); // Show images for the selected target
        }
    });
    
    // Sort dropdown
    sortBy.addEventListener('change', (e) => {
        sortTargets(e.target.value);
    });
    
    // Search box
    searchBox.addEventListener('input', (e) => {
        filterTargets(e.target.value);
    });
}

// Image Modal Functions
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modal.classList.add('show');
    modalImg.src = imageSrc;
    modalCaption.textContent = caption;
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    modal.classList.remove('show');
}

// Global modal event listeners (set up once)
function setupModalEventListeners() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.image-modal-close');
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeImageModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeImageModal();
        }
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
