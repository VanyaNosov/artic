import { CgWebsite } from "react-icons/cg";
import { MdOutlineWeb, MdOutlineWebAsset, MdOutlineShoppingBag } from "react-icons/md";


export const services = [
  {
    servis: 'prices.servis1',
    price: '390',
    info: 'prices.info1',
    img: <MdOutlineWebAsset />,
    features: ['prices.feature1', 'prices.feature2', 'prices.feature3', 'prices.feature4', 'prices.feature5'],
  },
  {
    servis: 'prices.servis2',
    price: '990',
    info: 'prices.info2',
    img: <MdOutlineWeb />,
    features: ['prices.feature6', 'prices.feature7', 'prices.feature8', 'prices.feature9', 'prices.feature10'],
  },
  {
    servis: 'prices.servis4',
    price: '1990',
    info: 'prices.info4',
    img: <MdOutlineShoppingBag />,
    features: [
      'prices.feature16',
      'prices.feature17',
      'prices.feature18',
      'prices.feature19',
      'prices.feature20'
    ]
  },
  {
    servis: 'prices.servis3',
    price: '2990',
    info: 'prices.info3',
    img: <CgWebsite />,
    features: ['prices.feature11', 'prices.feature12', 'prices.feature13', 'prices.feature14', 'prices.feature15'],
  },
];
