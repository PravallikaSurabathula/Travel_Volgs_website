document.addEventListener("DOMContentLoaded", () => {
    const navbarDiv = document.querySelector(".navbar");

    // Sticky Navbar on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbarDiv.classList.add("navbar-cng");
        } else {
            navbarDiv.classList.remove("navbar-cng");
        }
    });

    // Stop transition and animation during window resizing
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

    // Navbar Toggle for Mobile
    const navbarShowBtn = document.getElementById("navbar-show-btn");
    const navbarCollapse = document.getElementById("navbar-collapse");
    const navbarCloseBtn = document.getElementById("navbar-close-btn");

    if (navbarShowBtn && navbarCollapse && navbarCloseBtn) {
        navbarShowBtn.addEventListener("click", () => {
            navbarCollapse.classList.add("show-navbar");
        });

        navbarCloseBtn.addEventListener("click", () => {
            navbarCollapse.classList.remove("show-navbar");
        });
    }

    // Video Play/Pause Toggle
    let video = document.querySelector(".video-wrapper video");
    let playBtn = document.getElementById("play-btn");

    if (video && playBtn) {
        video.setAttribute("controls", "true"); // Ensure controls are present
        playBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    // Image Modal in Gallery
    const allGalleryItems = document.querySelectorAll(".gallery-item");
    const imgModalDiv = document.getElementById("img-modal-box");
    const modalImg = document.getElementById("modal-img");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    let imgIndex = 0;

    if (allGalleryItems.length > 0 && modalImg) {
        allGalleryItems.forEach((galleryItem, index) => {
            galleryItem.addEventListener("click", () => {
                imgModalDiv.style.display = "block";
                imgIndex = index;
                updateImageModal();
            });
        });

        function updateImageModal() {
            modalImg.src = allGalleryItems[imgIndex].querySelector("img").src;
        }

        if (nextBtn && prevBtn && modalCloseBtn) {
            nextBtn.addEventListener("click", () => {
                imgIndex = (imgIndex + 1) % allGalleryItems.length;
                updateImageModal();
            });

            prevBtn.addEventListener("click", () => {
                imgIndex = (imgIndex - 1 + allGalleryItems.length) % allGalleryItems.length;
                updateImageModal();
            });

            modalCloseBtn.addEventListener("click", () => {
                imgModalDiv.style.display = "none";
            });
        }
    }

    // Blog Image Loading Fix
    const blogImages = document.querySelectorAll(".blog-item img");
    blogImages.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // Contact Form Validation
    let contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const email = document.querySelector(".contact-form input[type='email']").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                e.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }

    // Newsletter Subscription Form Validation
    let subscribeForm = document.querySelector(".subscribe-form form");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function (e) {
            const email = document.querySelector(".subscribe-form input[type='email']").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                e.preventDefault();
                alert("Please enter a valid email address!");
            }
        });
    }
});
