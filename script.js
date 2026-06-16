document.addEventListener('DOMContentLoaded', () => {

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
       Booking Widget Tab Selection
       ========================================== */
    const bookingTabs = document.querySelectorAll('.booking-tab');
    
    bookingTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real application, clicking these tabs might open a dropdown or switch context
            // Here, we just toggle active styling for demonstration
            bookingTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Feedback/Log (simulating sub-selections)
            const tabName = tab.querySelector('span').textContent;
            console.log(`Booking Tab Active: ${tabName}`);
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

            // Mock submission feedback
            alert(`Search initiated successfully!\n\nTrip Type: ${tripType === 'one-way' ? 'One Way' : 'Two Way'}\nDestination: ${destinationVal}\nCheck-In: ${checkinVal}\n${tripType === 'round-trip' ? 'Check-Out: ' + checkoutVal + '\n' : ''}Guests: ${guestsVal}`);
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
                
                if (destinationCard) {
                    cursor.classList.add('explore');
                    cursorDot.classList.add('explore');
                    cursorText.textContent = 'DRAG';
                } else if (dealCard || testimonialCard) {
                    cursor.classList.add('explore');
                    cursorDot.classList.add('explore');
                    cursorText.textContent = 'EXPLORE';
                } else if (target.closest('a, button, input, select, textarea, label, .pill-arrow-btn, .carousel-arrow-btn')) {
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

});
