import img1 from '../assets/about/1.jpeg?optimized'
import img2 from '../assets/about/2.jpeg?optimized'
import img3 from '../assets/about/3.jpeg?optimized'
import img4 from '../assets/about/4.jpeg?optimized'

export const crew = [
    {
        name: 'about.crewName1',
        position: 'about.crewPosition1',
        inst: 'link',
        linkIn: 'link',
        img: img4,
    },
    {
        name: 'about.crewName2',
        position: 'about.crewPosition2',
        inst: 'link',
        linkIn: 'link',
        img: img2,
    },
    {
        name: 'about.crewName3',
        position: 'about.crewPosition3',
        inst: 'link',
        linkIn: 'link',
        img: img3,
    },
    {
        name: 'about.crewName4',
        position: 'about.crewPosition4',
        inst: 'link',
        linkIn: 'link',
        img: img1,
    },
]

export const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 983,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 727,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}
