// import headphonebanner from "../../../asserts/headphonebanner.png"
// import watchbanner from "../../../asserts/watchbanner.png"

// import banner6 from "../../../asserts/banner6.jpg"
// import earbuds from "../../../asserts/earbuds.png"
import earbud2 from "../../../asserts/earbud2.png"
import earbud3 from "../../../asserts/earbud3.png"
import earbud5 from "../../../asserts/earbud5.png"
import limitedWirelesHeadPhone from "../../../asserts/limitededition.png"
import earphone from "../../../asserts/earphone.png"
import wirelessSpeaker from "../../../asserts/wirelessSpeaker.png"
import smartWatch from "../../../asserts/smartWatch.png"
import headphone from "../../../asserts/headphone.png"





// const mensTshirts = ["https://m.media-amazon.com/images/I/71GITfTSeRL._UL1500_.jpg","https://m.media-amazon.com/images/I/71pNnnaOIzS._UL1500_.jpg"]
// const mensJeckets=["https://m.media-amazon.com/images/I/51mP0GQRo+L._UL1000_.jpg", "https://m.media-amazon.com/images/I/71ANVgDpIJL._UL1500_.jpg"]
// const mensJeans = ["https://m.media-amazon.com/images/I/51z7WtTKw2L._UX679_.jpg","https://m.media-amazon.com/images/I/81MP30nDiYL._UL1500_.jpg"]
// const kurta = ["https://m.media-amazon.com/images/I/61LVl8VGoiL._UL1440_.jpg", "https://m.media-amazon.com/images/I/61NajWdsBOL._UL1500_.jpg"]
// const sportDress = ["https://m.media-amazon.com/images/I/51V11qoiOoL._UL1440_.jpg","https://m.media-amazon.com/images/I/612ilcieJEL._UL1500_.jpg"]

const bannerList = [{
  img:earbud2,
  bgColor:"#FCEFDD"
},{
  img:earbud3,
  bgColor:"#FFBE10"
},
{
  img:smartWatch,
  bgColor:"#F6D9E7"
},{
  img:earbud5,
  bgColor:"#F4F4F4"
}
]


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

const PriceOrder = [
  { option: "Price(asc)" },
  { option: "Price(desc)" },
];


export {bannerList, categoryList, PriceOrder}
