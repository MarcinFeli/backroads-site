import tour2 from '../images/tour-2.jpeg'   
import tour3 from '../images/tour-3.jpeg'
import tour1 from '../images/tour-1.jpeg'

export const pageLinks = [
    { id: 1, text: 'home', href: '#home' },
    { id: 2, text: 'about', href: '#about' },
    { id: 3, text: 'services', href: '#services' },
    { id: 4, text: 'tours', href: '#tours' },
]

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const articles = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
]

export const tours = [
    {
        id: 1,
        name: 'tibet adventure',
        date: 'august 26th, 2020',
        img: tour1,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'china',
        days: 6,
        price: 2100,
    },
    {
        id: 2,
        name: 'best of java',
        date: 'october 1th, 2020',
        img: tour2,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'indonesia',
        days: 11,
        price: 1400,
    },
    {
        id: 3,
        name: 'amazing bali',
        date: 'december 10th, 2020',
        img: tour3,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'indonesia',
        days: 10,
        price: 1500,
    },
]