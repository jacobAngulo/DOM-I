const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// nav bar text content
let topNavMenu = document.querySelectorAll(".container header nav a");

topNavMenu[0].textContent = siteContent['nav']['nav-item-1'];
topNavMenu[1].textContent = siteContent['nav']['nav-item-2'];
topNavMenu[2].textContent = siteContent['nav']['nav-item-3'];
topNavMenu[3].textContent = siteContent['nav']['nav-item-4'];
topNavMenu[4].textContent = siteContent['nav']['nav-item-5'];
topNavMenu[5].textContent = siteContent['nav']['nav-item-6'];

// cta content
let ctaText = document.querySelector('.cta .cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// main content
let mainContentImage = document.getElementById('middle-img');
mainContentImage.setAttribute('src', siteContent['main-content']['middle-img-src'])
let mainContentH4 = document.querySelectorAll('.main-content h4');
let mainContentP = document.querySelectorAll('.main-content p');
mainContentH4[0].textContent = siteContent['main-content']['features-h4'];
mainContentP[0].textContent = siteContent['main-content']['features-content'];
mainContentH4[1].textContent = siteContent['main-content']['about-h4'];
mainContentP[1].textContent = siteContent['main-content']['about-content'];
mainContentH4[2].textContent = siteContent['main-content']['services-h4'];
mainContentP[2].textContent = siteContent['main-content']['services-content'];
mainContentH4[3].textContent = siteContent['main-content']['product-h4'];
mainContentP[3].textContent = siteContent['main-content']['product-content'];
mainContentH4[4].textContent = siteContent['main-content']['vision-h4'];
mainContentP[4].textContent = siteContent['main-content']['vision-content'];

// contact
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];
let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

// footer
let footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];




