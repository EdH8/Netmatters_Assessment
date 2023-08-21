//STICKY HEADER

  // Get the header element
  const header = document.querySelector('.head_nav_container');

  // Store the initial scroll position
  let prevScrollPos = window.scrollY;

  // Function to handle scroll event
  function handleScroll() {
    // Get the current vertical scroll position
    const currentScrollPos = window.scrollY;

    // Check the scrolling direction
    const scrollingDown = currentScrollPos > prevScrollPos;

    // Check if the user has scrolled down more than 10 pixels, then hide the header; otherwise, reveal it
    if (scrollingDown && currentScrollPos > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    // Update the previous scroll position with the current one
    prevScrollPos = currentScrollPos;
  }

  // Attach the scroll event listener to the window
  window.addEventListener('scroll', handleScroll);






//HAMBURGER NAVBAR

const hamburger = document.getElementsByClassName('hamburger-menu')[0];
const sideMenu = document.getElementsByClassName('side_menu')[0];
const linksMenu = document.getElementsByClassName('menu_sections')[0];
const sideNav = document.getElementsByClassName('side_nav')[0];
const container = document.getElementsByClassName('container')[0];

hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    sideNav.classList.toggle('active');
    container.classList.toggle('active');
    hamburger.classList.toggle('active')

    if (container.classList.contains('active')) {
        console.log('button clicked');
    } else {
        console.log('Disabled clicked');
    }
});

linksMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    hamburger.classList.remove('active');
    sideNav.classList.remove('active');
    container.classList.remove('active');
    console.log('link clicked');
});

sideNav.addEventListener('click', () => {
  sideMenu.classList.toggle('active')
  hamburger.classList.toggle('active')
  container.classList.toggle('active')
  console.log('link clicked')
} )

// Mousedown event listener to handle clicks inside the container area when it's active
container.addEventListener('mousedown', (event) => {
    if (container.classList.contains('active') && !sideMenu.contains(event.target)) {
        sideMenu.classList.remove('active');
        hamburger.classList.remove('active');
        container.classList.remove('active');
        console.log('Clicked inside the container area');
    }
});



//COOKIE CONSENT

  container.addEventListener('mousedown', (event) => {
    if (!document.querySelector(".cookie_container").style.display === "block" &&
        container.classList.contains('jko') && !sideMenu.contains(event.target)) {
        sideMenu.classList.remove('active');
        hamburger.classList.remove('active');
        container.classList.remove('active');
        console.log('Clicked inside the container area');
    }
});

function acceptCookies() {
    document.querySelector(".cookie_container").style.display = "none";
    setCookie("cookie", true, 30);
    container.classList.remove('jko'); 
}

document.querySelector("#accept_cookies").addEventListener("click", acceptCookies);

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function cookieMessage() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith("cookie="))) {
        document.querySelector(".cookie_container").style.display = "none";
        container.classList.remove('jko');
    } else {
        document.querySelector(".cookie_container").style.display = "block";
        container.classList.add('jko');
    }
}

window.addEventListener("load", cookieMessage);


//SLICK






{/* <script src="slick/slick.min.js"></script>

$(".slides").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true
}) */}