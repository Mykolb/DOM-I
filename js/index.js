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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//images//
const headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src'])

//nav//
//const nav = document.querySelectorAll('nav a');
const nav = document.querySelectorAll('nav a');
nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']

//cta//
const ctaH1 = document.querySelector('.cta h1');										
ctaH1.textContent= siteContent.cta['h1']

const ctaButton = document.querySelector('.cta button');										
ctaButton.textContent= siteContent.cta['button']

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])


//main content headers//
const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4']
h4[1].textContent = siteContent['main-content']['about-h4']
h4[2].textContent = siteContent['main-content']['services-h4']
h4[3].textContent = siteContent['main-content']['product-h4']
h4[4].textContent = siteContent['main-content']['vision-h4']


//main content paragraohs//
const main = document.querySelectorAll('p');
main[0].textContent = siteContent['main-content']['features-content']
main[1].textContent = siteContent['main-content']['about-content']
main[2].textContent = siteContent['main-content']['about-content']
main[3].textContent = siteContent['main-content']['services-content']
main[4].textContent = siteContent['main-content']['product-content']
main[5].textContent = siteContent['main-content']['vision-content']


//Contact 
const contacts = document.querySelector('.contact h4');
contacts.textContent = siteContent.contact['contact-h4']

// const addresses = document.querySelector('.contact address');
// addresses.textContent = siteContent.contact['address']

// const telephone = document.querySelectorAll('.contact phone');
// telephone.textContent = siteContent.contact['phone']

// const email = document.querySelectorAll('.contact email');
// email.textContent = siteContent.contact['email']

// //footer

// const footer = document.getElementsByTagName('footer copyright');
// footer.textContent = siteContent.footer['copyright']