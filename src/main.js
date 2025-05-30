// Hardcoded data for all colleges and all PDFs (expand as needed)
    const colleges = [
         {
             name: "Marquette University",
             usNewsPTRank: "22 (tie)",
             location: {
                 lat: 43.0389,
                 lng: -87.9289,
                 city: "Milwaukee",
                 state: "Wisconsin",
                 stateAbbr: "WI",
                 metroArea: "Milwaukee",
                 region: "Midwest",
                 nicknames: ["Marquette", "MU"],
                 nearbyCities: ["Chicago", "Madison", "Green Bay"]
             },
             rmpUrl: "https://www.ratemyprofessors.com/school/565",
             tuition: 49500, fees: 1200, housing: 9000, meals: 5000, costOfAttendance: 64700,
             scholarships: [ { name: "Père Marquette Scholarship", amount: 27000, renewal: true } ],
             majors: ["Physical Therapy (DPT)"],
             specialPrograms: ["3+3 Program", "Reserved Seats in PT Program"],
             transportation: ["Walkable", "Bike-friendly", "Parking", "Public Transit", "Car-optional"],
             pdfs: [
                 { label: "Scholarship Notification", filename: "Marquette/MarquetteScholarship.pdf" },
                 { label: "Admission Letter", filename: "Marquette/Letter.pdf" },
                 { label: "Tuition and Financial Aid Information", filename: "Marquette/Tuition and Financial Aid  Marquette University.pdf" }
             ],
             rankingsUrl: "https://www.usnews.com/best-graduate-schools/top-health-schools/marquette-university-239105"
         }, // End of Marquette University object
        {
            name: "Widener University",
            usNewsPTRank: "132 (tie)",
            location: {
                lat: 39.8574,
                lng: -75.3570,
                city: "Chester",
                state: "Pennsylvania",
                stateAbbr: "PA",
                metroArea: "Philadelphia",
                region: "Northeast",
                nicknames: ["Widener"],
                nearbyCities: ["Philadelphia", "Wilmington", "Media"]
            },
            rmpUrl: "https://www.ratemyprofessors.com/school/1198",
            tuition: 57180, fees: 730, housing: 8400, meals: 7900, costOfAttendance: 74210,
            scholarships: [
                { name: "Widener University Presidential Scholarship", amount: 38000, renewal: true },
                { name: "Texas State Alumni Award", amount: 4000, renewal: true },
                { name: "University Honors Scholarship", amount: 2000, renewal: true }
            ],
            majors: ["Pre-Physical Therapy (3+3)", "Psychology"],
            specialPrograms: ["3+3 Program"],
            transportation: ["Walkable", "Parking", "Public Transit"],
            pdfs: [
                { label: "Admission Letter", filename: "Widener/LetterWidener.pdf" },
                { label: "Financial Aid Offer", filename: "Widener/FinancialAidLetterWidener.pdf" },
                { label: "Tuition Guide", filename: "Widener/widener 2025-2026-Undergraduate-Programs-Tuition-Guide.pdf" }
            ]
        },
        {
            name: "Daemen University",
            usNewsPTRank: "206 (tie)",
            location: { lat: 42.9646, lng: -78.7897 },
            rmpUrl: "https://www.ratemyprofessors.com/school/4135",
            tuition: 41336, fees: 1141, housing: 7800, meals: 4200, costOfAttendance: 54477,
            scholarships: [ { name: "Daemen Merit Scholarship", amount: 17000, renewal: true } ],
            majors: ["Physical Therapy BS/DPT"],
            specialPrograms: ["Accelerated Program"],
            transportation: ["Parking", "Car-optional"],
            pdfs: [
                { label: "Admission Letter", filename: "Daemen/DaemenLetter.pdf" },
                { label: "Financial Fact Sheet", filename: "Daemen/daemen-dpt-student-financial-fact-sheet.pdf" }
            ]
        },
        {
            name: "Duquesne University",
            usNewsPTRank: "55 (tie)",
            location: { lat: 40.4372, lng: -79.9896 },
            rmpUrl: "https://www.ratemyprofessors.com/school/1586",
            tuition: 51000, fees: 1600, housing: 8300, meals: 4400, costOfAttendance: 65300,
            scholarships: [ { name: "Duquesne University Academic Scholarship", amount: 27000, renewal: true } ],
            majors: ["Physical Therapy"],
            specialPrograms: ["Pre-Medical and Health Professions Post-Secondary Certificate Program (UG-PMHPP)"],
            transportation: ["Walkable", "Parking", "Public Transit"],
            pdfs: [
                { label: "Admission Letter", filename: "Duquesne/DUEQUESNE.pdf" },
                { label: "Freshman Admission Information", filename: "Duquesne/Freshman Admission.pdf" }
            ]
        },
        {
            name: "Gonzaga University",
            usNewsPTRank: "N/A (Niche Kinesiology/PT Rank: #157)",
            location: { lat: 47.6671, lng: -117.4025 },
            rmpUrl: "https://www.ratemyprofessors.com/school/370",
            tuition: 56140, fees: 1110, housing: 8620, meals: 8010, costOfAttendance: 79798,
            scholarships: [ { name: "Gonzaga Grant", amount: 9400, renewal: true }, { name: "Gonzaga Academic Excellence", amount: 28000, renewal: true } ],
            majors: ["Physical Therapy (DPT)"],
            specialPrograms: [],
            transportation: ["Parking", "Car-optional"],
            pdfs: [
                { label: "Financial Aid Offer", filename: "Gonzaga no 3+3/Financial Aid.pdf" }
            ]
        },
        {
            name: "Ithaca College",
            usNewsPTRank: "50 (tie)",
            location: { lat: 42.4220, lng: -76.4959 },
            rmpUrl: "https://www.ratemyprofessors.com/school/453",
            tuition: 56752, fees: 0, housing: 16354, meals: 0, costOfAttendance: 73106,
            scholarships: [
                { name: "Ithaca College Scholarship", amount: 30000, renewal: true },
                { name: "Residential Experience Scholarship", amount: 2000, renewal: true },
                { name: "Ithaca College Grant", amount: 1467, renewal: true }
            ],
            majors: ["Physical Therapy (Clinical Health Studies/Physical Therapy, BS/DPT)"],
            specialPrograms: [],
            transportation: ["Walkable", "Parking", "Public Transit"],
            pdfs: [
                { label: "Scholarship Letter", filename: "Ithaca College/IthacaCollegeLetterScholarship.pdf" },
                { label: "Financial Aid Package", filename: "Ithaca College/Your Financial Aid Package.pdf" }
            ]
        },
        {
            name: "Saint Louis University",
            usNewsPTRank: "26 (tie)",
            location: { lat: 38.6360, lng: -90.2340 },
            rmpUrl: "https://www.ratemyprofessors.com/school/850",
            tuition: 56960, fees: 1000, housing: 15820, meals: 0, costOfAttendance: 80936,
            scholarships: [
                { name: "Vice Presidents' Scholarship", amount: 39000, renewal: true },
                { name: "SLU Grant", amount: 1000, renewal: true }
            ],
            majors: ["Physical Therapy (DPT)", "Exercise Science - Physical Therapy"],
            specialPrograms: ["Reserved Seats in PT Program", "6-year DPT"],
            transportation: ["Walkable", "Parking", "Public Transit"],
            pdfs: [
                { label: "Admission Letter", filename: "Saint Louis university/Saint Louis University.pdf" },
                { label: "Physical Therapy Program", filename: "Saint Louis university/physical-therapy-program.pdf" },
                { label: "Scholarship Notification", filename: "Saint Louis university/SLU scholarship.pdf" }
            ]
        },
        {
            name: "University of Hartford",
            usNewsPTRank: "132 (tie)",
            location: { lat: 41.7982, lng: -72.7141 },
            rmpUrl: "https://www.ratemyprofessors.com/school/1103",
            tuition: 47052, fees: 3393, housing: 8584, meals: 6306, costOfAttendance: 65335,
            scholarships: [
                { name: "UH Regents' Scholarship", amount: 35000, renewal: true },
                { name: "FAFSA Incentive Award", amount: 2000, renewal: true }
            ],
            majors: ["Physical Therapy (DPT)"],
            specialPrograms: [],
            transportation: ["Parking", "Car-optional"],
            pdfs: [
                { label: "Financial Aid Offer", filename: "University of Hartford/University of hartford financial aid offer.pdf" }
            ]
        },
        {
            name: "University of Illinois Chicago",
            usNewsPTRank: "33 (tie)",
            location: { lat: 41.8708, lng: -87.6505 },
            rmpUrl: "https://www.ratemyprofessors.com/school/1111",
            tuition: 27526, fees: 4966, housing: 14400, meals: 0, costOfAttendance: 54318,
            scholarships: [ { name: "Merit Award", amount: 8000, renewal: true } ],
            majors: ["Rehabilitation Sciences"],
            specialPrograms: ["Honors College"],
            transportation: ["Walkable", "Parking", "Public Transit"],
            pdfs: [
                { label: "Admission Letter", filename: "University of Illinois/university of illinois chicago.pdf" },
                { label: "Cost of Attendance Sheet", filename: "University of Illinois/Discover the University of Illinois Chicago.pdf" }
            ]
        }
        // Add Mizzou if data is available
    ];

    // --- Filtering, Sorting, and Summary Stats Logic ---
    let filteredColleges = [...colleges];
    let userLocation = null; // { lat: number, lng: number } | null

    function renderDashboard() {
        const dashboard = document.getElementById('dashboard');
        dashboard.innerHTML = ''; // Clear existing cards
        let chartInitQueue = []; // Removed mapInitQueue

        // Use Bootstrap grid for layout
        dashboard.className = 'row g-4 justify-content-center'; // Add Bootstrap classes

        filteredColleges.forEach(college => {
            const mapId = 'map-' + Math.random().toString(36).substr(2, 9);
            const chartId = 'chart-' + Math.random().toString(36).substr(2, 9);

            // Create a Bootstrap column for each card
            const colDiv = document.createElement('div');
            colDiv.className = 'col-12 col-md-6 col-lg-4 col-xl-4'; // Dynamic columns: 1 (sm), 2 (md), 3 (lg), 4 (xl)
            colDiv.innerHTML = generateCollegeProfileHTML(college, mapId, chartId);
            dashboard.appendChild(colDiv);

            // Initialize map immediately after appending the element
            initializeMap(mapId, college.location, college.name);

            // Queue chart initialization
            chartInitQueue.push({ chartId, tuition: college.tuition, fees: college.fees, housing: college.housing, meals: college.meals });
        });

        // Initialize charts and other setup after a short delay (maps are already done)
        setTimeout(() => {
            // Removed map initialization loop
            for (const { chartId, tuition, fees, housing, meals } of chartInitQueue) initializeChart(chartId, tuition, fees, housing, meals);
            // Initialize Bootstrap tooltips if any are added
            initializeNetCostComparisonChart();
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            }); // End of tooltipTriggerList.map

            // Comparison charts are now initialized in filterAndSortColleges

            // Setup PDF buttons AFTER dashboard elements are rendered
            if (typeof window.pdfjsLib !== 'undefined') {
                 setupPdfViewButtons();
            } else {
                 console.warn("PDF.js not ready when trying to setup buttons in renderDashboard timeout.");
                 // Optionally, retry setup after another short delay or rely on waitForPdfJsAndSetup's final check
            }
        }, 100); // Increased delay slightly just in case

        renderSummaryStats();
    }

    function filterAndSortColleges() {
        let result = [...colleges];

        // Cost range filter
        const costVal = document.getElementById('costRange').value;
        if (costVal) {
            result = result.filter(c => {
                if (!c.costOfAttendance) return false;
                if (costVal === 'low') return c.costOfAttendance < 50000;
                if (costVal === 'mid') return c.costOfAttendance >= 50000 && c.costOfAttendance <= 65000;
                if (costVal === 'high') return c.costOfAttendance > 65000;
                return true;
            });
        }

        // Scholarships filter
        if (document.getElementById('scholarshipCheckbox').checked) {
            result = result.filter(c => c.scholarships && c.scholarships.length > 0);
        }

        // Robust location search that checks multiple fields
        const locVal = document.getElementById('locationInput').value.trim().toLowerCase();
        if (locVal) {
            result = result.filter(c => {
                // Check name and nicknames
                if (c.name.toLowerCase().includes(locVal)) return true;
                if (c.location?.nicknames?.some(n => n.toLowerCase().includes(locVal))) return true;

                // Check location fields
                if (c.location?.city?.toLowerCase().includes(locVal)) return true;
                if (c.location?.state?.toLowerCase().includes(locVal)) return true;
                if (c.location?.stateAbbr?.toLowerCase() === locVal) return true;
                if (c.location?.metroArea?.toLowerCase().includes(locVal)) return true;
                if (c.location?.region?.toLowerCase().includes(locVal)) return true;
                if (c.location?.nearbyCities?.some(city => city.toLowerCase().includes(locVal))) return true;

                // Enhanced fuzzy matching for common abbreviations/typos
                const fuzzyMatches = {
                    'philly': 'philadelphia',
                    'pa': 'pennsylvania',
                    'chi': 'chicago',
                    'tx': 'texas',
                    'wi': 'wisconsin',
                    'mil': 'milwaukee',
                    'waco': 'baylor',
                    'chester': 'widener',
                    'stl': 'saint louis',
                    'slu': 'saint louis university',
                    'ui': 'university of illinois',
                    'uic': 'university of illinois chicago'
                };
                if (fuzzyMatches[locVal]) {
                    if (c.location?.metroArea?.toLowerCase().includes(fuzzyMatches[locVal])) return true;
                    if (c.location?.state?.toLowerCase().includes(fuzzyMatches[locVal])) return true;
                }

                return false;
            });
        }

        // Major filter (substring match)
        const majorVal = document.getElementById('majorInput').value.trim().toLowerCase();
        if (majorVal) {
            result = result.filter(c => (c.majors || []).some(m => m.toLowerCase().includes(majorVal)));
        }

        // Sorting
        const sortVal = document.getElementById('sortSelect').value;
        if (sortVal) {
            if (sortVal === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
            if (sortVal === 'tuition') result.sort((a, b) => (a.tuition || 0) - (b.tuition || 0));
            if (sortVal === 'scholarship') result.sort((a, b) => {
                const aTotal = (a.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0);
                const bTotal = (b.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0);
                return bTotal - aTotal; // Sort descending by total scholarship amount
            });
            if (sortVal === 'total') result.sort((a, b) => (a.costOfAttendance || 0) - (b.costOfAttendance || 0));
            if (sortVal === 'net') result.sort((a, b) => {
                const aNet = (a.costOfAttendance || 0) - (a.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0);
                const bNet = (b.costOfAttendance || 0) - (b.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0);
                return aNet - bNet;
            });
        }

        filteredColleges = result;
        renderDashboard();

        // Initialize comparison charts after dashboard is rendered
        initializeTuitionComparisonChart();
        initializeScholarshipComparisonChart();
        initializeNetCostComparisonChart();
        initializeTuitionMinusScholarshipComparisonChart();
    }

    function renderSummaryStats() {
        const statsDiv = document.getElementById('summaryStats');
        if (!statsDiv) return;

        if (filteredColleges.length === 0) {
            statsDiv.innerHTML = '<span class="text-danger">No colleges match the current filters.</span>';
            return;
        }

        // Calculate stats based on filtered colleges
        const validTuitionColleges = filteredColleges.filter(c => typeof c.tuition === 'number');
        const avgTuition = validTuitionColleges.length > 0 ? Math.round(validTuitionColleges.reduce((sum, c) => sum + c.tuition, 0) / validTuitionColleges.length) : 0;

        const totalScholarships = filteredColleges.reduce((sum, c) => sum + (c.scholarships || []).reduce((s, sch) => s + (sch.amount || 0), 0), 0);

        const validCostColleges = filteredColleges.filter(c => typeof c.costOfAttendance === 'number');
        const avgTotalCost = validCostColleges.length > 0 ? Math.round(validCostColleges.reduce((sum, c) => sum + c.costOfAttendance, 0) / validCostColleges.length) : 0;

        // Calculate Average Net Cost
        const validNetCostColleges = filteredColleges.filter(c => typeof c.costOfAttendance === 'number'); // Ensure COA exists for calculation
        const avgNetCost = validNetCostColleges.length > 0 ? Math.round(validNetCostColleges.reduce((sum, c) => {
            const totalSch = (c.scholarships || []).reduce((sSum, s) => sSum + (s.amount || 0), 0);
            return sum + (c.costOfAttendance - totalSch); // Calculate net cost per college
        }, 0) / validNetCostColleges.length) : 0; // Divide by count of colleges with COA

        statsDiv.innerHTML = `
            <span class="badge bg-primary p-2" data-bs-toggle="tooltip" title="Average Tuition of Displayed Colleges"><i class="fa-solid fa-graduation-cap me-1"></i> Avg Tuition: $${avgTuition.toLocaleString()}</span>
            <span class="badge bg-success p-2" data-bs-toggle="tooltip" title="Total Scholarships Offered by Displayed Colleges"><i class="fa-solid fa-money-bill-wave me-1"></i> Total Scholarships: $${totalScholarships.toLocaleString()}</span>
            <span class="badge bg-info text-dark p-2" data-bs-toggle="tooltip" title="Average Total Cost of Attendance for Displayed Colleges"><i class="fa-solid fa-coins me-1"></i> Avg COA: $${avgTotalCost.toLocaleString()}</span>
            <span class="badge bg-warning text-dark p-2" data-bs-toggle="tooltip" title="Average Net Cost (COA - Scholarships) for Displayed Colleges"><i class="fa-solid fa-receipt me-1"></i> Avg Net Cost: $${avgNetCost.toLocaleString()}</span>
            <span class="badge bg-secondary p-2" data-bs-toggle="tooltip" title="Number of Colleges Matching Filters"><i class="fa-solid fa-university me-1"></i> Colleges: ${filteredColleges.length}</span>
        `;

        // Re-initialize tooltips for the new summary stats badges
        const tooltipTriggerList = [].slice.call(statsDiv.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Function to wait for PDF.js and then setup buttons
    function waitForPdfJsAndSetup(maxAttempts = 30, interval = 100) { // Try for 3 seconds max
        let attempts = 0;
        function check() {
            if (typeof window.pdfjsLib !== 'undefined') {
                console.log("PDF.js library loaded. Button setup will occur after dashboard render.");
                // Set the worker source for PDF.js
                pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@5.1.91/build/pdf.worker.min.mjs';
                console.log("PDF.js workerSrc set to:", pdfjsLib.GlobalWorkerOptions.workerSrc);
                // setupPdfViewButtons(); // Removed from here
            } else if (attempts < maxAttempts) {
                attempts++;
                console.log(`PDF.js not ready, attempt ${attempts}/${maxAttempts}. Retrying in ${interval}ms...`);
                setTimeout(check, interval);
            } else {
                console.error(`PDF.js failed to load after ${maxAttempts} attempts.`);
                // Optionally display an error message to the user in the UI
                const modalMsg = document.getElementById('pdfModalMessage');
                if (modalMsg) modalMsg.textContent = "Error: PDF viewer library failed to load. Please refresh the page.";
            }
        }
        check();
    }

    // Initial setup on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        // Confirm pdfjsLib global is present after DOM load
        console.log("pdfjsLib is", typeof window.pdfjsLib, window.pdfjsLib ? "PDF.js loaded" : "undefined or not loaded");

        // Wait for PDF.js library before setting up buttons
        waitForPdfJsAndSetup();

        // Attach event listeners to all filter/sort controls
        ['costRange', 'scholarshipCheckbox', 'locationInput', 'majorInput', 'sortSelect', 'userLocationInput'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'userLocationInput') {
                    // Trigger distance update on 'change' (e.g., pressing Enter or losing focus)
                    element.addEventListener('change', handleUserLocationUpdate);
                } else {
                    // Use 'input' for text fields for immediate feedback, 'change' for others
                    const eventType = (element.type === 'text' || element.type === 'search') ? 'input' : 'change';
                    element.addEventListener(eventType, function(event) {
                       console.log("Filter listener triggered by:", event.target); // ADD THIS LINE
                       if (event.target.closest('.view-pdf-btn')) {
                           console.log("Ignoring PDF button click in filter listener."); // Check if this logic works as intended
                           return; // This return might not be sufficient if the listener is on a parent element
                       }
                       filterAndSortColleges();
                    });
                }
            }
        });

        // --- Theme Toggle Logic ---
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        function applyTheme(theme) {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            themeToggleBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', theme);
            // Re-initialize charts with the correct theme colors
            initializeTuitionComparisonChart();
            initializeScholarshipComparisonChart();
            initializeNetCostComparisonChart();
            initializeTuitionMinusScholarshipComparisonChart();
            // Re-render dashboard to update individual pie chart legends/tooltips if needed
            renderDashboard(); // This might be slightly inefficient but ensures theme consistency
        }

        applyTheme(currentTheme);

        themeToggleBtn.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
        });
        // --- End Theme Toggle Logic ---

       // Add dark mode toggle on accordion button click - MOVED TO generateCollegeProfileHTML


        // Initial render based on default filters/sort
        filterAndSortColleges();
    });

    // --- End Filtering, Sorting, and Summary Stats Logic ---

    // --- Distance Calculation Logic ---
    function calculateDistance(lat1, lon1, lat2, lon2) {
        // Haversine formula to calculate distance between two lat/lng points
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distanceKm = R * c;
        // Convert to miles (optional)
        const distanceMiles = distanceKm * 0.621371;
        return Math.round(distanceMiles); // Return distance in miles, rounded
    }

    function handleUserLocationUpdate() {
        const input = document.getElementById('userLocationInput');
        const value = input.value.trim();
        const parts = value.split(',');

        if (parts.length === 2) {
            const lat = parseFloat(parts[0]);
            const lng = parseFloat(parts[1]);
            if (!isNaN(lat) && !isNaN(lng)) {
                userLocation = { lat: lat, lng: lng };
                console.log("User location updated:", userLocation);
                filterAndSortColleges(); // Re-render to show distances
                return;
            }
        }

        // If input is invalid or cleared, reset userLocation and re-render
        if (userLocation !== null) {
             userLocation = null;
             console.log("User location cleared.");
             filterAndSortColleges(); // Re-render to remove distances
        }
    }
    // --- End Distance Calculation Logic ---

    // *** START MODIFIED FUNCTION ***
    function generateCollegeProfileHTML(college, mapId, chartId) {
        const sanitizedCollegeName = college.name.replace(/[^a-zA-Z0-9]/g, ''); // Sanitize name for IDs
        const accordionId = `accordion-${sanitizedCollegeName}`;
        const totalScholarships = (college.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0);
        const netCost = (college.costOfAttendance || 0) - totalScholarships;
        const tuitionMinusScholarship = Math.max(0, (college.tuition || 0) - totalScholarships);

        let html = `<div class="card h-100 shadow-sm w-100">`;
        html += `<div class="card-body d-flex flex-column">`;

        // --- Visible Header ---
        html += `<h5 class="card-title mb-1">${college.name}</h5>`;
        if (college.usNewsPTRank) {
           html += `<h6 class="card-subtitle mb-2 text-muted small">US News PT Rank: ${college.usNewsPTRank}</h6>`;
        }
        let distanceHtml = '';
        if (userLocation && college.location && typeof college.location.lat === 'number' && typeof college.location.lng === 'number') {
            const distance = calculateDistance(userLocation.lat, userLocation.lng, college.location.lat, college.location.lng);
            distanceHtml = `<span class="badge bg-secondary ms-1"><i class="fas fa-road me-1"></i>${distance} mi</span>`;
        }
        html += `<div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="fs-5 fw-bold text-success">$${netCost.toLocaleString()}<small class="text-muted fw-normal small"> / year (Net)</small></span>
                    ${distanceHtml}
                 </div>`;
        if (college.rmpUrl) {
            html += `<a href="${college.rmpUrl}" target="_blank" class="btn btn-sm btn-outline-primary mb-3"><i class="fas fa-external-link-alt me-1"></i>RateMyProfessors</a>`;
        }

        // --- Campus & Location (Moved Out of Accordion) ---
        html += `<div class="mb-3 mt-3 border-top pt-3">`; // Add separator and spacing
        // Campus Map
        html += `<div class="mb-2"><h6><i class="fas fa-map-marker-alt me-1 text-danger"></i>Campus Map</h6><div class="map-container" id="${mapId}" style="height: 150px;"></div></div>`;
        // Transportation
        html += `<div><h6><i class="fas fa-bus me-1 text-secondary"></i>Transportation</h6>`;
        if (college.transportation && college.transportation.length > 0) {
             college.transportation.forEach(t => html += `<span class="badge bg-light text-dark me-1 mb-1">${t}</span>`);
        } else {
             html += `<p class="text-muted small mb-0">No transportation info.</p>`;
        }
        html += `</div>`;
        html += `</div>`; // End Campus & Location Section

        // --- Accordion for Details ---
        html += `<div class="accordion accordion-flush mt-3 border-top pt-3" id="${accordionId}">`; // Add separator and spacing

        // --- Accordion Item: Costs ---
        const costCollapseId = `collapse-cost-${sanitizedCollegeName}`;
        html += `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading-cost-${sanitizedCollegeName}">
                      <button class="accordion-button collapsed py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#${costCollapseId}" aria-expanded="false" aria-controls="${costCollapseId}">
                        <i class="fas fa-dollar-sign me-2 text-success"></i>Costs & Scholarships
                      </button>
                    </h2>
                    <div id="${costCollapseId}" class="accordion-collapse collapse" aria-labelledby="heading-cost-${sanitizedCollegeName}" data-bs-parent="#${accordionId}">
                      <div class="accordion-body small p-2">`;
        // Cost Breakdown Chart
        html += `<div class="mb-2"><h6><i class="fas fa-chart-pie me-1 text-primary"></i>Cost Breakdown</h6><div class="chart-container" style="height: 150px;"><canvas id="${chartId}"></canvas></div><div id="${chartId}-legend" class="pie-legend small d-flex flex-wrap justify-content-center mt-1"></div></div>`;
        // Annual Costs List
        html += `<div class="mb-2"><h6><i class="fas fa-list-ul me-1 text-secondary"></i>Annual Costs</h6><ul class="list-group list-group-flush small">`;
        if (college.tuition) html += `<li class="list-group-item d-flex justify-content-between align-items-center py-1 px-0">Tuition <span class="badge bg-light text-dark">$${college.tuition.toLocaleString()}</span></li>`;
        if (college.fees) html += `<li class="list-group-item d-flex justify-content-between align-items-center py-1 px-0">Fees <span class="badge bg-light text-dark">$${college.fees.toLocaleString()}</span></li>`;
        if (college.housing) html += `<li class="list-group-item d-flex justify-content-between align-items-center py-1 px-0">Housing <span class="badge bg-light text-dark">$${college.housing.toLocaleString()}</span></li>`;
        if (college.meals) html += `<li class="list-group-item d-flex justify-content-between align-items-center py-1 px-0">Meals <span class="badge bg-light text-dark">$${college.meals.toLocaleString()}</span></li>`;
        if (college.costOfAttendance) html += `<li class="list-group-item d-flex justify-content-between align-items-center py-1 px-0 fw-bold">Total COA <span class="badge bg-light text-dark">$${college.costOfAttendance.toLocaleString()}</span></li>`;
        html += `</ul></div>`;
        // Scholarships List
        html += `<div class="mb-2"><h6><i class="fas fa-award me-1 text-warning"></i>Scholarships & Grants</h6>`;
        if (college.scholarships && college.scholarships.length > 0) {
            html += `<ul class="list-group list-group-flush small">`;
            college.scholarships.forEach(sch => {
                html += `<li class="list-group-item py-1 px-0">
                             ${sch.name} - <span class="fw-bold">$${sch.amount.toLocaleString()}</span>
                             ${sch.renewal ? '<i class="fas fa-check-circle text-success ms-1" title="Renewable"></i>' : '<i class="fas fa-times-circle text-danger ms-1" title="Not Renewable"></i>'}
                          </li>`;
            });
             html += `<li class="list-group-item d-flex justify-content-between align-items-center py-1 px-0 fw-bold">Total Aid <span class="badge bg-success text-white">$${totalScholarships.toLocaleString()}</span></li>`;
            html += `</ul>`;
        } else {
            html += `<p class="text-muted small mb-0">No scholarships listed.</p>`;
        }
        html += `</div>`;
        // Tuition Minus Scholarship
        html += `<div><h6><i class="fas fa-calculator me-1 text-info"></i>Tuition Minus Scholarship</h6>`;
        html += `<p class="fs-6 fw-bold text-info mb-0">$${tuitionMinusScholarship.toLocaleString()}<small class="text-muted fw-normal small"> / year</small></p>`;
        html += `<small class="text-muted">(Tuition - Total Scholarships)</small></div>`;

        html += `       </div> <!-- /accordion-body -->
                    </div> <!-- /accordion-collapse -->
                  </div>`; // --- End Accordion Item: Costs ---

        // --- Accordion Item: Academics ---
        const academicsCollapseId = `collapse-academics-${sanitizedCollegeName}`;
        html += `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading-academics-${sanitizedCollegeName}">
                      <button class="accordion-button collapsed py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#${academicsCollapseId}" aria-expanded="false" aria-controls="${academicsCollapseId}">
                        <i class="fas fa-book-open me-2 text-info"></i>Academics
                      </button>
                    </h2>
                    <div id="${academicsCollapseId}" class="accordion-collapse collapse" aria-labelledby="heading-academics-${sanitizedCollegeName}" data-bs-parent="#${accordionId}">
                      <div class="accordion-body small p-2">`;
        // Majors
        html += `<div class="mb-2"><h6>Majors</h6>`;
        if (college.majors && college.majors.length > 0) {
             college.majors.forEach(m => html += `<span class="badge bg-info text-dark me-1 mb-1">${m}</span>`);
        } else {
            html += `<p class="text-muted small mb-0">No majors listed.</p>`;
        }
        html += `</div>`;
        // Special Programs
        html += `<div><h6>Special Programs</h6>`;
        if (college.specialPrograms && college.specialPrograms.length > 0) {
             college.specialPrograms.forEach(p => html += `<span class="badge bg-secondary me-1 mb-1">${p}</span>`);
        } else {
            html += `<p class="text-muted small mb-0">None listed.</p>`;
        }
        html += `</div>`;
        html += `       </div> <!-- /accordion-body -->
                    </div> <!-- /accordion-collapse -->
                  </div>`; // --- End Accordion Item: Academics ---


        // --- Accordion Item: Documents ---
        const docsCollapseId = `collapse-docs-${sanitizedCollegeName}`;
        html += `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading-docs-${sanitizedCollegeName}">
                      <button class="accordion-button collapsed py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#${docsCollapseId}" aria-expanded="false" aria-controls="${docsCollapseId}">
                         <i class="fas fa-file-pdf me-2 text-danger"></i>Original Documents
                      </button>
                    </h2>
                    <div id="${docsCollapseId}" class="accordion-collapse collapse" aria-labelledby="heading-docs-${sanitizedCollegeName}" data-bs-parent="#${accordionId}">
                      <div class="accordion-body p-2">`;
        if (college.pdfs && college.pdfs.length > 0) {
            college.pdfs.forEach((pdf, idx) => {
                const inputId = `${sanitizedCollegeName}-pdf-input-${idx}`; // Use sanitized name
                html += `<div class="mb-1">
                             <button class="btn btn-sm btn-outline-success view-pdf-btn" data-inputid="${inputId}" data-bs-toggle="tooltip" title="View ${pdf.label}" aria-label="View PDF: ${pdf.label}">
                                 <i class="fas fa-eye me-1"></i> ${pdf.label}
                             </button>
                             <input type="file" id="${inputId}" class="hidden-file-input" accept=".pdf" data-filename="${pdf.filename || pdf.label}">
                          </div>`;
            });
        } else {
             html += `<p class="text-muted small mb-0">No documents listed.</p>`;
        }
        html += `       </div> <!-- /accordion-body -->
                    </div> <!-- /accordion-collapse -->
                  </div>`; // --- End Accordion Item: Documents ---

        html += `</div>`; // --- End Accordion ---

        html += `</div></div>`; // Close card-body and card
        return html;
    }
    let mapInstances = {};

    // Make this the global callback for Google Maps API
    // Ensure this function is globally accessible if called by the Google Maps script
    window.initMap = function() {
        console.log("Google Maps API loaded, initMap called.");
        // The actual map rendering will happen inside generateCollegeProfileHTML's call to initializeMap
        // If maps need re-initialization after API load, trigger it here or ensure initializeMap handles it.
        // Potentially re-run renderDashboard or specifically initialize maps if they failed previously.
        // filterAndSortColleges(); // Re-render might be needed if maps failed initially
    }

    function initializeMap(mapId, location, name) {
        const mapDiv = document.getElementById(mapId);
        if (!mapDiv) {
            console.error(`Map container not found: ${mapId}`);
            return;
        }
        if (!location || typeof location.lat !== 'number' || typeof location.lng !== 'number') {
            mapDiv.innerHTML = '<p class="text-muted small p-2">Map location data missing.</p>';
            return;
        }

        // Check if Google Maps API is loaded
        if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
            console.warn("Google Maps API not ready yet for map:", mapId);
            mapDiv.innerHTML = '<p class="text-warning small p-2">Map loading...</p>';
            // Optionally retry or wait, but the async script load should handle this via initMap callback eventually.
            return;
        }

        try {
            const mapOptions = {
                center: { lat: location.lat, lng: location.lng },
                zoom: 15,
                mapTypeId: 'satellite' // Set default view to satellite
            };
            const map = new google.maps.Map(mapDiv, mapOptions);

            // Use AdvancedMarkerElement instead of deprecated Marker
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                title: name
            });

            const infowindow = new google.maps.InfoWindow({
                content: `<h6>${name}</h6>`
            });

            marker.addListener('click', () => {
                infowindow.open({
                    anchor: marker,
                    map,
                });
            });

            // Store map instance if needed later (e.g., for resizing)
            mapInstances[mapId] = map;

        } catch (e) {
            console.error(`Error initializing Google map ${mapId}:`, e);
            mapDiv.innerHTML = '<p class="text-danger small p-2">Error loading map.</p>';
        }
    }
    console.log("initializeChart() called");
    function initializeChart(chartId, tuition, fees, housing, meals) {
        const ctx = document.getElementById(chartId);
        if (!ctx) return;

        // Consistent color mapping
        const categoryColors = {
            'Tuition': '#0074d9', // Blue
            'Fees': '#ff851b',    // Orange
            'Housing': '#2ecc40', // Green
            'Meals': '#b10dc9'     // Purple
        };

        const chartData = [];
        const chartLabels = [];
        const chartColors = [];

        if (tuition) { chartData.push(tuition); chartLabels.push('Tuition'); chartColors.push(categoryColors['Tuition']); }
        if (fees) { chartData.push(fees); chartLabels.push('Fees'); chartColors.push(categoryColors['Fees']); }
        if (housing) { chartData.push(housing); chartLabels.push('Housing'); chartColors.push(categoryColors['Housing']); }
        if (meals) { chartData.push(meals); chartLabels.push('Meals'); chartColors.push(categoryColors['Meals']); }

        if (chartData.length === 0) return; // Don't render if no data

        // Generate Custom HTML Legend
        const legendContainer = document.getElementById(`${chartId}-legend`);
        if (legendContainer) {
            // Determine text color based on theme
            const isDarkMode = document.body.classList.contains('dark-mode');
            const legendTextColor = isDarkMode ? '#dee2e6' : '#212529'; // Light grey for dark, dark for light
            legendContainer.style.color = legendTextColor; // Apply the color

            let legendHtml = '';
            chartLabels.forEach((label, index) => {
                // Added class "pie-legend-item" for styling
                legendHtml += `<span class="me-3 pie-legend-item"><span style="display:inline-block;width:12px;height:12px;background-color:${chartColors[index]};margin-right:4px;border-radius:2px;"></span>${label}</span>`;
            });
            legendContainer.innerHTML = legendHtml;
        }

        // Create Chart Instance
        const isDarkMode = document.body.classList.contains('dark-mode');
        const tooltipTitleColor = isDarkMode ? '#f8f9fa' : '#212529';
        const tooltipBodyColor = isDarkMode ? '#dee2e6' : '#343a40';
        const tooltipBgColor = isDarkMode ? 'rgba(33, 37, 41, 0.9)' : 'rgba(255, 255, 255, 0.9)';

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartLabels,
                datasets: [{
                    data: chartData,
                    backgroundColor: chartColors
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Allow chart to fill container height better
                plugins: {
                    legend: {
                        display: false // Disable default legend
                    },
                    tooltip: {
                         backgroundColor: tooltipBgColor,
                         titleColor: tooltipTitleColor,
                         bodyColor: tooltipBodyColor,
                         callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += '$' + context.parsed.toLocaleString();
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    // --- Comparison Chart Logic ---
    let tuitionChartInstance = null;
    let scholarshipChartInstance = null;
    let tuitionMinusScholarshipChartInstance = null;
    let netCostChartInstance = null;

    function initializeTuitionComparisonChart() {
        console.log("initializeTuitionComparisonChart() called");
        const ctx = document.getElementById('tuitionComparisonChart');
        if (!ctx) return;

        const labels = filteredColleges.map(c => c.name);
        const data = filteredColleges.map(c => c.tuition || 0);
const lowestTuition = Math.min(...data);
const highestTuition = Math.max(...data);

        if (tuitionChartInstance) {
            tuitionChartInstance.destroy();
        }

        const isDarkMode = document.body.classList.contains('dark-mode');
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const tickColor = isDarkMode ? '#dee2e6' : '#666';
        const tooltipTitleColor = isDarkMode ? '#f8f9fa' : '#212529';
        const tooltipBodyColor = isDarkMode ? '#dee2e6' : '#343a40';
        const tooltipBgColor = isDarkMode ? 'rgba(33, 37, 41, 0.9)' : 'rgba(255, 255, 255, 0.9)';

        tuitionChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Tuition Cost',
                    data: data,
                    backgroundColor: 'rgba(0, 116, 217, 0.6)', // Blue
                    borderColor: 'rgba(0, 116, 217, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'x', // Display college names on X-axis
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: tickColor, // Dark mode compatible
                            callback: function(value, index) {
                                // Ensure label exists before returning
                                return this.chart.data.labels && this.chart.data.labels[index] ? this.chart.data.labels[index] : '';
                            },
                            autoSkip: false,
                            font: { size: 10 } // Use object for font settings
                         },
                         grid: {
                             color: gridColor // Dark mode compatible
                         }
                     },
                     y: {
                        beginAtZero: true,
                        ticks: { color: tickColor }, // Dark mode compatible
                        grid: { color: gridColor } // Dark mode compatible
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: tooltipBgColor,
                        titleColor: tooltipTitleColor,
                        bodyColor: tooltipBodyColor,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    function initializeScholarshipComparisonChart() {
        console.log("initializeScholarshipComparisonChart() called");
        const ctx = document.getElementById('scholarshipComparisonChart');
        if (!ctx) return;

        const labels = filteredColleges.map(c => c.name);
        const data = filteredColleges.map(c =>
            (c.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0)
        );

        if (scholarshipChartInstance) {
            scholarshipChartInstance.destroy();
        }

        const isDarkMode = document.body.classList.contains('dark-mode');
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const tickColor = isDarkMode ? '#dee2e6' : '#666';
        const tooltipTitleColor = isDarkMode ? '#f8f9fa' : '#212529';
        const tooltipBodyColor = isDarkMode ? '#dee2e6' : '#343a40';
        const tooltipBgColor = isDarkMode ? 'rgba(33, 37, 41, 0.9)' : 'rgba(255, 255, 255, 0.9)';

        scholarshipChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Scholarship Amount',
                    data: data,
                    backgroundColor: 'rgba(46, 204, 64, 0.6)', // Green
                    borderColor: 'rgba(46, 204, 64, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                           color: tickColor, // Dark mode compatible
                           callback: function(value, index) {
                               // Ensure label exists before returning
                               return this.chart.data.labels && this.chart.data.labels[index] ? this.chart.data.labels[index] : '';
                           },
                           autoSkip: false,
                           font: { size: 10 } // Use object for font settings
                        },
                        grid: {
                            color: gridColor // Dark mode compatible
                        }
                    },
                     y: {
                        beginAtZero: true,
                        ticks: { color: tickColor }, // Dark mode compatible
                        grid: { color: gridColor } // Dark mode compatible
                    }
                },
                plugins: {
                    legend: { display: false },
                     tooltip: {
                        backgroundColor: tooltipBgColor,
                        titleColor: tooltipTitleColor,
                        bodyColor: tooltipBodyColor,
                        callbacks: {
                             label: function(context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    function initializeNetCostComparisonChart() {
        console.log("initializeNetCostComparisonChart() called");
        const ctx = document.getElementById('netCostComparisonChart');
        if (!ctx) return;

        const labels = filteredColleges.map(c => c.name);
        const data = filteredColleges.map(c => {
            const totalSch = (c.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0);
            return (c.costOfAttendance || 0) - totalSch;
        });

        if (netCostChartInstance) {
            netCostChartInstance.destroy();
        }

        const isDarkMode = document.body.classList.contains('dark-mode');
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const tickColor = isDarkMode ? '#dee2e6' : '#666';
        const tooltipTitleColor = isDarkMode ? '#f8f9fa' : '#212529';
        const tooltipBodyColor = isDarkMode ? '#dee2e6' : '#343a40';
        const tooltipBgColor = isDarkMode ? 'rgba(33, 37, 41, 0.9)' : 'rgba(255, 255, 255, 0.9)';

        netCostChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Net Cost (COA - Scholarships)',
                    data: data,
                    backgroundColor: 'rgba(255, 133, 27, 0.6)', // Orange
                    borderColor: 'rgba(255, 133, 27, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: tickColor, // Dark mode compatible
                            callback: function(value, index) {
                               // Ensure label exists before returning
                               return this.chart.data.labels && this.chart.data.labels[index] ? this.chart.data.labels[index] : '';
                            },
                            autoSkip: false,
                            font: { size: 10 } // Use object for font settings
                        },
                        grid: {
                            color: gridColor // Dark mode compatible
                        }
                    },
                     y: {
                        beginAtZero: true,
                        ticks: { color: tickColor }, // Dark mode compatible
                        grid: { color: gridColor } // Dark mode compatible
                    }
                },
                plugins: {
                    legend: { display: false },
                     tooltip: {
                        backgroundColor: tooltipBgColor,
                        titleColor: tooltipTitleColor,
                        bodyColor: tooltipBodyColor,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    function initializeTuitionMinusScholarshipComparisonChart() {
        const ctx = document.getElementById('tuitionMinusScholarshipComparisonChart');
        if (!ctx) return;

        const labels = filteredColleges.map(c => c.name);
        const data = filteredColleges.map(c => {
            const totalSch = (c.scholarships || []).reduce((sum, s) => sum + (s.amount || 0), 0);
            let tuitionMinusScholarship = (c.tuition || 0) - totalSch;
            if (tuitionMinusScholarship < 0) tuitionMinusScholarship = 0;
            return tuitionMinusScholarship;
        });

        if (tuitionMinusScholarshipChartInstance) {
            tuitionMinusScholarshipChartInstance.destroy();
        }

        const isDarkMode = document.body.classList.contains('dark-mode');
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const tickColor = isDarkMode ? '#dee2e6' : '#666';
        const tooltipTitleColor = isDarkMode ? '#f8f9fa' : '#212529';
        const tooltipBodyColor = isDarkMode ? '#dee2e6' : '#343a40';
        const tooltipBgColor = isDarkMode ? 'rgba(33, 37, 41, 0.9)' : 'rgba(255, 255, 255, 0.9)';

        tuitionMinusScholarshipChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Tuition Minus Scholarship',
                    data: data,
                    backgroundColor: 'rgba(255, 205, 86, 0.7)', // Yellow
                    borderColor: 'rgba(255, 205, 86, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: tickColor, // Dark mode compatible
                            callback: function(value, index) {
                                // Ensure label exists before returning
                                return this.chart.data.labels && this.chart.data.labels[index] ? this.chart.data.labels[index] : '';
                            },
                            autoSkip: false,
                            font: { size: 10 } // Use object for font settings
                        },
                        grid: {
                            color: gridColor // Dark mode compatible
                        }
                    },
                    y: { 
                         beginAtZero: false,
                         min: Math.min(...data) - 2000,
                         max: Math.max(...data) + 2000,
                         ticks: { color: tickColor }, // Dark mode compatible
                         grid: { color: gridColor } // Dark mode compatible
                     }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: tooltipBgColor,
                        titleColor: tooltipTitleColor,
                        bodyColor: tooltipBodyColor,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    // --- End Comparison Chart Logic ---

    function setupPdfViewButtons() {
        console.log("setupPdfViewButtons() called");
        document.querySelectorAll('.view-pdf-btn').forEach(btn => {
            console.log("DEBUG: Adding event listener to button:", btn);
            const inputId = btn.getAttribute('data-inputid');
            const fileInput = document.getElementById(inputId);
            // Get the expected file path from the data-filename attribute
            const filePath = fileInput ? fileInput.getAttribute('data-filename') : null;
            console.log("DEBUG: filePath from data-filename:", filePath, "inputId:", inputId);

            if (btn && fileInput) {
                btn.addEventListener('click', function(event) {
                    console.log("PDF button clicked");
                    console.log("Button ID:", btn.id, "data-inputid:", btn.getAttribute('data-inputid')); // Log button details
                    event.preventDefault();
                    event.stopPropagation();
                    
                    const modal = document.getElementById('pdfModal');
                    const modalMsg = document.getElementById('pdfModalMessage');
                    const pdfFrame = document.getElementById('pdfFrame');
                    
                    console.log("DEBUG: filePath value on click:", filePath, "| input element:", fileInput);

                    if (filePath) {
                        // Check if PDF.js is loaded
                       console.log("DEBUG: typeof window.pdfjsLib =", typeof window.pdfjsLib, "at PDF view click, filePath:", filePath);
                       if (typeof window.pdfjsLib === 'undefined') {
                           console.warn("DEBUG: window.pdfjsLib IS undefined on PDF view attempt! filePath:", filePath);
                           modalMsg.textContent = "PDF viewer is still loading. Please try again in a moment.";
                           modal.style.display = 'block';
                           return;
                       }

                       // Double check
                       if (typeof window.pdfjsLib === 'undefined') {
                            console.error("DEBUG: window.pdfjsLib IS still undefined just before getDocument! filePath:", filePath);
                            modalMsg.textContent = "PDF viewer is still loading. Please try again in a moment.";
                            modal.style.display = 'block';
                            return;
                        }
                        
                        // Resolve full file path relative to workspace root
                        // const timestamp = new Date().getTime(); // Removed timestamp generation
                        const fullPath = encodeURI(filePath); // Use the direct path without timestamp
                        console.log("Loading PDF from:", fullPath, "original filename:", filePath);

                        modalMsg.textContent = "Loading PDF...";
                        modal.style.display = 'block';

                        pdfjsLib.getDocument(fullPath).promise.then(function(pdf) {
    // Get the first page
    pdf.getPage(1).then(function(page) {
        // Use a fixed scale for readability (e.g., 1.5)
        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Append canvas to the modal
        pdfFrame.innerHTML = '';
        pdfFrame.appendChild(canvas);

        // Render PDF page into the canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });

   modalMsg.textContent = `PDF loaded: ${filePath}`; // More informative message
   modal.style.display = 'block';
}).catch(function(error) {
   console.error("PDF.js getDocument error:", error, "Requested Path:", fullPath);
   // Provide more context in the modal
   let userMessage = `Error loading PDF (${filePath}). `;
   if (error && error.message) {
       userMessage += `Details: ${error.message}. `;
   }
   if (error && error.name === 'MissingPDFException') {
        userMessage += 'Please ensure the file exists at the correct path relative to the application.';
   } else {
        userMessage += 'There might be a network issue or the file is corrupted.';
   }
   modalMsg.textContent = userMessage;
   pdfFrame.innerHTML = '<p class="text-danger p-3">Could not load PDF content.</p>'; // Clear frame on error
   modal.style.display = 'block';
});
                   } else {
                       console.error("DEBUG: filePath is falsey! fileInput:", fileInput, fileInput ? fileInput.outerHTML : "(none)");
                       modalMsg.textContent = "No file path specified for this PDF.";
                       pdfFrame.innerHTML = '';
                       modal.style.display = 'block';
                   }
               });
           }
       });
   }

    // Make closePdfModal globally accessible
    window.closePdfModal = function() {
        document.getElementById('pdfModal').style.display = 'none';
        const pdfFrame = document.getElementById('pdfFrame');
        pdfFrame.innerHTML = ""; // Clear the canvas/iframe content
        document.getElementById('pdfModalMessage').textContent = "";
    }