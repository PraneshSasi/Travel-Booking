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
    const init3DBackground = () => {
        const container = document.getElementById('page-3d-canvas-container');
        if (!container) return;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.y = 150; // Look down from top-angle
        camera.position.z = 250;
        camera.position.x = 0;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Fluid wave grid configuration
        const SEPARATION = 15;
        const AMOUNTX = 60;
        const AMOUNTY = 60;

        const numParticles = AMOUNTX * AMOUNTY;
        const positions = new Float32Array(numParticles * 3);
        const scales = new Float32Array(numParticles);

        let i = 0, j = 0;

        // Initialize positions
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
                positions[i + 1] = 0; // y
                positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

                scales[j] = 1;

                i += 3;
                j++;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        // Create warm golden sand colored material
        const material = new THREE.PointsMaterial({
            color: 0xD4A373, // Warm Gold Sand
            size: 2.8,
            transparent: true,
            opacity: 0.75,
            sizeAttenuation: true
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Add some random floating dust particles for depth
        const dustCount = 300;
        const dustPositions = new Float32Array(dustCount * 3);
        for (let d = 0; d < dustCount; d++) {
            dustPositions[d * 3] = (Math.random() - 0.5) * 1000;
            dustPositions[d * 3 + 1] = Math.random() * 500 - 100;
            dustPositions[d * 3 + 2] = (Math.random() - 0.5) * 1000;
        }
        const dustGeometry = new THREE.BufferGeometry();
        dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
        const dustMaterial = new THREE.PointsMaterial({
            color: 0xC2593F, // Warm Terracotta sparks
            size: 1.5,
            transparent: true,
            opacity: 0.45,
            sizeAttenuation: true
        });
        const dustParticles = new THREE.Points(dustGeometry, dustMaterial);
        scene.add(dustParticles);

        // Mouse interaction targets
        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            targetMouseX = (event.clientX - windowHalfX) * 0.15;
            targetMouseY = (event.clientY - windowHalfY) * 0.15;
        });

        document.addEventListener('touchmove', (event) => {
            if (event.touches.length === 1) {
                targetMouseX = (event.touches[0].clientX - windowHalfX) * 0.15;
                targetMouseY = (event.touches[0].clientY - windowHalfY) * 0.15;
            }
        });

        // Scroll interaction
        let scrollPercent = 0;
        window.addEventListener('scroll', () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll <= 0) return;
            scrollPercent = window.scrollY / maxScroll;
        });

        // Animation Loop variables
        let count = 0;

        const animate = () => {
            requestAnimationFrame(animate);

            // Interpolate mouse movements
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            // Camera moves based on mouse and page scroll
            camera.position.x = mouseX * 2.5;
            camera.position.y = 150 - (scrollPercent * 90) + (mouseY * 0.5);
            camera.position.z = 250 - (scrollPercent * 50);
            camera.lookAt(new THREE.Vector3(0, -20 - (scrollPercent * 30), 0));

            // Float the dust particles slowly
            const dustPositionsAttr = dustGeometry.attributes.position.array;
            for (let d = 0; d < dustCount; d++) {
                dustPositionsAttr[d * 3 + 1] += 0.2;
                dustPositionsAttr[d * 3] += Math.sin(count * 0.01 + d) * 0.1;
                
                if (dustPositionsAttr[d * 3 + 1] > 400) {
                    dustPositionsAttr[d * 3 + 1] = -100;
                }
            }
            dustGeometry.attributes.position.needsUpdate = true;

            // Update grid particle heights using double-sine wave math
            const positionsAttr = geometry.attributes.position.array;
            const scalesAttr = geometry.attributes.scale.array;

            let index = 0;
            let scaleIndex = 0;

            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const heightValue = (Math.sin((ix + count) * 0.2) * 20) + (Math.sin((iy + count) * 0.3) * 20);
                    positionsAttr[index + 1] = heightValue;

                    scalesAttr[scaleIndex] = (Math.sin((ix + count) * 0.2) + 1) * 1.5 + (Math.sin((iy + count) * 0.3) + 1) * 1.5;

                    index += 3;
                    scaleIndex++;
                }
            }

            geometry.attributes.position.needsUpdate = true;
            geometry.attributes.scale.needsUpdate = true;

            particles.rotation.y = count * 0.002;

            renderer.render(scene, camera);
            count += 0.035;
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
    };

    // Run 3D Wave Grid Background
    init3DBackground();



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
