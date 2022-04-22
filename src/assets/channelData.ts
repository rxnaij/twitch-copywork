import amouranth from './profile-images/Amouranth.png'
import aydan from './profile-images/Aydan.png'
import esfandTV from './profile-images/EsfandTV.png'
import iiTzTimmy from './profile-images/iiTzTimmy.png'
import loltyler1 from './profile-images/loltyler1.png'
import nickmercs from './profile-images/NICKMERCS.png'
import sodapoppin from './profile-images/sodapoppin.png'
import symfuhny from './profile-images/Sympuhny.png'
import tfue from './profile-images/Tfue.png'
import officialMikeShinoda from './profile-images/OfficialMikeShinoda.png'

import thumbnail_amouranth from './thumbnails/amouranth.png'
import thumbnail_loltyler1 from './thumbnails/loltyler1.png'
import thumbnail_nickmercs from './thumbnails/nickmercs.png'
import thumbnail_officialMikeShinoda from './thumbnails/OfficialMikeShinoda.png'

import category_JustChatting from './categories/Just Chatting.jpg'
import category_Minecraft from './categories/Minecraft.jpg'
import category_Fortnite from './categories/Fortnite.jpg'
import category_CallOfDuty from './categories/Call of Duty Vanguard.jpg'
import category_Valorant from './categories/VALORANT.jpg'
import category_CrabGame from './categories/Crab Game.jpg'
import category_ApexLegends from './categories/Apex Legends.jpg'
import category_EldenRing from './categories/Elden Ring.jpg'
import category_BOTW from './categories/BOTW.jpg'

export interface Channel {
    user: {
        name: string
        profilePhotoURL: string
    }
    title: string
    category: string
    viewers: number
    stream?: {
        isLive: boolean
        thumbnail: string
        tags: string[]
    }
}

const data: Channel[] = [
    {
        user: {
            name: "Symfuhny",
            profilePhotoURL: symfuhny
        },
        title: "ATOMIC CAMO GRIND! CLICK NOW! !Gold",
        category: "Call of Duty: Vanguard",
        viewers: 11800
    },
    {
        user: {
            name: "loltyler1",
            profilePhotoURL: loltyler1
        },
        title: "DETERMINE! GREATEST PLAY EVER ANNOUNCEMENT",
        category: "League of Legends",
        viewers: 32200,
        stream: {
            isLive: true,
            thumbnail: thumbnail_loltyler1,
            tags: [
                "English",
                "Hype Train"
            ]
        }
    },
    {
        user: {
            name: "NICKMERCS",
            profilePhotoURL: nickmercs
        },
        title: "Fraggin' | Code: MFAM | @NICKMERCS",
        category: "Apex Legends",
        viewers: 822,
        stream: {
            isLive: true,
            thumbnail: thumbnail_nickmercs,
            tags: ["English"]
        }
    },
    {
        user: {
            name: "Amouranth",
            profilePhotoURL: amouranth
        },
        title: "DINNER WITH JINNYTTY! !s-->social media links",
        category: "Just Chatting",
        viewers: 8600,
        stream: {
            isLive: true,
            thumbnail: thumbnail_amouranth,
            tags: ["English", "IRL"]
        }
    },
    {
        user: {
            name: "Tfue",
            profilePhotoURL: tfue
        },
        title: "3 Washed fortnite players hard stuck 10k",
        category: "Apex Legends",
        viewers: 1400
    },
    {
        user: {
            name: "sodapoppin",
            profilePhotoURL: sodapoppin
        },
        title: "Short stream",
        category: "Worms: Reloaded",
        viewers: 26700
    },
    {
        user: {
            name: "EsfandTV",
            profilePhotoURL: esfandTV
        },
        title: "BBQ W/ ASMONGOLD AND GRAYCEN BEFORE OTK",
        category: "Just Chatting",
        viewers: 2200
    },
    {
        user: {
            name: "Aydan",
            profilePhotoURL: aydan
        },
        title: "SND Tournament w/ ScummN | !yt !sub",
        category: "Call of Duty: Vanguard",
        viewers: 6100
    },
    {
        user: {
            name: "iiTzTimmy",
            profilePhotoURL: iiTzTimmy
        },
        title: "duo with john // Follow my socials @iiTzTimmy",
        category: "VALORANT",
        viewers: 21400
    }
    ,
    {
        user: {
            name: "OfficialMikeShinoda",
            profilePhotoURL: officialMikeShinoda
        },
        title: "11.16.21 Detroit Become Human",
        category: "Detroit: Become Human",
        viewers: 1600,
        stream: {
            isLive: true,
            tags: ["English"],
            thumbnail: thumbnail_officialMikeShinoda
        }
    }
]

export interface CategoryData {
    name: string
    viewers: number
    tags: string[]
    thumbnail: string
}

const categoryData: CategoryData[] = [
    {
        name: "Just Chatting",
        viewers: 395000,
        tags: ["IRL"],
        thumbnail: category_JustChatting
    },
    {
        name: "Minecraft",
        viewers: 90900,
        tags: ["Adventure Game"],
        thumbnail: category_Minecraft
    },
    {
        name: "Fortnite",
        viewers: 88800,
        tags: ["Shooter", "Action"],
        thumbnail: category_Fortnite
    },
    {
        name: "Call of Duty: Vanguard",
        viewers: 92800,
        tags: ["FPS", "Shooter"],
        thumbnail: category_CallOfDuty
    },
    {
        name: "VALORANT",
        viewers: 83600,
        tags: ["Shooter", "FPS"],
        thumbnail: category_Valorant
    },
    {
        name: "Crab Game",
        viewers: 41200,
        tags: ["Fighting", "Strategy"],
        thumbnail: category_CrabGame
    },
    {
        name: "Apex Legends",
        viewers: 402000,
        tags: ["FPS", "Shooter"],
        thumbnail: category_ApexLegends
    },
    {
        name: "Elden Ring",
        viewers: 510000,
        tags: ["FPS", "Shooter"],
        thumbnail: category_EldenRing
    },
    {
        name: "The Legend of Zelda: Breath of the Wild",
        viewers: 7100,
        tags: ["Action"],
        thumbnail: category_BOTW
    },
]

export interface MegaCategoryData {
    name: string
    icon: string
    backgroundImage: string
}

const megaCategoryData: MegaCategoryData[] = [
    {
        name: "Games",
        icon: "",
        backgroundImage: ""
    },
    {
        name: "IRL",
        icon: "",
        backgroundImage: ""
    },
    {
        name: "Music",
        icon: "",
        backgroundImage: ""
    },
    {
        name: "Esports",
        icon: "",
        backgroundImage: ""
    }
]

export {
    data,
    categoryData,
    megaCategoryData
}