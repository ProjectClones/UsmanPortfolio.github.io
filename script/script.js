
// Typewriter Effect: Display a list of roles one by one
const roles = [
    "WEB DEVELOPER",
    "WEB DESIGNER",
    "BACKEND DEVELOPER",
    "SEO EXPERT"
];

const typingSpeed = 100; // How fast each character is typed
const textContainer = document.querySelector(".typewriter-text");
let currentRoleIndex = 0; // Start with the first role
let currentCharIndex = 0; // Start typing from the first character

// Function to type out the text one character at a time
function typeWriter() {
    if (currentCharIndex < roles[currentRoleIndex].length) {
        textContainer.innerHTML += roles[currentRoleIndex].charAt(currentCharIndex); // Add one character
        currentCharIndex++; // Move to the next character
        setTimeout(typeWriter, typingSpeed); // Continue typing
    } else {
        setTimeout(eraseText, 1000); // Wait 1 second before starting to erase
    }
}

// Function to erase the typed text one character at a time
function eraseText() {
    if (textContainer.innerHTML.length > 0) {
        textContainer.innerHTML = textContainer.innerHTML.slice(0, -1); // Remove one character
        setTimeout(eraseText, 50); // Continue erasing
    } else {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
        currentCharIndex = 0; // Reset to start typing the next role
        setTimeout(typeWriter, 500); // Wait 0.5 seconds before typing the next role
    }
}

// Start the typewriter effect as soon as the page loads
window.onload = typeWriter;


// Skill Section coding

 // Function for Circular Skill Bar Animation
 const animateSkillBars = () => {
    const circleBars = document.querySelectorAll('.circle-skill-bar');

    circleBars.forEach(bar => {
      const skillPercentage = parseInt(bar.getAttribute('data-skill'));
      const textElement = bar.querySelector('.percentage span');
      let currentPercentage = 0;

      // Function to update the skill bar animation
      const updateSkillBar = () => {
        if (currentPercentage <= skillPercentage) {
          currentPercentage++;
          textElement.textContent = `${currentPercentage}%`;

          // Calculate the angle for the conic gradient based on percentage
          const angle = (currentPercentage / 100) * 360;
          bar.style.background = `conic-gradient(aqua ${angle}deg, #ddd 0deg)`;

          // Continue the animation using requestAnimationFrame for smoothness
          requestAnimationFrame(updateSkillBar);
        }
      };

      // Start the animation when the element comes into view
      if (!bar.classList.contains('animated')) {
        updateSkillBar();
        bar.classList.add('animated');  // Prevent re-triggering the animation
      }
    });
  };

  // Intersection Observer to trigger JS animation on visibility
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();  // Trigger the animation once skill bars are in view
        observer.unobserve(entry.target); // Stop observing after the animation is triggered
      }
    });
  }, {
    threshold: 0.5  // Trigger when 50% of the element is in the viewport
  });

  // Observing all skill bars
  const skillBars = document.querySelectorAll('.circle-skill-bar');
  skillBars.forEach(bar => observer.observe(bar));


  // Contatc us form

  document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const confirmationMessage = document.getElementById('confirmation-message');
    const whatsappLink = document.getElementById('whatsapp-link'); // WhatsApp button

    // Real-time validation function
    function validateField(field, pattern) {
        field.addEventListener('input', () => {
            if (pattern.test(field.value.trim())) {
                field.style.borderBottom = '2px solid aqua';
            } else {
                field.style.borderBottom = '2px solid red';
            }
        });
    }

    // Add real-time validation for each field
    validateField(name, /.+/); // Name: Non-empty value
    validateField(phone, /^\d{11}$/); // Phone: Exactly 11 digits
    validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/); // Email: Valid email pattern
    validateField(message, /.+/); // Message: Non-empty value

    // Form submission handler
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Final validation before submission
        if (name.value.trim() === '') {
            name.style.borderBottom = '2px solid red';
            isValid = false;
        }
        if (!/^\d{11}$/.test(phone.value.trim())) {
            phone.style.borderBottom = '2px solid red';
            isValid = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            email.style.borderBottom = '2px solid red';
            isValid = false;
        }
        if (message.value.trim() === '') {
            message.style.borderBottom = '2px solid red';
            isValid = false;
        }

        // If all fields are valid
        if (isValid) {
            confirmationMessage.textContent = `Hello ${name.value.trim()}, there was something wrong with the server. Please contact me via WhatsApp.`;
            confirmationMessage.style.display = 'block';

            // Show the WhatsApp link
            whatsappLink.style.display = 'inline-block';

            // Reset fields and styles
            name.value = '';
            phone.value = '';
            email.value = '';
            message.value = '';
            name.style.borderBottom = '';
            phone.style.borderBottom = '';
            email.style.borderBottom = '';
            message.style.borderBottom = '';
        }
    });
});



// loading animation


    // Show the preloader for at least 5 seconds
    setTimeout(function () {
      // Hide the preloader after 5 seconds
      document.getElementById('preloader').style.display = 'none';
  }, 5000);

  // Offcanvas menu behavior as in your original script
  document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
      link.addEventListener('click', function () {
          const offcanvasElement = document.querySelector('#offcanvasNavbar');
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
          offcanvasInstance.hide();

          const targetId = this.getAttribute('href');
          if (targetId.startsWith('#')) {
              const targetSection = document.querySelector(targetId);
              if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
              }
          }
      });
  });

// finger show 

document.addEventListener('copy', function(e) {
    // Create a custom clipboard data
    e.clipboardData.setData('text/plain', '🖕');
    e.preventDefault();  // Prevent the default copy action
});
