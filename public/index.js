// Loader functionality
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Hide loader after animation completes (2.5s)
    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }

    if (content) {
        setTimeout(() => {
            content.style.display = "block";
        }, 1500);
    }

});

// Simulate loader delay
setTimeout(() => {
    document.querySelectorAll('.slide-in').forEach(el => {
        el.classList.add('animate-in');
    });

    const delayEl = document.querySelector('.delay');
if (delayEl) {
    delayEl.classList.add('animate-delay');
}

}, 1500);


// Wiggle the button every 2 seconds
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.wiggle-btn');
if (btn) {
    setInterval(() => {
        btn.classList.remove('wiggle-btn');
        void btn.offsetWidth; // trigger reflow
        btn.classList.add('wiggle-btn');
    }, 2000);
}
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (hamburger && dropdownMenu && hamburgerIcon && closeIcon) {
        hamburger.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
});





// Dropdown functionality for details elements
document.querySelectorAll('details').forEach((detail) => {
detail.addEventListener('toggle', () => {
    // Close other dropdowns if this one is opened
    if (detail.open) {
        document.querySelectorAll('details').forEach((otherDetail) => {
            if (otherDetail !== detail && otherDetail.open) {
                otherDetail.open = false; // Close the other dropdown
            }
        });
    }

    // Update the icon based on the open state
    const icon = detail.querySelector('.toggle-sign') || detail.querySelector('.faq-toggle-sign');
    if (detail.open) {
        if (icon.classList.contains('toggle-sign')) {
            icon.src = './3d-icons/arrow-down.svg';
        } else if (icon.classList.contains('faq-toggle-sign')) {
            icon.src = './3d-icons/minus.svg';
        }
    } else {
        if (icon.classList.contains('toggle-sign')) {
            icon.src = './3d-icons/arrow-up.svg';
        } else if (icon.classList.contains('faq-toggle-sign')) {
            icon.src = './3d-icons/plus.svg';
        }
    }
});
});


// When the "Choose Us" dropdown is in view, animate it
document.addEventListener("DOMContentLoaded", function () {
const dropdown = document.getElementById('choose-us-dropdown');
if (!dropdown) return;
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dropdown.classList.remove('opacity-0', 'translate-y-10');
                dropdown.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(dropdown);
            }
        });
    },
    { threshold: 0.2 }
);
observer.observe(dropdown);
});


// When the "Industries We Serve" dropdown is in view, animate it
document.addEventListener("DOMContentLoaded", function () {
const dropdown = document.getElementById('industry-dropdown');
    if (!dropdown) return;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dropdown.classList.remove('opacity-0', 'translate-y-10');
                    dropdown.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(dropdown);
                }
            });
        },
        { threshold: 0.2 }
    );
    observer.observe(dropdown);
    }
);


// When the "Industries We Serve" dropdown is in view, animate it
document.addEventListener("DOMContentLoaded", function () {
const dropdown = document.getElementById('industryWeServe');
    if (!dropdown) return;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dropdown.classList.remove('opacity-0', 'translate-y-10');
                    dropdown.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(dropdown);
                }
            });
        },
        { threshold: 0.2 }
    );
    observer.observe(dropdown);
    }
);

// When "ourSolutions" is in view, animate it
document.addEventListener("DOMContentLoaded", function () {
const dropdown = document.getElementById('ourSolutions');
    if (!dropdown) return;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dropdown.classList.remove('opacity-0', 'translate-y-10');
                    dropdown.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(dropdown);
                }
            });
        },
        { threshold: 0.2 }
    );
    observer.observe(dropdown);
    }
);

// When "our mission" is in view, animate it
document.addEventListener("DOMContentLoaded", function () {
const dropdown = document.getElementById('our-mission');
    if (!dropdown) return;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dropdown.classList.remove('opacity-0', 'translate-y-10');
                    dropdown.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(dropdown);
                }
            });
        },
        { threshold: 0.2 }
    );
    observer.observe(dropdown);
    }
);

// When "Home Page" is in view, animate it
document.addEventListener("DOMContentLoaded", function () {
const dropdown = document.getElementById('homePage');
    if (!dropdown) return;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dropdown.classList.remove('opacity-0', 'translate-y-10');
                    dropdown.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(dropdown);
                }
            });
        },
        { threshold: 0.2 }
    );
    observer.observe(dropdown);
    }
);



// Swiper initialization
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});