import { RiCupFill } from "react-icons/ri";
import { MdEco, MdWorkspacePremium  } from "react-icons/md";


export const RosterData =[
    {
        id: "e1",
        category: "ESPRESSO",
        subtitle:"ESPRESSO BLEND",
        Image:"/src/Assets/roaster1.png",
        description:"Bold and rich espresso crafted from premium roasted beans. Perfect for intense coffee lovers who enjoy deep flavor, smooth crema, and a powerful caffeine kick.",
        // title:"Ethiopian Yirgacheffe",
        // price: "$22.0",
    },
    {
        id: "b1",
        category: "BREWED",
        subtitle:"BREWED COFFEE",
        Image:"/src/Assets/roaster2.png",
        description:"Freshly brewed slow-extracted coffee delivering smooth aroma and balanced taste. A comforting everyday cup that keeps you energized and relaxed with every sip.",
        // title:"Guatemalan Antigua",
        // price: "$19.50",
    },
    {
        id: "c1",
        category: "COLD COFFEE",
        subtitle:"COLD COFFEE",
        Image:"/src/Assets/roaster3.png",
        description:"Chilled creamy coffee blended for a refreshing boost. Smooth, slightly sweet, and perfect for warm days when you want coffee with a cool twist.",
        // title:"Signature Morning Gold",
        // price: "$24.0",
    },
    {
        id: "s1",
        category: "SPECIALITY",
        subtitle:"SPECIALITY COFFEE",
        Image:"/src/Assets/roaster4.png",
        description:"Expertly crafted specialty brews made with precision techniques. Discover unique flavors, delicate aromas, and a premium coffee experience loved by true coffee enthusiasts.",
    //     title:"Costa Rican Tarrazu",
    //     price: "$21.0",
    }
]

export const PremiumData = [
    {
        icons:RiCupFill,
        title:"Master Baristas",
        description:"Our Team undergoes rigorous SCA-certified traning to ensure every pour is perfect and consistent"
    },
    {
        icons:MdEco,
        title:"Master Baristas",
        description:"Our Team undergoes rigorous SCA-certified traning to ensure every pour is perfect and consistent"
    },
    {
        icons:MdWorkspacePremium ,
        title:"Master Baristas",
        description:"Our Team undergoes rigorous SCA-certified traning to ensure every pour is perfect and consistent"
    }
]
