//STICKY HEADER

//HAMBURGER NAVBAR

const hamburger = document.getElementsByClassName('hamburger-menu')[0]
const sideMenu = document.getElementsByClassName('side_menu')[0]
const linksMenu = document.getElementsByClassName('menu_sections')[0]
const sideNav = document.getElementsByClassName('side_nav')[0]
// const disable  = document.getElementsByClassName('disable')[0]
const container  = document.getElementsByClassName('container')[0]
const pageDisable = document.getElementsByClassName('a')[0]

hamburger.addEventListener('click', () =>{
    sideMenu.classList.add('active')
    sideNav.classList.add('active')
    // disable.classList.toggle('page-disabled')
    pageDisable.classList.toggle('page-disabled')
    container.classList.add('active')
    console.log('button clicked')
})

linksMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active')
    hamburger.classList.toggle('active')
    sideNav.classList.toggle('active')
    // disable.classList.toggle('page-disabled')
    container.classList.toggle('active')
    console.log('link clicked')
} )

sideNav.addEventListener('click', () => {
  sideMenu.classList.toggle('active')
  hamburger.classList.toggle('active')
  // disable.classList.toggle('page-disabled')
  container.classList.toggle('active')
  console.log('link clicked')
} )

// pageDisable.addEventListener('click', () =>{
//   disable.classList.toggle('page-disabled')
//   console.log('Disabled clicked')
// })

// if (pageDisable.classList.contains('page-disabled')) {
//   pageDisable.addEventListener('click', () => {
//       disable.classList.remove('page-disabled');
//       pageDisable.classList.toggle('page-disabled')
//       console.log('Disabled clicked');
//   });
// }

// const hamMenu = document.querySelector('.hamburger-menu');
// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
// });


//   sideMenu.classList.remove('active')
//   hamburger.classList.remove('active')
//   sideNav.classList.remove('active')
//   container.classList.remove('active')

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

// const hamburger = document.getElementsByClassName('hamburger-menu')[0];
// const sideMenu = document.getElementsByClassName('side_menu')[0];
// const links = document.getElementsByClassName('menu_sections')[0];
// const sideNav = document.getElementsByClassName('side_nav')[0];
// const body = document.getElementsByClassName('hope')[0];

// hamburger.addEventListener('click', () =>{
//     sideMenu.classList.toggle('active');
//     sideNav.classList.toggle('active');
//     body.classList.toggle('page-disabled');
//     console.log('button clicked');
// });

// links.addEventListener('click', () => {
//     sideMenu.classList.toggle('active');
//     hamburger.classList.toggle('active');
//     sideNav.classList.toggle('active');
//     console.log('link clicked');
// });

// const hamMenu = document.querySelector('.hamburger-menu');
// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
// });

// const disabledOverlay = document.querySelector(".page-disabled");

// function handleClickOutsideDisabledArea(event) {
//   // Check if the clicked element is the disabled overlay itself
//   if (event.target === disabledOverlay) {
//     // Remove the .active class from sideNav and sideMenu
//     sideNav.classList.remove("active");
//     sideMenu.classList.remove("active");
//     body.classList.toggle('page-disabled');
//   }
// }

// disabledOverlay.addEventListener("click", handleClickOutsideDisabledArea);




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
