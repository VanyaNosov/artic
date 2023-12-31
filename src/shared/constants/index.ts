import award1 from '../assets/awards/1.svg'
import award2 from '../assets/awards/2.svg'
import award3 from '../assets/awards/3.svg'

import work2 from '../assets/images/mainQuestTasker.jpeg?optimized'
// @ts-expect-error: testing
import work1 from '../assets/images/mainStroySet.jpeg?optimized-mb-600-500'
// @ts-expect-error: testing
import work3 from '../assets/images/mainSavorSlice.jpg?optimized-mb-600-500'
// @ts-expect-error: testing
import work4 from '../assets/images/mainCorporateShop.jpg?optimized-mb-600-500'
// @ts-expect-error: testing
import work5 from '../assets/images/mainSneakersShop.jpg?optimized-mb-600-500'

export const isMobile = window.innerWidth <= 768

export const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
}

export const awardsArray = [
    {
        title: 'home.stackSubtitle1',
        image: award1,
        awardsCount: 7,
        awards: [
            {
                title: 'HTML',
                count: '•',
            },
            {
                title: 'SCSS',
                count: '•',
            },
            {
                title: 'Javascript',
                count: '•',
            },
            {
                title: 'Typescript',
                count: '•',
            },
            {
                title: 'ReactJS',
                count: '•',
            },
            {
                title: 'Redux Toolkit',
                count: '•',
            },
            {
                title: 'TailwindCSS',
                count: '•',
            },
        ],
    },
    {
        title: 'home.stackSubtitle2',
        image: award2,
        awardsCount: 6,
        awards: [
            {
                title: 'NodeJS',
                count: '•',
            },
            {
                title: 'ExpressJS',
                count: '•',
            },
            {
                title: 'MongoDB',
                count: '•',
            },
            {
                title: 'Python',
                count: '•',
            },
            {
                title: 'PHP',
                count: '•',
            },
            {
                title: 'MySQL',
                count: '•',
            },
        ],
    },
    {
        title: 'home.stackSubtitle3',
        image: award3,
        awardsCount: 3,
        awards: [
            {
                title: 'Figma',
                count: '•',
            },
            {
                title: 'Adobe Photoshop',
                count: '•',
            },
            {
                title: 'Adobe Illustrator',
                count: '•',
            },
        ],
    },
]

console.log(work4, 'work4')

export const homePortfolio = [
    {
        image: work4,
        title: 'Elcor Company',
        subtitle: 'home.portfolioText4',
        link: '/project/4',
    },
    {
        image: work1,
        title: 'StroySet Shop',
        subtitle: 'home.portfolioText1',
        link: '/project/1',
    },
    {
        image: work5,
        title: 'Shoes Factory',
        subtitle: 'home.portfolioText5',
        link: '/project/5',
    },
    {
        image: work2,
        title: 'QuestTasker',
        subtitle: 'home.portfolioText2',
        link: '/project/2',
    },
    {
        image: work3,
        title: 'SavorSlice Hub',
        subtitle: 'home.portfolioText3',
        link: '/project/3',
    },
]
