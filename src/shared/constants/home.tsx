import { RiMacbookLine } from 'react-icons/ri'
import { MdContentPasteSearch } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { MdOutlineWebAsset } from 'react-icons/md'
import { MdOutlineWeb } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'

export const items = [
    {
        icon: (
            <CgWebsite className="group-hover:text-white text-3xl md:text-5xl lg:text-6xl duration-300" />
        ),
        title: 'home.possibilitiesCardText4',
    },
    {
        icon: (
            <MdOutlineWeb className="group-hover:text-white text-3xl md:text-5xl lg:text-6xl duration-300" />
        ),
        title: 'home.possibilitiesCardText5',
    },
    {
        icon: (
            <MdOutlineWebAsset className="group-hover:text-white text-3xl md:text-5xl lg:text-6xl duration-300" />
        ),
        title: 'home.possibilitiesCardText6',
    },
]

export const possibilitiesCards = [
    {
        title: 'home.possibilitiesCardText1',
        icon: (
            <RiMacbookLine className="group-hover:text-white text-3xl md:text-5xl lg:text-6xl duration-300" />
        ),
    },
    {
        title: 'home.possibilitiesCardText2',
        icon: (
            <MdContentPasteSearch className="group-hover:text-white text-3xl md:text-5xl lg:text-6xl duration-300" />
        ),
    },
    {
        title: 'home.possibilitiesCardText3',
        icon: (
            <BiSupport className="group-hover:text-white text-3xl md:text-5xl lg:text-6xl duration-300" />
        ),
    },
]
