import banner3 from "../../../asserts/banner3.jpg";
import banner6 from "../../../asserts/banner6.jpg";
import earbuds from "../../../asserts/earbuds.png";
import earbud2 from "../../../asserts/earbud2.png";
import limitedWirelesHeadPhone from "../../../asserts/limitededition.png"
import earbud3 from "../../../asserts/earbud3.png";
import earbud4 from "../../../asserts/earbud4.png";
import earbud5 from "../../../asserts/earbud5.png";
import earbud6 from "../../../asserts/earbud6.png";
import earphone from "../../../asserts/earphone.png";
import wirelessSpeaker from "../../../asserts/wirelessSpeaker.png"
import smartWatch from "../../../asserts/smartWatch.png"
import headphone from "../../../asserts/headphone.png"

const popularProductsData = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
  },
  {
    id: 2,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    id: 3,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    id: 4,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    id: 5,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
  },
  {
    id: 6,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
  },
  {
    id: 1,
    img: earbuds,
  },
  {
    id: 2,
    img: earbud2,
  },
  {
    id: 3,
    img: earbud3,
  },
  {
    id: 4,
    img: earbud4,
  },
  {
    id: 5,
    img: earbud5,
  },
  {
    id: 6,
    img: earbud6,
  },
];

const categoryList = [
{
    id:1,
    image:earbud3,
    title:"WIRELESS EARBUDS",
    category:"wirelessEarbuds"
},
{
    id:2,
    image:earphone,
    title:"NECKBANDS",
    category:"neckbands"
},
{
    id:3,
    image:smartWatch,
    title:"SMART WATCHES",
    category:"smartWatches"
},
{
    id:4,
    image:wirelessSpeaker,
    title:"WIRELESS SPEAKERS",
    category:"wirelessSpeakers"
}
,{
  id:5,
  image:headphone,
  title:"WIRELESS HEADPHONE",
  category:"wirelessHeadphone"
},
{
  id:6,
  image:limitedWirelesHeadPhone,
  title:"LIMITED EDITION",
  category:"limitedEdition"
}
] 

const Products = [{
  "title":"boAt Airdopes 141",
  "disc":"Equipped with 8mm drivers, Upto 42 Hours Total Playback, ENx™ Technology, ASAPTM Charge",
  "img":"https://i.ibb.co/7yGkQJ6/grey-600x-removebg-preview.png",
  "catagories":["wirelessEarbuds"],
  "countInStock":4,
  "rating":"4",
  "price":999,
  "colors":["black", "blue"]
} ]

const Sizes = [
  { size: "All" },
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
];
const Genters = [{ gender: "All" }, { gender: "male" }, { gender: "female" }];

const PriceOrder = [
  { option: "Price(asc)" },
  { option: "Price(desc)" },
];

export { popularProductsData, PriceOrder, Sizes, Genters, categoryList };
