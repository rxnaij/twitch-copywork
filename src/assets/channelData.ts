export interface Channel {
    user: {
        name: string
        profilePhotoURL: string | null
    }
    title: string
    category: string
    viewers: number
    isLive?: boolean
    thumbnail?: string
    tags?: string[]
}

const data: Channel[] = [
    {
        user: {
            name: "Symfuhny",
            profilePhotoURL: ""
        },
        title: "ATOMIC CAMO GRIND! CLICK NOW! !Gold",
        category: "Call of Duty: Vanguard",
        viewers: 11800
    },
    {
        user: {
            name: "loltyler1",
            profilePhotoURL: null
        },
        title: "DETERMINE! GREATEST PLAY EVER ANNOUNCEMENT",
        category: "League of Legends",
        viewers: 32200,
        isLive: true,
        thumbnail: undefined,
        tags: [
            "English"
        ]
    },
    {
        user: {
            name: "NICKMERCS",
            profilePhotoURL: null
        },
        title: "Fraggin' | Code: MFAM | @NICKMERCS",
        category: "Apex Legends",
        viewers: 822,
        isLive: true,
        thumbnail: undefined,
    },
    {
        user: {
            name: "Amouranth",
            profilePhotoURL: null
        },
        title: "DINNER WITH JINNYTTY! !s-->social media links",
        category: "Just Chatting",
        viewers: 8600,
        isLive: true,
        thumbnail: undefined,
    },
    {
        user: {
            name: "Tfue",
            profilePhotoURL: null
        },
        title: "3 Washed fortnite players hard stuck 10k",
        category: "Apex Legends",
        viewers: 1400
    },
    {
        user: {
            name: "sodapoppin",
            profilePhotoURL: null
        },
        title: "Short stream",
        category: "Worms: Reloaded",
        viewers: 26700
    },
    {
        user: {
            name: "EsfandTV",
            profilePhotoURL: null
        },
        title: "BBQ W/ ASMONGOLD AND GRAYCEN BEFORE OTK",
        category: "Just Chatting",
        viewers: 2200
    },
    {
        user: {
            name: "Aydan",
            profilePhotoURL: null
        },
        title: "SND Tournament w/ ScummN | !yt !sub",
        category: "Call of Duty: Vanguard",
        viewers: 6100
    },
    {
        user: {
            name: "iiTzTimmy",
            profilePhotoURL: null
        },
        title: "duo with john // Follow my socials @iiTzTimmy",
        category: "VALORANT",
        viewers: 21400
    }
]

export {
    data
}