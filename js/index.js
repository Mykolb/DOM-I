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

//nav//
const nav = document.querySelectorAll('nav a');
nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']

//turns original links green not added links 
nav.forEach((a, cb) => {
  a.style.color = 'green';
})

//works
newNav = document.querySelectorAll("nav")[0];
let createNewNav = (element) => {
let newNode = document.createElement("a");
newNode.textContent = element;
return newNode;
}
newNav.prepend(createNewNav("Profile"));
newNav.append(createNewNav("Volunteer"));



const allLinks = document.querySelectorAll('nav a')
allLinks.forEach((a, link) => a.style.color= 'green')

// Example: Update the img src for the logo
const logoImage = document.getElementById("logo-img");
logoImage.setAttribute('src', siteContent["nav"]["img-src"])


//images//
const headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src'])


//cta//
const ctaH1 = document.querySelector('.cta h1');										
ctaH1.textContent= siteContent.cta['h1']
// const ctaH1 = document.getElementsByClassName('cta-text')
// ctaH1.textContent = siteContent['cta']['h1']
console.log('ctaH1', ctaH1)


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

h4.forEach((h4, cb) => {
  h4.style.color = 'blue';
})



//main content paragraphs//
const main = document.querySelectorAll('p');
main[0].textContent = siteContent['main-content']['features-content']
main[1].textContent = siteContent['main-content']['about-content']
main[2].textContent = siteContent['main-content']['services-content']
main[3].textContent = siteContent['main-content']['product-content']
main[4].textContent = siteContent['main-content']['vision-content']

// main.forEach((main, cb) => {
//   main.style.
// })


//Contact//
//looked for tag names b/c they didn't have classes 
const contact = document.getElementsByClassName('contact')[0];
contact.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4']
contact.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address']
contact.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone']
contact.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email']
console.log('contact', contact)



// //footer

const footer = document.querySelector('footer');
 footer.getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright']


