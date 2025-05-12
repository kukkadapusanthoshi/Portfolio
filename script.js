
        // Console typing effect
        const consoleText = document.getElementById('console-text');
        const messages = [
            "> Hello World!",
            "> I'm a Java Developer",
            "> Specializing in robust applications",
            "> With experience in Machine Learning",
            "> Let's build something great together!"
        ];
        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;

        function type() {
            const currentMessage = messages[messageIndex];
            
            if (isDeleting) {
                consoleText.textContent = "> " + currentMessage.substring(0, charIndex - 1);
                charIndex--;
            } else {
                consoleText.textContent = "> " + currentMessage.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentMessage.length) {
                isEnd = true;
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                messageIndex++;
                if (messageIndex === messages.length) {
                    messageIndex = 0;
                }
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(type, isEnd ? 1000 : speed);
        }

        // Start the typing effect
        setTimeout(type, 1000);

        // Smooth scrolling for navigation
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });

        // Add animation to elements when they come into view
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Add scroll event listener
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on page load
        animateOnScroll();
