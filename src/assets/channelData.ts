import amouranth from './profile-images/Amouranth.png'
import aydan from './profile-images/Aydan.png'
import esfandTV from './profile-images/EsfandTV.png'
import iiTzTimmy from './profile-images/iiTzTimmy.png'
import loltyler1 from './profile-images/loltyler1.png'
import nickmercs from './profile-images/NICKMERCS.png'
import sodapoppin from './profile-images/sodapoppin.png'
import symfuhny from './profile-images/Sympuhny.png'
import tfue from './profile-images/Tfue.png'

export interface Channel {
    user: {
        name: string
        profilePhotoURL: string | null
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
            thumbnail: "",
            tags: [
                "English"
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
            thumbnail: "",
            tags: []
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
            thumbnail: "",
            tags: []
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
]

export {
    data
}