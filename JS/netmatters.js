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


  // Function to close the cookie popup and set the cookie
  function acceptCookies() {
    document.querySelector(".cookie_container").style.display = "none";
    setCookie("cookie", true, 30);
  }

  // CLOSE THE COOKIE MESSAGE WHEN THE USER CLICKS ON THE "THAT'S FINE" BUTTON
  document.querySelector("#accept_cookies").addEventListener("click", acceptCookies);

  // CREATES A COOKIE (EXPIRES IN 30 DAYS)
  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }

  // CHECK IF A COOKIE EXISTS
  function cookieMessage() {
    // Check if the "cookie" exists in document.cookie
    if (document.cookie.split(';').some((item) => item.trim().startsWith("cookie="))) {
      // The "cookie" exists, hide the popup
      document.querySelector(".cookie_container").style.display = "none";
    } else {
      // The "cookie" doesn't exist, show the popup
      document.querySelector(".cookie_container").style.display = "block";
    }
  }

  // CALL THE COOKIEMESSAGE() FUNCTION ON PAGE LOAD
  window.addEventListener("load", cookieMessage);







//IF NEEDED


// var lastScrollTop = 0;
//     navbar = document.getElementsByClassName("head_nav_container");
// window.addEventListener("scroll", function(){
//     var scrollTop = window.pageYOffset || document
//         .documentElement.scrollTop;
//     if (scrollTop > lastScrollTop){
//         navbar.style.top="-80px";
//     } else {
//         navbar.style.top="0";
//     }
//     lastScrollTop = scrollTop;
// })
