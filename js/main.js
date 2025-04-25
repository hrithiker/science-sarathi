// =======================
// 🚀 CAROUSEL ANIMATION
// =======================

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#headerCarousel");

    if (carousel) {
        carousel.addEventListener("slide.bs.carousel", function () {
            // Hide all captions before animation starts
            gsap.set(".carousel-caption", { opacity: 0, y: 30 });
        });

        carousel.addEventListener("slid.bs.carousel", function () {
            // Animate image smoothly
            gsap.from(".carousel-item.active img", {
                opacity: 0.7,
                scale: 1.1,
                duration: 1,
                ease: "back.out(1.7)",
            });

            // Animate caption when slide is active
            gsap.to(".carousel-item.active .carousel-caption", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
            });
        });
    } else {
        console.error("❌ Carousel element not found! Check your HTML.");
    }
});

// =======================
// 📌 SMOOTH SCROLL TO "BOOK FREE DEMO"
// =======================
document.addEventListener("DOMContentLoaded", function () {
    let bookNowBtn = document.getElementById("bookNowBtn");

    if (bookNowBtn) {
        bookNowBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link action

            let targetSection = document.getElementById("bookFreeDemoSection");
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("❌ ERROR: Target section not found!");
            }
        });
    } else {
        console.error("❌ ERROR: 'Book Now' button not found! Check HTML.");
    }
});

// =======================
// 🎨 IMAGE POPUP FUNCTIONALITY
// =======================
function openPopup(imageSrc, text) {
    if (!imageSrc) return;

    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");

    if (!popup || !popupImage || !popupText) return;

    popupImage.src = imageSrc;
    popupText.innerText = text || "No description available";
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// =======================
// 📧 EMAIL FORM SUBMISSION (EMAILJS)
// =======================
emailjs.init("coP1a9yNMk2NZa3wW"); // Replace with your actual EmailJS Public Key

document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("✅ Form submission intercepted!");

            emailjs.sendForm("service_ob6q4d9", "template_m0c6bmd", this)
                .then(function (response) {
                    console.log("✅ SUCCESS!", response);
                    alert("Email sent successfully!");

                    // Close Bootstrap modal if applicable
                    let modal = document.getElementById("demoModal");
                    if (modal) {
                        let modalInstance = bootstrap.Modal.getInstance(modal);
                        if (modalInstance) modalInstance.hide();
                    }

                    contactForm.reset();
                })
                .catch(function (error) {
                    console.error("❌ FAILED...", error);
                    alert("Error sending email. Please try again.");
                });
        });
    } else {
        console.error("❌ ERROR: Contact form not found!");
    }
});

// =======================
// 🔝 SCROLL TO TOP FUNCTION
// =======================
document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    if (!scrollTopBtn) {
        console.error("❌ ERROR: Scroll-to-Top button not found! Make sure it exists in your HTML.");
        return; // Stop script execution if button is missing
    }

    // Show the button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // Scroll smoothly to the top when clicked
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    console.log("✅ Scroll-to-Top function loaded successfully!");
});

//  popup message for internship

//   document.addEventListener('DOMContentLoaded', function () {
//     var myModal = new bootstrap.Modal(document.getElementById('internshipModal'));
//     myModal.show();
//   });

document.addEventListener('DOMContentLoaded', function () {
    // Check if the modal has already been shown
    if (!localStorage.getItem('modalShown')) {
        var myModal = new bootstrap.Modal(document.getElementById('internshipModal'));
        myModal.show();

        // Set flag in localStorage to prevent the modal from showing again
        localStorage.setItem('modalShown', 'true');
    }
});

