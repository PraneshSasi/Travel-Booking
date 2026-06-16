document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       GLOBAL LOCATIONS DATABASE
       ========================================== */
    const locationsDb = [
        {
            id: 'dead_sea',
            name: 'Dead Sea',
            country: 'Jordan',
            elevation: '-430m (Lowest point on Earth)',
            img: 'assets/images/dead_sea.png',
            packages: {
                elite: { price: '₹95,000', days: '7 days', name: 'Elite Oasis Retreat' },
                smart: { price: '₹70,000', days: '5 days', name: 'Smart Wellness Escape' },
                budget: { price: '₹50,000', days: '8 days', name: 'Budget Float Tour' }
            }
        },
        {
            id: 'thailand',
            name: 'Thailand Beaches',
            country: 'Thailand',
            elevation: '0m (Low Altitude)',
            img: 'assets/images/thailand.png',
            packages: {
                elite: { price: '₹1,20,000', days: '9 days', name: 'Elite Island Hideaway' },
                smart: { price: '₹90,000', days: '7 days', name: 'Smart Tropical Explorer' },
                budget: { price: '₹75,000', days: '10 days', name: 'Budget Backpacker Special' }
            }
        },
        {
            id: 'maldives',
            name: 'Maldives Lagoon',
            country: 'Maldives',
            elevation: '1.5m (Low Altitude)',
            img: 'assets/images/maldives.png',
            packages: {
                elite: { price: '₹1,50,000', days: '6 days', name: 'Elite Overwater Villa' },
                smart: { price: '₹1,10,000', days: '5 days', name: 'Smart Island Escape' },
                budget: { price: '₹80,000', days: '7 days', name: 'Budget Beach Explorer' }
            }
        },
        {
            id: 'rio',
            name: 'Rio de Janeiro',
            country: 'Brazil',
            elevation: '2m (Low Altitude)',
            img: 'assets/images/rio.png',
            packages: {
                elite: { price: '₹1,60,000', days: '8 days', name: 'Elite Carnival & Copacabana' },
                smart: { price: '₹1,20,000', days: '6 days', name: 'Smart Sugarloaf Adventure' },
                budget: { price: '₹90,000', days: '10 days', name: 'Budget Carioca Wanderer' }
            }
        },
        {
            id: 'london',
            name: 'London',
            country: 'United Kingdom',
            elevation: '11m (Low Altitude)',
            img: 'assets/images/london.png',
            packages: {
                elite: { price: '₹1,80,000', days: '9 days', name: 'Elite Royal Westminster' },
                smart: { price: '₹1,40,000', days: '7 days', name: 'Smart Thames Explorer' },
                budget: { price: '₹1,20,000', days: '11 days', name: 'Budget London Explorer' }
            }
        },
        {
            id: 'dubai',
            name: 'Dubai SkyCity',
            country: 'UAE',
            elevation: '16m (Low Altitude)',
            img: 'assets/images/dubai.png',
            packages: {
                elite: { price: '₹1,20,000', days: '9 days', name: 'Elite Desert Luxury' },
                smart: { price: '₹80,000', days: '7 days', name: 'Smart Skyline Explorer' },
                budget: { price: '₹60,000', days: '12 days', name: 'Budget Souk Wanderer' }
            }
        },
        {
            id: 'kyoto',
            name: 'Kyoto Temples',
            country: 'Japan',
            elevation: '50m (Low Altitude)',
            img: 'assets/images/kyoto.png',
            packages: {
                elite: { price: '₹1,40,000', days: '8 days', name: 'Elite Zen Luxury' },
                smart: { price: '₹1,00,000', days: '6 days', name: 'Smart Cultural Immersion' },
                budget: { price: '₹75,000', days: '9 days', name: 'Budget Shrine Wanderer' }
            }
        },
        {
            id: 'tajmahal',
            name: 'Taj Mahal',
            country: 'India',
            elevation: '171m (Low Altitude)',
            img: 'assets/images/tajmahal.png',
            packages: {
                elite: { price: '₹50,000', days: '5 days', name: 'Elite Imperial Heritage' },
                smart: { price: '₹35,000', days: '4 days', name: 'Smart Golden Triangle' },
                budget: { price: '₹25,000', days: '6 days', name: 'Budget Agra Explorer' }
            }
        },
        {
            id: 'santorini',
            name: 'Santorini Caldera',
            country: 'Greece',
            elevation: '300m (Medium Altitude)',
            img: 'assets/images/santorini.png',
            packages: {
                elite: { price: '₹2,10,000', days: '7 days', name: 'Elite Aegean Sunset' },
                smart: { price: '₹1,50,000', days: '5 days', name: 'Smart Cycladic Explorer' },
                budget: { price: '₹1,10,000', days: '9 days', name: 'Budget Greek Island Wanderer' }
            }
        },
        {
            id: 'banff',
            name: 'Banff National Park',
            country: 'Canada',
            elevation: '1,380m (High Altitude)',
            img: 'assets/images/banff.png',
            packages: {
                elite: { price: '₹2,30,000', days: '9 days', name: 'Elite Rockies Luxury' },
                smart: { price: '₹1,70,000', days: '7 days', name: 'Smart Glacial Explorer' },
                budget: { price: '₹1,30,000', days: '10 days', name: 'Budget Alpine Hiker' }
            }
        },
        {
            id: 'machu_picchu',
            name: 'Machu Picchu',
            country: 'Peru',
            elevation: '2,430m (High Altitude)',
            img: 'assets/images/machu_picchu.png',
            packages: {
                elite: { price: '₹2,50,000', days: '10 days', name: 'Elite Inca Trail VIP' },
                smart: { price: '₹1,90,000', days: '7 days', name: 'Smart Sacred Valley Tour' },
                budget: { price: '₹1,50,000', days: '12 days', name: 'Budget Andean Explorer' }
            }
        },
        {
            id: 'swiss_alps',
            name: 'Swiss Alps',
            country: 'Switzerland',
            elevation: '4,478m (High Altitude)',
            img: 'assets/images/swiss_alps.png',
            packages: {
                elite: { price: '₹2,80,000', days: '9 days', name: 'Elite Matterhorn Luxury' },
                smart: { price: '₹2,00,000', days: '7 days', name: 'Smart Alpine Skier' },
                budget: { price: '₹1,60,000', days: '10 days', name: 'Budget Mountain Backpacker' }
            }
        }
    ];


    /* ==========================================
       Booking Widget Date Toggle (One-Way / Two-Way)
       ========================================== */
    const tripTypeRadios = document.querySelectorAll('input[name="trip-type"]');
    const checkoutGroup = document.getElementById('checkout-group');
    const checkoutInput = document.getElementById('check-out');

    // Function to handle enabling/disabling check-out date
    const toggleCheckoutField = () => {
        const activeRadio = document.querySelector('input[name="trip-type"]:checked');
        if (activeRadio && activeRadio.value === 'one-way') {
            checkoutInput.disabled = true;
            checkoutInput.required = false;
            checkoutGroup.style.opacity = '0.5';
            checkoutGroup.style.pointerEvents = 'none';
        } else {
            checkoutInput.disabled = false;
            checkoutInput.required = true;
            checkoutGroup.style.opacity = '1';
            checkoutGroup.style.pointerEvents = 'auto';
        }
    };

    // Attach listeners
    tripTypeRadios.forEach(radio => {
        radio.addEventListener('change', toggleCheckoutField);
    });

    // Run once on load
    toggleCheckoutField();


    /* ==========================================
       Booking Widget Dropdowns & Counter Functionality
       ========================================== */
    const tabButtons = document.querySelectorAll('.booking-tab');
    const dropdowns = document.querySelectorAll('.tab-dropdown');

    // 1. Toggle dropdowns on click
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const parentWrapper = button.closest('.booking-tab-wrapper');
            const targetDropdown = parentWrapper.querySelector('.tab-dropdown');

            // Close other dropdowns
            dropdowns.forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.classList.remove('active');
                }
            });

            // Toggle target
            targetDropdown.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.booking-tab-wrapper')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // 2. Flights/Hotels/Packages selection
    const flightsDropdownItems = document.querySelectorAll('#dropdown-flights .dropdown-item');
    const flightsTabButton = document.getElementById('tab-flights');
    const destinationInputLabel = document.querySelector('label[for="destination"]');
    const destinationInput = document.getElementById('destination');

    flightsDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            flightsDropdownItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const selectedIcon = item.querySelector('i').className;
            const selectedText = item.textContent.trim();
            flightsTabButton.querySelector('i').className = selectedIcon;
            flightsTabButton.querySelector('span').textContent = selectedText;

            const val = item.dataset.value;
            if (val === 'hotels') {
                destinationInputLabel.textContent = 'Hotels/City +';
                destinationInput.placeholder = 'Where are you staying?';
            } else if (val === 'packages') {
                destinationInputLabel.textContent = 'Packages +';
                destinationInput.placeholder = 'Where do you want to explore?';
            } else {
                destinationInputLabel.textContent = 'Destinations +';
                destinationInput.placeholder = 'Where are you going?';
            }

            item.closest('.tab-dropdown').classList.remove('active');
        });
    });

    // 3. Class Selection (Economy/Business/etc.)
    const classDropdownItems = document.querySelectorAll('#dropdown-class .dropdown-item');
    const classTabButton = document.getElementById('tab-class');

    classDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            classDropdownItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const selectedText = item.textContent.trim();
            classTabButton.querySelector('span').textContent = selectedText;

            item.closest('.tab-dropdown').classList.remove('active');
        });
    });

    // 4. Passenger Counter Logic (Adults/Children/Infants)
    const passengerTabButton = document.getElementById('tab-passengers');
    const counters = {
        adults: { val: 1, min: 1, max: 9, element: document.getElementById('val-adults') },
        children: { val: 0, min: 0, max: 9, element: document.getElementById('val-children') },
        infants: { val: 0, min: 0, max: 9, element: document.getElementById('val-infants') }
    };

    const updatePassengerTabLabel = () => {
        const adults = counters.adults.val;
        const children = counters.children.val;
        const infants = counters.infants.val;

        if (children > 0 || infants > 0) {
            const total = adults + children + infants;
            passengerTabButton.querySelector('span').textContent = `${total} Guest${total > 1 ? 's' : ''}`;
        } else {
            passengerTabButton.querySelector('span').textContent = `${adults} Adult${adults > 1 ? 's' : ''}`;
        }
    };

    const updateButtonStates = (type) => {
        const counter = counters[type];
        const row = counter.element.closest('.counter-row');
        const minusBtn = row.querySelector('.minus');
        const plusBtn = row.querySelector('.plus');

        minusBtn.disabled = counter.val <= counter.min;
        plusBtn.disabled = counter.val >= counter.max;
    };

    Object.keys(counters).forEach(type => updateButtonStates(type));

    document.querySelectorAll('.counter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const type = btn.dataset.type;
            const isPlus = btn.classList.contains('plus');
            const counter = counters[type];

            if (isPlus && counter.val < counter.max) {
                counter.val++;
            } else if (!isPlus && counter.val > counter.min) {
                counter.val--;
            }

            counter.element.textContent = counter.val;
            updateButtonStates(type);
            updatePassengerTabLabel();
        });
    });


    /* ==========================================
       Exclusive Deals - Dynamic Price and Duration
       ========================================== */
    const dealsData = {
        dubai: {
            elite: { price: '₹1,20,000', days: '9 days' },
            smart: { price: '₹80,000', days: '7 days' },
            budget: { price: '₹60,000', days: '12 days' }
        },
        london: {
            elite: { price: '₹1,80,000', days: '9 days' },
            smart: { price: '₹1,40,000', days: '7 days' },
            budget: { price: '₹1,20,000', days: '11 days' }
        },
        thailand: {
            elite: { price: '₹1,20,000', days: '9 days' },
            smart: { price: '₹90,000', days: '7 days' },
            budget: { price: '₹75,000', days: '10 days' }
        }
    };

    const dealCards = document.querySelectorAll('.deal-card');

    dealCards.forEach(card => {
        const destKey = card.dataset.destination;
        const durationText = card.querySelector('.deal-duration');
        const priceText = card.querySelector('.price-amount');
        const options = card.querySelectorAll('.deal-option input');

        options.forEach(radio => {
            radio.addEventListener('change', () => {
                const selectedValue = radio.value;
                const selectedData = dealsData[destKey][selectedValue];

                if (selectedData) {
                    // Update Duration text
                    durationText.textContent = selectedData.days;

                    // Update Price with a nice fade-in animation
                    priceText.style.opacity = '0';
                    setTimeout(() => {
                        priceText.textContent = selectedData.price;
                        priceText.style.opacity = '1';
                    }, 150);
                }
            });
        });
    });


    /* ==========================================
       Popular Destinations Carousel Slider
       ========================================== */
    const carouselTrack = document.getElementById('carousel-track');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');

    let scrollAmount = 0;
    
    // Function to calculate maximum scroll limit dynamically based on viewport width
    const getMaxScroll = () => {
        const containerWidth = document.querySelector('.carousel-container').clientWidth;
        const trackWidth = carouselTrack.scrollWidth;
        return Math.max(0, trackWidth - containerWidth);
    };

    // Calculate item width including gap
    const getItemWidth = () => {
        const card = document.querySelector('.destination-card');
        if (!card) return 0;
        const style = window.getComputedStyle(card);
        const cardWidth = card.clientWidth;
        const marginRight = parseFloat(style.marginRight) || 0;
        const marginLeft = parseFloat(style.marginLeft) || 0;
        const gap = 24; // from CSS gap: 1.5rem = 24px
        return cardWidth + gap;
    };

    // Next click handler
    carouselNext.addEventListener('click', () => {
        const maxScroll = getMaxScroll();
        const stepWidth = getItemWidth();
        
        scrollAmount += stepWidth;
        if (scrollAmount > maxScroll) {
            scrollAmount = maxScroll; // snap to end
        }
        carouselTrack.style.transform = `translateX(-${scrollAmount}px)`;
    });

    // Prev click handler
    carouselPrev.addEventListener('click', () => {
        const stepWidth = getItemWidth();
        
        scrollAmount -= stepWidth;
        if (scrollAmount < 0) {
            scrollAmount = 0; // snap to beginning
        }
        carouselTrack.style.transform = `translateX(-${scrollAmount}px)`;
    });

    // Adjust slide position on resize
    window.addEventListener('resize', () => {
        const maxScroll = getMaxScroll();
        if (scrollAmount > maxScroll) {
            scrollAmount = maxScroll;
            carouselTrack.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });


    /* ==========================================
       Hero Pills Interactivity (Mock navigation)
       ========================================== */
    const pillPageNum = document.querySelector('.pill-page-number');
    const pillArrowPrev = document.querySelectorAll('.pill-arrow-btn')[0];
    const pillArrowNext = document.querySelectorAll('.pill-arrow-btn')[1];
    
    let currentPillPage = 1;
    const totalPillPages = 4;

    if (pillArrowPrev && pillArrowNext && pillPageNum) {
        pillArrowNext.addEventListener('click', () => {
            currentPillPage++;
            if (currentPillPage > totalPillPages) currentPillPage = 1;
            pillPageNum.textContent = `${currentPillPage} / ${totalPillPages}`;
            simulatePillChange();
        });

        pillArrowPrev.addEventListener('click', () => {
            currentPillPage--;
            if (currentPillPage < 1) currentPillPage = totalPillPages;
            pillPageNum.textContent = `${currentPillPage} / ${totalPillPages}`;
            simulatePillChange();
        });
    }

    const simulatePillChange = () => {
        const pillImages = document.querySelectorAll('.pill-img');
        pillImages.forEach((img, idx) => {
            // Apply scale pop on update
            img.style.transform = 'scale(0.8)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 100 * idx);
        });
    };


    /* ==========================================
       Booking Form Submission & Validation
       ========================================== */
    const bookingForm = document.getElementById('flight-booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const destinationVal = document.getElementById('destination').value;
            const checkinVal = document.getElementById('check-in').value;
            const checkoutVal = document.getElementById('check-out').value;
            const guestsVal = document.getElementById('guests').value;
            const tripType = document.querySelector('input[name="trip-type"]:checked').value;

            // Simple validation check: checkout date must be after checkin date
            if (tripType === 'round-trip' && checkinVal && checkoutVal) {
                const checkinDate = new Date(checkinVal);
                const checkoutDate = new Date(checkoutVal);

                if (checkoutDate <= checkinDate) {
                    alert('Check-Out date must be after the Check-In date.');
                    return;
                }
            }

            // Find matching destination to open modal
            const match = locationsDb.find(loc => 
                loc.name.toLowerCase() === destinationVal.toLowerCase()
            ) || locationsDb.find(loc => 
                loc.name.toLowerCase().includes(destinationVal.toLowerCase()) ||
                loc.country.toLowerCase().includes(destinationVal.toLowerCase())
            );

            if (match) {
                openBookingModal(match.id);
            } else {
                alert(`Could not find a direct match for "${destinationVal}". Opening default search results.`);
                openBookingModal('swiss_alps');
            }
        });
    }

    /* ==========================================
       WebGL 3D Full-Page Background (Three.js)
       ========================================== */
    const init3DGlobe = () => {
        const container = document.getElementById('page-3d-canvas-container');
        if (!container) return;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 4.5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Group to hold the Globe components (so we can rotate them together)
        const globeGroup = new THREE.Group();
        scene.add(globeGroup);

        // 1. Globe Wireframe Sphere
        const sphereGeo = new THREE.SphereGeometry(1.5, 24, 24);
        const sphereMat = new THREE.MeshBasicMaterial({
            color: 0x00d2ff,
            wireframe: true,
            transparent: true,
            opacity: 0.12
        });
        const globeWireframe = new THREE.Mesh(sphereGeo, sphereMat);
        globeGroup.add(globeWireframe);

        // 2. Particle Globe (Points)
        const particleGeo = new THREE.BufferGeometry();
        const particleCount = 500;
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = 1.5;
            
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        
        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0x00d2ff,
            size: 0.035,
            transparent: true,
            opacity: 0.75
        });
        const globePoints = new THREE.Points(particleGeo, particleMat);
        globeGroup.add(globePoints);

        // 3. Orbit Rings (Torus/Ring style)
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x2563eb,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.35
        });

        // Ring 1 (Horizontal Orbit)
        const ringGeo1 = new THREE.RingGeometry(1.8, 1.815, 64);
        const orbitRing1 = new THREE.Mesh(ringGeo1, ringMat);
        orbitRing1.rotation.x = Math.PI / 2;
        globeGroup.add(orbitRing1);

        // Ring 2 (Tilted Orbit)
        const ringGeo2 = new THREE.RingGeometry(2.0, 2.015, 64);
        const orbitRing2 = new THREE.Mesh(ringGeo2, ringMat);
        orbitRing2.rotation.x = Math.PI / 4;
        orbitRing2.rotation.y = Math.PI / 4;
        globeGroup.add(orbitRing2);

        // Add 3D markers for cities
        const markerGeo = new THREE.SphereGeometry(0.04, 8, 8);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xff3b30 });
        const addMarker = (lat, lon) => {
            const radLat = (lat * Math.PI) / 180;
            const radLon = (lon * Math.PI) / 180;
            const r = 1.5;
            const marker = new THREE.Mesh(markerGeo, markerMat);
            marker.position.x = r * Math.cos(radLat) * Math.cos(radLon);
            marker.position.y = r * Math.sin(radLat);
            marker.position.z = r * Math.cos(radLat) * Math.sin(radLon);
            globeGroup.add(marker);
        };

        // Add markers
        addMarker(25.2, 55.2);   // Dubai
        addMarker(51.5, -0.1);   // London
        addMarker(15.8, 100.9);  // Thailand
        addMarker(51.1, -115.5); // Canada (Banff)
        addMarker(27.1, 78.0);   // India (Agra)

        // 4. Background Starfield (Drifting cosmic stars)
        const starGeo = new THREE.BufferGeometry();
        const starCount = 1000;
        const starPositions = new Float32Array(starCount * 3);
        
        for (let i = 0; i < starCount; i++) {
            starPositions[i * 3] = (Math.random() - 0.5) * 20;
            starPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            // Spread along depth
            starPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMat = new THREE.PointsMaterial({
            color: 0x64748b,
            size: 0.02,
            transparent: true,
            opacity: 0.45
        });
        const starfield = new THREE.Points(starGeo, starMat);
        scene.add(starfield);

        // Position Globe Group to align with the Hero plane visual on desktop
        const positionGlobeGroup = () => {
            if (window.innerWidth > 1024) {
                globeGroup.position.x = 1.25; // Shift right
                globeGroup.position.y = 0.35;
                globeGroup.scale.set(1, 1, 1);
            } else {
                globeGroup.position.x = 0;    // Center on mobile
                globeGroup.position.y = -0.55;
                globeGroup.scale.set(0.85, 0.85, 0.85); // Scale down slightly
            }
        };
        positionGlobeGroup();

        // Mouse Interactivity (Drag-Anywhere to Rotate Space)
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        document.addEventListener('mousedown', (e) => {
            // Ignore drags on links, buttons, inputs, select boxes or cards to avoid visual clashing
            if (e.target.closest('button, input, select, a, .deal-card, .destination-card, .testimonial-card, .header, .nav')) return;
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            // Spin both globe and starfield slightly to create parallax rotate
            globeGroup.rotation.y += deltaMove.x * 0.003;
            globeGroup.rotation.x += deltaMove.y * 0.003;
            starfield.rotation.y += deltaMove.x * 0.0005;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Touch drag controls
        document.addEventListener('touchstart', (e) => {
            if (e.target.closest('button, input, select, a, .deal-card, .destination-card, .testimonial-card, .header, .nav')) return;
            if (e.touches.length === 1) {
                isDragging = true;
                previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            const deltaMove = {
                x: e.touches[0].clientX - previousMousePosition.x,
                y: e.touches[0].clientY - previousMousePosition.y
            };
            globeGroup.rotation.y += deltaMove.x * 0.003;
            globeGroup.rotation.x += deltaMove.y * 0.003;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
        });

        // 5. Scroll-driven Camera fly-through
        let scrollPercent = 0;
        window.addEventListener('scroll', () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll <= 0) return;
            scrollPercent = window.scrollY / maxScroll;
            
            // Move camera down the Y axis to fly past the globe and down the page sections
            camera.position.y = -scrollPercent * 6.5;
            camera.position.z = 4.5 - scrollPercent * 1.5;
            
            // Translate starfield forward to make stars feel closer
            starfield.position.z = scrollPercent * 3.5;
            starfield.rotation.y = scrollPercent * 0.25;
            
            // Auto rotate adapts on scroll
            globeGroup.rotation.y = scrollPercent * 1.5;
        });

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            
            // Auto-rotate globe and stars if not dragging
            if (!isDragging) {
                globeGroup.rotation.y += 0.0015;
                globeGroup.rotation.x += 0.0003;
                starfield.rotation.y += 0.0002;
            }

            orbitRing1.rotation.z += 0.003;
            orbitRing2.rotation.z -= 0.002;

            renderer.render(scene, camera);
        };
        animate();

        // Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            positionGlobeGroup();
        };
        window.addEventListener('resize', handleResize);
    };

    // Run 3D Space Background
    init3DGlobe();


    /* ==========================================
       3D Card Parallax Tilt Effect
       ========================================== */
    const init3DCardTilt = () => {
        const cards = document.querySelectorAll('.deal-card, .destination-card, .testimonial-card');

        cards.forEach(card => {
            if (!card.querySelector('.card-glare')) {
                const glare = document.createElement('div');
                glare.className = 'card-glare';
                card.appendChild(glare);
            }

            const glare = card.querySelector('.card-glare');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const maxRotationX = 10;
                const maxRotationY = 10;

                const rotateX = ((centerY - y) / centerY) * maxRotationX;
                const rotateY = ((x - centerX) / centerX) * maxRotationY;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                glare.style.background = '';
            });
        });
    };

    // Run Card Tilt
    init3DCardTilt();


    /* ==========================================
       Scroll-Driven 3D Section Entrance Animations
       ========================================== */
    const init3DScrollObserver = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.05
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-3d-section').forEach(section => {
            observer.observe(section);
        });
    };

    // Run Scroll Observer
    init3DScrollObserver();


    /* ==========================================
       Awwwards Custom Magic Cursor
       ========================================== */
    const initCustomCursor = () => {
        // Only run on desktop devices with mice
        if (window.matchMedia('(pointer: fine)').matches) {
            const cursor = document.querySelector('.custom-cursor');
            const cursorDot = document.querySelector('.custom-cursor-dot');
            const cursorText = document.querySelector('.custom-cursor-text');
            
            if (!cursor || !cursorDot) return;

            let targetX = window.innerWidth / 2;
            let targetY = window.innerHeight / 2;
            
            let trailX = targetX;
            let trailY = targetY;
            let dotX = targetX;
            let dotY = targetY;

            // Track mouse positions
            window.addEventListener('mousemove', (e) => {
                targetX = e.clientX;
                targetY = e.clientY;
            });

            // Smooth linear interpolation animation loop
            const updateCursorPositions = () => {
                trailX += (targetX - trailX) * 0.12;
                trailY += (targetY - trailY) * 0.12;

                dotX += (targetX - dotX) * 0.35;
                dotY += (targetY - dotY) * 0.35;

                cursor.style.left = `${trailX}px`;
                cursor.style.top = `${trailY}px`;
                
                cursorDot.style.left = `${dotX}px`;
                cursorDot.style.top = `${dotY}px`;

                requestAnimationFrame(updateCursorPositions);
            };
            updateCursorPositions();

            // Hover Morph listeners
            document.addEventListener('mouseover', (e) => {
                const target = e.target;
                
                const destinationCard = target.closest('.destination-card');
                const dealCard = target.closest('.deal-card');
                const testimonialCard = target.closest('.testimonial-card');
                const suggestionItem = target.closest('.suggestion-item');
                const modalOption = target.closest('.modal-package-option');
                
                if (destinationCard) {
                    cursor.classList.add('explore');
                    cursorDot.classList.add('explore');
                    cursorText.textContent = 'EXPLORE';
                } else if (dealCard || testimonialCard || suggestionItem || modalOption) {
                    cursor.classList.add('explore');
                    cursorDot.classList.add('explore');
                    cursorText.textContent = 'EXPLORE';
                } else if (target.closest('a, button, input, select, textarea, label, .pill-arrow-btn, .carousel-arrow-btn, .modal-close-btn')) {
                    cursor.classList.add('hovered');
                    cursorDot.classList.add('hovered');
                } else {
                    cursor.className = 'custom-cursor';
                    cursorDot.className = 'custom-cursor-dot';
                }
            });

            document.addEventListener('mouseout', () => {
                cursor.className = 'custom-cursor';
                cursorDot.className = 'custom-cursor-dot';
            });
        }
    };

    // Run custom cursor
    initCustomCursor();


    /* ==========================================
       DYNAMIC SEARCH & PRICING MODAL
       ========================================== */
    const headerSearchInput = document.getElementById('header-search-input');
    const headerSuggestions = document.getElementById('header-search-suggestions');
    const bookingSearchInput = document.getElementById('destination');
    const bookingSuggestions = document.getElementById('search-suggestions');

    const modal = document.getElementById('search-results-modal');
    const modalImg = document.getElementById('modal-dest-image');
    const modalElevation = document.getElementById('modal-dest-elevation');
    const modalTitle = document.getElementById('modal-dest-title');
    const modalCountry = document.getElementById('modal-dest-country');
    const modalOptionsContainer = document.querySelector('.modal-package-options');
    const modalTotalPrice = document.getElementById('modal-total-price');
    const modalCloseBtn = modal.querySelector('.modal-close-btn');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const confirmBookingBtn = modal.querySelector('.btn-confirm-booking');

    const getMinPrice = (packagesObj) => {
        const prices = [
            parseInt(packagesObj.elite.price.replace(/[^\d]/g, '')),
            parseInt(packagesObj.smart.price.replace(/[^\d]/g, '')),
            parseInt(packagesObj.budget.price.replace(/[^\d]/g, ''))
        ];
        return '₹' + Math.min(...prices).toLocaleString('en-IN');
    };

    const renderSuggestions = (query, container, inputField) => {
        container.innerHTML = '';
        if (!query.trim()) {
            container.classList.remove('active');
            return;
        }

        const filtered = locationsDb.filter(loc => 
            loc.name.toLowerCase().includes(query.toLowerCase()) || 
            loc.country.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
            const noMatch = document.createElement('div');
            noMatch.className = 'suggestion-item';
            noMatch.style.color = 'var(--slate-500)';
            noMatch.style.fontStyle = 'italic';
            noMatch.textContent = 'No matching destinations';
            container.appendChild(noMatch);
            container.classList.add('active');
            return;
        }

        filtered.forEach(loc => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.dataset.id = loc.id;
            item.innerHTML = `
                <div class="suggestion-info">
                    <span class="suggestion-name">${loc.name}</span>
                    <span class="suggestion-meta">${loc.country} | Elev: ${loc.elevation.split(' ')[0]}</span>
                </div>
                <span class="suggestion-price">From ${getMinPrice(loc.packages)}</span>
            `;

            item.addEventListener('click', (e) => {
                e.stopPropagation();
                inputField.value = loc.name;
                container.classList.remove('active');
                openBookingModal(loc.id);
            });

            container.appendChild(item);
        });

        container.classList.add('active');
    };

    const openBookingModal = (destId) => {
        const destination = locationsDb.find(loc => loc.id === destId);
        if (!destination) return;

        modalImg.src = destination.img;
        modalImg.alt = destination.name;
        modalElevation.textContent = destination.elevation;
        modalTitle.textContent = destination.name;
        modalCountry.textContent = destination.country;

        modalOptionsContainer.innerHTML = '';
        const packages = destination.packages;
        const packageKeys = ['elite', 'smart', 'budget'];
        
        packageKeys.forEach((key) => {
            const pack = packages[key];
            const isChecked = key === 'elite' ? 'checked' : '';
            
            const label = document.createElement('label');
            label.className = 'deal-option modal-package-option';
            label.innerHTML = `
                <input type="radio" name="modal-package" value="${key}" ${isChecked}>
                <span class="deal-dot"></span>
                <div class="option-details">
                    <span class="option-name">${pack.name}</span>
                    <span class="option-days">${pack.days}</span>
                </div>
                <span class="option-price">${pack.price}</span>
            `;

            const radio = label.querySelector('input');
            radio.addEventListener('change', () => {
                updateModalTotalPrice(pack.price);
            });

            modalOptionsContainer.appendChild(label);
        });

        updateModalTotalPrice(packages.elite.price);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const updateModalTotalPrice = (priceStr) => {
        modalTotalPrice.style.opacity = '0';
        setTimeout(() => {
            modalTotalPrice.textContent = priceStr;
            modalTotalPrice.style.opacity = '1';
        }, 150);
    };

    const closeBookingModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    const triggerSearchSubmit = (inputValue) => {
        if (!inputValue.trim()) return;
        const match = locationsDb.find(loc => 
            loc.name.toLowerCase() === inputValue.toLowerCase()
        ) || locationsDb.find(loc => 
            loc.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            loc.country.toLowerCase().includes(inputValue.toLowerCase())
        );

        if (match) {
            openBookingModal(match.id);
        } else {
            alert(`No exact matches for "${inputValue}". Opening default Alpine results.`);
            openBookingModal('swiss_alps');
        }
    };

    // Listeners for inputs
    headerSearchInput.addEventListener('input', () => {
        renderSuggestions(headerSearchInput.value, headerSuggestions, headerSearchInput);
    });

    bookingSearchInput.addEventListener('input', () => {
        renderSuggestions(bookingSearchInput.value, bookingSuggestions, bookingSearchInput);
    });

    headerSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            triggerSearchSubmit(headerSearchInput.value);
            headerSuggestions.classList.remove('active');
        }
    });

    bookingSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            triggerSearchSubmit(bookingSearchInput.value);
            bookingSuggestions.classList.remove('active');
        }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-search-group')) {
            headerSuggestions.classList.remove('active');
        }
        if (!e.target.closest('.destination-group')) {
            bookingSuggestions.classList.remove('active');
        }
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBookingModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeBookingModal);
    
    if (confirmBookingBtn) {
        confirmBookingBtn.addEventListener('click', () => {
            const selectedRadio = modal.querySelector('input[name="modal-package"]:checked');
            const packageName = selectedRadio ? selectedRadio.closest('.modal-package-option').querySelector('.option-name').textContent : '';
            const price = modalTotalPrice.textContent;
            
            alert(`🎉 Booking Confirmed!\n\nDestination: ${modalTitle.textContent}\nPackage: ${packageName}\nTotal Price: ${price}\n\nThank you for choosing SkyNest! Your flight details have been sent to your email.`);
            closeBookingModal();
        });
    }

    // Connect destination cards in carousel to modal opening
    const destinationCards = document.querySelectorAll('.destination-card');
    const nameToIdMap = {
        'swiss alps': 'swiss_alps',
        'maldives': 'maldives',
        'machu picchu': 'machu_picchu',
        'dead sea': 'dead_sea',
        'santorini': 'santorini',
        'banff national park': 'banff',
        'kyoto temples': 'kyoto',
        'taj mahal': 'tajmahal'
    };

    destinationCards.forEach(card => {
        card.addEventListener('click', () => {
            const h4 = card.querySelector('h4');
            if (h4) {
                const nameKey = h4.textContent.trim().toLowerCase();
                const destId = nameToIdMap[nameKey];
                if (destId) {
                    openBookingModal(destId);
                }
            }
        });
    });

    // Connect deal cards "Learn More" buttons to modal opening
    document.querySelectorAll('.deal-card .btn-learn-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const card = btn.closest('.deal-card');
            if (card) {
                const destId = card.dataset.destination;
                if (destId) {
                    openBookingModal(destId);
                }
            }
        });
    });

});
