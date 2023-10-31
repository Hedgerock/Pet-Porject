const menu = [
    {
        menuTitle: 'Services',
        menuLink: '#'
    },
    {
        menuTitle: 'Technologies',
        menuLink: '#'
    },
    {
        menuTitle: 'Products',
        menuLink: '#'
    },
    {
        menuTitle: 'Portfolio',
        menuLink: '#'
    },
    {
        menuTitle: 'Blog',
        menuLink: '#'
    },
    {
        menuTitle: 'About Us',
        menuLink: '#'
    },
]

const socialMedia = [
    {
        mediaPicture: './img/facebook.png',
        mediaLink: '#',
    },
    {
        mediaPicture: './img/linkedin.png',
        mediaLink: '#',
    },
    {
        mediaPicture: './img/whatsup.png',
        mediaLink: '#',
    },
    {
        mediaPicture: './img/skype.png',
        mediaLink: '#',
    },
]

const serviceElem = [
    {
        title: 'game development',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.',
        image: './img/pict1.png'
    },
    {
        title: 'sdk development',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.',
        image: './img/pict2.png'
    },
    {
        title: '3d modeling services',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.',
        image: './img/pict3.png'
    },
    {
        title: 'vr app development',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.',
        image: './img/pict4.png'
    },

]

const partners = [
    './img/img2.png', 
    './img/img3.png', 
    './img/img4.png', 
    './img/img5.png', 
    './img/img6.png', 
    './img/img7.png', 
    './img/img8.png', 
    './img/img9.png', 
    './img/img10.png', 
    './img/img11.png', 
    './img/img12.png',
    './img/img13.png', 
    './img/img14.png', 
]

const menuList = document.querySelector('.menu');
const buttons = document.querySelectorAll('.switcher');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger-menu-button');
const layout = document.querySelector('.layout');
const socialMediaList = document.querySelector('.social-media');
const services = document.querySelector('.main-content-block_automated')
const partnersBlock = document.querySelector('.partners')

const menuElements = menu.map(function(item) {
    return `
    <li class = "menu-element">
        <a class = "menu-element__link" href = ${item.menuLink}>
            ${item.menuTitle}
        </a>
    </li>
    `
}).join('')

const socialMediaElements = socialMedia.map(function(item) {
    return `
        <li class = "social-media-element">
            <a class = "social-media-link" href = ${item.mediaLink}>
                <img class = "social-media-link__img" src = ${item.mediaPicture} alt = "">
            </a>
        </li>
    `
}).join('');


menuList.innerHTML = menuElements;
socialMediaList.innerHTML = socialMediaElements;

burgerMenu.onclick = function() {
    menuList.classList.add('menu_visible');
    layout.classList.add('layout_visible');
    document.body.classList.toggle('overflow-scroll')
}

layout.onclick = function() {
    menuList.classList.remove('menu_visible');
    layout.classList.remove('layout_visible');
    document.body.classList.toggle('overflow-scroll');
}

const pictures = ['header_first-picture', 'header_second-picture', 'header_third-picture'];

buttons.forEach(function(item, index) {

    item.onclick = function() {
        buttons.forEach(function(button) {
            button.classList.remove('switcher_active');
        })

        item.classList.add('switcher_active')

        pictures.forEach(function(className) {
            header.classList.remove(className);
        })

        header.classList.add(pictures[index])
    }
})

const serviceBlock = serviceElem.map(function(item) {
    return `
        <div class = "main-content-block-elem">
            <div class = "first-part">
                <h3 class = "first-part__title">
                    ${item.title}
                </h3>
                <p class = "first-part__text">
                    ${item.text}
                </p>
            </div>
            <div class = "second-part">
                <img class = "second-part__img" src = ${item.image} alt = "">
            </div>
        </div>
    `
}).join('')

services.innerHTML = '<h3 class="main-content-block__title">Services</h3>' + serviceBlock;

let partnersList = '';

for (let i = 0; i < partners.length; i++) {
    let element = `<div class = "partner-block"><img class = "partner-block__img" src=${partners[i]} alt = ""></div>`
    partnersList += element;
}

partnersBlock.innerHTML = partnersList;

