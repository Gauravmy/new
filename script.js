// Scroll to Top Button
const scrollBtn = document.getElementById("scrollBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    toggleScrollButton();
};

function toggleScrollButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll smoothly to the top of the page
scrollBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Background Color Change on Scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    if (scrollPosition > 200) {
        header.style.backgroundColor = "#0056b3";
        footer.style.backgroundColor = "#0056b3";
    } else {
        header.style.backgroundColor = "linear-gradient(120deg, #007bff, #00d2ff)";
        footer.style.backgroundColor = "#007bff";
    }
});

// Animate Sections on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', checkSectionVisibility);

function checkSectionVisibility() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

// Smooth Scroll for Internal Links (Navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dark Mode
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = 'Dark Mode';
toggleDarkMode.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Dark Mode Styles
const darkModeStyles = `
    body.dark-mode {
        background-color: #222;
        color: white;
    }

    body.dark-mode header, body.dark-mode footer {
        background-color: #444 !important;
    }

    body.dark-mode section {
        background-color: #333;
        color: #ccc;
    }

    body.dark-mode #scrollBtn {
        background-color: #444;
    }

    body.dark-mode a {
        color: #00d2ff;
    }

    body.dark-mode h2::after {
        background-color: #00d2ff;
    }
`;

// Append Dark Mode CSS to the page
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
