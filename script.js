const navigation = document.querySelector(".navigation");
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Changed from 200 to 100

        navigation.classList.add("sticky");
    } else {
        navigation.classList.remove("sticky");
    }
});

const feat = document.querySelector(".Features");
const featured = document.querySelector(".dropdown");

feat.addEventListener("click", (event) => {
    console.log("clicked");
    featured.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!feat.contains(event.target) && !featured.contains(event.target)) {
        featured.classList.remove("active");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("myvid");
    let played = false;

    let observe = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !played) {
                video.play();
                played = true;
            }
        });
    }, { threshold: 0.5 });
    observe.observe(video);
});


// Slack Clone Section
const slackVideo = document.querySelector(".video-container video");
const textSections = document.querySelectorAll(".text-container");
const greenShape = document.querySelector(".green-shape");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            slackVideo.classList.add("show");
        } else {
            slackVideo.classList.remove("show");
        }
    });
}, { threshold: 0.5 });

textSections.forEach((section) => observer.observe(section));

// Parallax Effect for Slack-like Animation
window.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll(".parallax");
    let scrollY = window.scrollY;

    parallaxElements.forEach((element) => {
        let speed = element.getAttribute("data-speed"); // Different speeds for different elements
        element.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

function toggleSticky() {
    const videos = document.querySelectorAll(".video-1");
    const viewportHeight = window.innerHeight;

    videos.forEach(video => {
        const rect = video.getBoundingClientRect();

        if (rect.top >= viewportHeight * 0.2 && rect.top <= viewportHeight * 0.7) {
            video.classList.add("video-show");
        } else {
            video.classList.remove("video-show");
        }
    });
}

window.addEventListener("scroll", toggleSticky);

document.querySelectorAll(".video").forEach(video => {
    video.addEventListener("mouseenter", function () {
        // Pause all videos and hide controls
        document.querySelectorAll(".video").forEach(v => {
            v.pause();
            v.controls = false; // Hide controls
        });

        // Play only the hovered video and show controls
        this.play();
        this.controls = true; // Show controls
    });

    video.addEventListener("mouseleave", function () {
        this.controls = false; // Hide controls when not hovered
    });
});







function toggleMobileNavigation() {
    const navigation = document.querySelector('.navigation');
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburgerOpen = document.querySelector('.hamburger-open');
    const hamburgerClosed = document.querySelector('.hamburger-closed');

    if (!navigation || !mobileNav || !hamburgerOpen || !hamburgerClosed) {
        console.error("One or more elements not found.");
        return;
    }

    hamburgerOpen.addEventListener('click', () => {
        navigation.classList.add('navigation-show');
        mobileNav.classList.add('mobile-nav-hidden');
        mobileNav.classList.remove('mobile-nav');
        hamburgerClosed.style.display = 'block';
        hamburgerOpen.style.display = 'none';
    });

    hamburgerClosed.addEventListener('click', () => {
        navigation.classList.remove('navigation-show');
        mobileNav.classList.remove('mobile-nav-hidden');
        mobileNav.classList.add('mobile-nav');
        hamburgerOpen.style.display = 'block';
        hamburgerClosed.style.display = 'none';
    });

    // Ensure hamburgerClosed is hidden on initial load.
    hamburgerClosed.style.display = 'none';
}

toggleMobileNavigation();