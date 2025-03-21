import { ReviewData } from "./interface"

export const boxContent = [
    [
        "<p class='sm:text-3xl text-lg sm:leading-8 italic'>Did you know??</p>",
        "<p class='sm:text-3xl text-xl leading-4 sm:leading-8 font-bold'>Every 31 seconds,</p>",
        "<p class='sm:text-3xl text-xl mb-1 sm:leading-8 font-bold'>an American gets hacked.</p>",
    ],
    [
        "<p class='font-bold sm:text-3xl'>The Cold, Hard Truth:</p>"
    ],
    [
        "<div class='flex justify-center sm:mb-6' ><img src='./images/aura.webp' alt='aura-logo' class='w-44 my-3 sm:my-0 sm:w-64' width='{215}' /></div>",
        "<p class='font-bold text-3xl sm:text-5xl sm:mb-3'>Protects Your Identity</p>",
        "<p class='font-bold text-3xl sm:text-5xl sm:mb-3'>Better Than Anyone</p>",
        "<p class='font-bold text-3xl sm:text-5xl mb-3 sm:mb-3'>Else in the Industry</p>",
    ]
]

export const paragraph = [
    {
        title: "<span class='font-bold'>Yet, most Americans think</span> they’re safe because they:",
        content: {
            img: "./images/check.webp",
            text: [
                "Check their credit reports",
                "Use two-factor authentication",
                " Avoid scammy links",
                `Create "strong" passwords`,
            ]
        }
    },

    {
        title: "<span>But hackers are 8 steps ahead.</span><span class='block sm:inline'> Even newbie hackers can steal</span> your identity with:",
        content: {
            img: "",
            text: [
                `<div class="flex ml-12 sm:ml-0 gap-2 items-center w-fit"><img src="./images/cross.webp" class="w-4 sm:w-6 sm:h-6" alt="image"/><p class="text-lg sm:text-xl leading-5 sm:leading-7">Leaked email</p></div>`,
                `<div class="flex ml-12 sm:ml-0 gap-2 items-center w-fit"><img src="./images/cross.webp" class="w-4 sm:w-6 sm:h-6" alt="image"/><p class="text-lg sm:text-xl leading-5 sm:leading-7">Scam call</p></div>`,
                `<div class="flex ml-12 sm:ml-0 gap-2 items-center w-fit"><img src="./images/cross.webp" class="w-4 sm:w-6 sm:h-6" alt="image"/><p class="text-lg sm:text-xl leading-5 sm:leading-7">Stolen card number</p></div>`,
                `<div class="flex ml-12 sm:ml-0 gap-2 items-center w-fit"><img src="./images/cross.webp" class="w-4 sm:w-6 sm:h-6" alt="image"/><p class="text-lg sm:text-xl leading-5 sm:leading-7">And more</p></div>`,
            ]
        }
    },
]


export const paraData: ParaData = {
    para1: {
        title: "1. STOP Using One Email",
        content: {
            img: "./images/1.webp",
            text1: [
                "It's a gold mine for hackers...",
                "because it’s the master key",
                "to unlocking your entire digital life.",
                "Instead, use separate accounts"

            ],
            text2: [
                "for different purposes, like:",
                "<div class='text-left ml-14 sm:ml-0 sm:text-xl leading-6 sm:leading-7'><li>Gmail for friends and family,</li><li>ProtonMail for shopping, <span class='ml-7 block'>memberships, etc.,</span></li><li>Tuta for banking, investments, etc.,</li></div>",
                "This is no guarantee you won’t be hacked...",
                "But if your family/friends email,",
                "gets breached or phished…",
                "<p class='font-bold italic'>Nothing involving money gets threatened...</p>"

            ]
        }
    },

    para2: {
        title: "2. Hide Your Real Email",
        content: {
            img: "./images/2.webp",
            text1: [
                "<p>Your email is <span class='italic underline'>exposed</span></p>",
                "Every time you sign up for",
                "something online, you’re",
                "handing over the keys to your inbox.",
                "No matter what companies claim...",
                "your email gets leaked, sold, and abused.",
                "But here’s the genius move",
                "hackers don’t want you to know:",
                "<p class='italic underline'>Hide your real email.</p>",
                "Instead, use a masked email...",
                "like Mailfence or Guerrilla Mail.",
                "It keeps your inbox private.",
                "<p class='font-bold'>No more spam, leaks, or risks.</p>",
            ]
        }
    },

    para3: {
        title: "3. Ice Your Credit",
        content: {
            img: "./images/3.webp",
            text1: [
                "Hackers don’t need your credit card to ruin you…",
                "They can open accounts in your name...",
                "racking up debt, wrecking your credit, and",
                "leaving you with the mess.",
                "By the time you get the fraud alert...",
            ],
            text2: [
                "it’s too late.",
                "<p>So <span class='font-bold'>freeze your credit.</span></p>",
                "And shut hackers out so they can't",
                "open accounts in your name.",
                "<p>And the best part? It’s <span class='font-bold'>free</span></p>",
                "and takes just minutes",
                "at any of the three major credit bureaus:",
                "<div class='flex items-center gap-2 ml-35 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' /><p>Experian</p></div>",
                "<div class='flex items-center gap-2 ml-35 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' /><p>Equifax</p></div>",
                "<div class='flex items-center gap-2 ml-35 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' /><p>TransUnion</p></div>",
                "<p class='font-bold italic'>Lock down your credit before they do.</p>"
            ]
        }
    },

    para4: {
        title: "4. Ditch Your Real Number",
        content: {
            img: "./images/4.webp",
            text1: [
                "Your phone number is a cash cow...",
                "for hackers.",
                "With it, scammers can:",
                "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' />Bypass security checks<p></p></div>",
                "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' />Hack your accounts<p></p></div>",
                "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' />Steal your identity<p></p></div>",
                "It's easy for fraudsters to,",
                "call your wireless provider,",
                "pretend to be you, and,",
                "transfer your number to their device.",
                "Your phone and your data…",
                "are no longer in your control.",
                "Here’s how to stop it:",
                "<p class='font-bold'>Use a burner number.</p>",
                "No, not a 2nd phone...",
                "A second number that,",
                "keeps your real one private and protected...",
                "<p class='font-bold italic'>so scammers never get their hands on it.</p>",
                ""
            ],
        }
    },

    para5: {
        title: "5. Virtual Credit Cards",
        content: {
            img: "./images/5.webp",
            text1: [
                "Every time you shop online,",
                "with your credit card,",
                "you're rolling the dice.",
                "Hackers <span class='font-bold'>love</span> to steal card numbers,",
                "from breached retail websites.",
                "To shut down this threat,",
                "before it even starts:",
                "<p class='font-bold'>Switch to a virtual credit card.</p>",
                "A one-time-use digital card number...",
                "Even if hackers steal it? It’s useless.",
                "Plus, lock or delete it anytime...",
                "<span class='italic underline'>without</span> affecting your actual credit card.",
                "<p class='font-bold'>More security, convenience, and peace of mind.</p>",
            ],
        }
    },

    para6: {
        title: "6. Use 'Decoy' Answers",
        content: {
            img: "./images/6.webp",
            text1: [
                "Hackers don’t need to crack your password…",
                "if they can guess your security answers.",
                "Think about it... your hometown,",
                "first pet, mother’s maiden name…",
                "<p class='font-bold'>All easy for scammers to find online...</p>",
                "And then reset your passwords",
                "and lock you out.",
                "So here’s the genius move: <span class='font-bold'>Lie.</span>",
                "Use <span class='font-bold'>fake answers</span> no one can guess.",
                "Not “Fluffy” for your first pet...",
                "Instead, go with “RocketDoggie99.”",
                "And then let a password manager",
                "remember it for you...",
                "It protects you without the hassle.",
                "<p class='font-bold italic'>Securely storing passwords,</p>",
                "<p class='font-bold italic'>security answers, and other sensitive info...</p>",
            ],
        }
    },

    para7: {
        title: "7. Wipe Yourself Off the Web",
        content: {
            img: "./images/7.webp",
            text1: [
                "Face it, your personal data,",
                "is already out there.",
                "Name, address, phone number,",
                "even where you’ve worked...",
                "all floating around, exposed...",
                "Just waiting for hackers, scammers,",
                "and creeps to mess you up.",
                "<p class='font-bold'>To stay safe, it’s time to disappear:</p>",
                "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' /><p><span class='font-bold'>Delete</span> old accounts,</p></div>",
                "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' /><p><span class='font-bold'>Uninstall</span> unused apps,</p></div>",
                "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[19px] h-[19px] sm:w-6 sm:h-6' /><p><span class='font-bold'>Get off</span> data broker sites,</p></div>",
                "You can use privacy services,",
                "to help scrub your data for you.",
                "And don’t forget to check people-search sites,",
                "You can request removal,",
                "from their databases, too.",
                "The less of you out there...",
                "<p class='font-bold'>the safer you are.</p>",
            ]
        }
    },

    para8: {
        title: "8. Don't Use Free Email",
        content: {
            img: "./images/8.webp",
            text1: [
                "Yes, free Gmail or Yahoo accounts,",
                "are convenient.",
                "But safe? Think again...",
                "Because they’re prime targets...",
                "easier to breach and exploit.",
                "So ditch free email and",
                "shut hackers out...",
                "with a <span class='font-bold'>custom domain email.</span>",
                "It's way harder to hack and",
                "puts you in control.",
                "<p class='font-bold'>More privacy. More security. Less risk.</p>",
            ]
        }
    }
}

interface ParaData {
    para1: Para,
    para2: Para,
    para3: Para,
    para4: Para,
    para5: Para,
    para6: Para,
    para7: Para,
    para8: Para,
}

interface Para {
    title: string,
    content: {
        img: string,
        text1: string[],
        text2?: string[]
    }
}

export const ExtraContent = {
    content1: {
        title: "Hackers Are Targeting You Right Now",
        text: [
            "But these <span class='font-bold'>8 expert-level</span> security tips",
            "will give you an advantage",
            "over everyone else because",
            "<span class='font-bold underline'>you</span> won’t be the easy target.",
            "<p class='font-bold text-3xl mt-2 sm:mt-10'>But…</p>",
            "Even with these genius tips,",
            "evil hackers are relentless.",
            "They <span class='font-bold'>never</span> stop evolving.",
            "That’s why every day, millions wake up to:",
            "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/cross.webp' alt='image' class='w-[17px] h-[17px] sm:w-6 sm:h-6' /><p>Bank accounts emptied</p></div>",
            "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/cross.webp' alt='image' class='w-[17px] h-[17px] sm:w-6 sm:h-6' /><p>Credit scores destroyed</p></div>",
            "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/cross.webp' alt='image' class='w-[17px] h-[17px] sm:w-6 sm:h-6' /><p>Identities stolen</p></div>",
            "And as long as your data is out there...",
            "<p class='underline italic'>you could be the next victim.</p>"
        ]
    },

    content2: {
        title: "<p class='text-4xl sm:text-5xl'>That’s why there’s Aura</p>",
        text: [
            "<a class='text-blue-600 font-semibold underline' href='http://.aura.com/privacy-savings?utm_source=facebook&utm_medium=paidsocial&utm_campaign=interests_tech_privacy&utm_content=rdjstill&utm_gateway=privacy&utm_id=120212256068810334&utm_term=120212256069110334&fbclid=IwY2xjawHtDg1leHRuA2FlbQEwAGFkaWQBqxgRo5b17gEdLE2sVhz6AaOAq9PnIsYdSqU-Q6PHqPGkBlaHjW4_-IUD5vn7Mx3YbTUv_aem_rXFPeL_W5t4ssDBousk67w' target='_blank'>Aura Identity Theft Protection<a/>",
            "is the ultimate security shield.",
            "Millions <span class='font-bold'>trust</span> Aura...",
            "the industry's #1-rated",
            "identity protection service",
            "because it:",
            "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[17px] h-[17px] sm:w-6 sm:h-6'/><span class='font-bold'>Stops</span> identity theft</div>",
            "<p class='italic mr-22 sm:mr-0'>before it happens</p>",
            "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[17px] h-[17px] sm:w-6 sm:h-6'/><span class='font-bold'>Alerts</span> you in real time</div>",
            "<p class='italic mr-16 sm:mr-0'>if your data is leaked</p>",
            "<div class='flex items-center gap-2 ml-22 sm:ml-0'><img src='./images/check.webp' alt='image' class='w-[17px] h-[17px] sm:w-6 sm:h-6'/><span class='font-bold'>Locks</span> down your identity</div>",
            "<p class='italic mr-9 sm:mr-0'>so criminals can’t steal it</p>",
        ]
    },

    content3: {
        title: "All-in-One Protection",
        text: [
            "Aura's digital security solution includes:",
            "<li class='text-left ml-19 sm:ml-0'>Identity theft protection</li>",
            "<li class='text-left ml-19 sm:ml-0'>3-bureau credit monitoring</li>",
            "<li class='text-left ml-19 sm:ml-0'>Antivirus software</li>",
            "<li class='text-left ml-19 sm:ml-0'>VPN services</li>",
            "<li class='text-left ml-19 sm:ml-0'>Password management</li>",
        ]
    },

    content4: {
        title: "Fastest Fraud Alerts",
        text: [
            "Up to <strong>250x</strong> the industry standard...",
            "Delivering fraud alerts in seconds.",
            "Potential threats get neutralized...",
            "Before they even get going."
        ]
    },

    content5: {
        title: "Superior Family Plans",
        text: [
            "Aura's best-in-class family plans provide",
            "<strong>full protection </strong> for the whole family…",
            "including:",
            "<li class='text-left ml-19 sm:ml-0'>Child identity monitoring</li>",
            "<li class='text-left ml-19 sm:ml-0'>Parental controls</li>",
            "<li class='text-left ml-19 sm:ml-0'>Safe Gaming alerts</li>",
            "<li class='text-left ml-19 sm:ml-0'>And more…</li>"
        ]
    },

    content6: {
        title: "Transparent and Affordable",
        text: [
            "Staightforward pricing <u>without</u>",
            "hidden fees or increases upon renewal.",
            "Compare that with other",
            "famous names in the industry."
        ]
    },
    content7: {
        title: "$1M Identity Theft Insurance",
        text: [
            "Covers <strong> each adult</strong> member on an Aura plan...",
            "Family plans offer a total of up to $5 million.",
            "It’s robust coverage for peace of mind",
            "if something does go wrong."
        ]
    },
    content8: {
        title: "#1 Rated Service",
        text: [
            "Money, Forbes, and TechRadar",
            "are among those who call Aura the...",
            "<strong>Best, most reliable</strong>",
            "identity theft protection",
            "you can find to safeguard",
            "your personal data."
        ]
    },
    content9: {
        title: "Aura Locks Down Your Identity",
        text: [
            "Enjoy peace of mind",
            "against online fraud and identity theft.",
            "Every second <strong>counts,</strong> so don’t wait.",
            "Let Aura start protecting you now…",
            "before it’s too late."
        ]
    }
}

export const withOutAura = {
    title: [
        "Without Aura...",
        "<p class='sm:mb-6'>There could be hell to pay</p>",
    ],
    text: [
        "Try it today.",
        "Isn't your identity...",
        "<i>and your peace of mind...</i>",
        "worth it?",
        "Here's how Aura makes it as easy",
        "as 1-2-3:"
    ]
}

export const suggestionData = {
    box1: {
        img: "./images/chooseplan.webp",
        title: "1. Gives you options",
        text: [
            "Pick the plan that meets your needs.",
            "Then log in with 2-factor authentication."
        ]
    },
    box2: {
        img: "./images/accounts.webp",
        title: "2. Links your accounts",
        text: [
            "Enables you to link your accounts quick and easy: banks, credit cards, investments, etc."
        ]
    },
    box3: {
        img: "./images/work.webp",
        title: "3. Starts monitoring",
        text: [
            "Aura goes to work monitoring your identity watchlist and other credit-related alerts.",
        ]
    }
}

export const AuraboxData = [
    "<u><i>You have 2 choices</i></u>",
    "<div class='flex justify-center sm:justify-start items-center gap-1 sm:gap-2 py-0.5'><img class='w-4 h-4 sm:w-7 sm:h-7' src='./images/redcircle.webp' alt='red-circle' /> <p class='text-[17px] sm:text-2xl text-nowrap sm:text-wrap'>Ignore this page & hope you're not hacked.</p></div>",
    "<div class='flex justify-center sm:justify-start items-center gap-1 sm:gap-2 py-0.5'><img class='w-4 h-4 sm:w-7 sm:h-7' src='./images/check.webp' alt='red-circle' /> <p class='text-[17px] sm:text-2xl text-nowrap sm:text-wrap '>Use the 8 free tips above & <strong>try</strong> Aura.</p></div>",
    "Why not start today?",
    "Aura makes it so easy.",
    "Try risk-free with our",
    "60-day money-back guarantee."
]

export const reviewData: ReviewData = {

    review1: {
        Leftside: {
            img: "",
            title: "CoolGirl",
        },
        Rightside: {
            title: "Great company",
            text: '"This company is great for the price. They keep me updated on recent transactions, my credit reports, removing dark web activity and more. You also speak with real people, lololol, who are friendly. Would recommend this company for your internet security needs."'
        }
    },

    review2: {
        Leftside: {
            title: "Ami Pagana",
        },
        Rightside: {
            title: "Aura agent was extremely helpful and....",
            text: '"Juanita was extremely helpful and knowledgeable. She guided me through several calls to creditors that had either issued me."'
        }
    },

    review3: {
        Leftside: {
            title: "Stephen Basile",
        },
        Rightside: {
            title: "Aura is Awesome",
            text: '"After being a victim of identity theft when my social security card got "lost" in the mail, my credit was ruined."'
        }
    },

    review4: {
        Leftside: {
            title: "Demetrius Moultrie",
        },
        Rightside: {
            title: "Made my life a lot easier and secure.",
            text: '"Made my life a lot easier with 24hr protection. I feel safe with Aura watching over my identity and my electronic devices."'
        }
    },

    review5: {
        Leftside: {
            title: "Maurice Leistman",
        },
        Rightside: {
            title: "Best product I've used",
            text: `"I've used this product for a couple of years now and have not had any problems. I have on both of my devices never a problem. a little costly but it's a lot better than the alternative. I've used a few different ones, but this suits me the best."`
        }
    },

    review6: {
        Leftside: {
            title: "David Arnold",
        },
        Rightside: {
            title: "21 century security",
            text: '"Your service has been great and comforting during my short time as a Aura customer."'
        }
    },

    review7: {
        Leftside: {
            title: "Gary D.",
        },
        Rightside: {
            title: "Thanks Aura for making me feel safe...",
            text: '"Thanks Aura for making me feel safe while working on my computer. I also appreciate the reports detailing what has been going on."'
        }
    },

    review8: {
        Leftside: {
            title: "Brooke McEntee",
        },
        Rightside: {
            title: "Excellent Customer Support",
            text: `"I contacted Aura's support team to help me resolve an issue and they were extremely patient and helpful. I appreciate the care... Read More"`
        }
    },

    review9: {
        Leftside: {
            img: "./images/Scammer.jpg",
            title: "Scammer Payback",
            text: "YouTube star"
        },
        Rightside: {
            text: `"It's very powerful to have the information and know-how to protect yourself. Aura is foundational to protecting your identity."`
        }
    },

    review10: {
        Leftside: {
            img: "./images/Heavy.jpg",
            title: "Heavy D Sparks",
            text: "Social media star"
        },
        Rightside: {
            title: "",
            text: `“Aura is way easier and more effective than anything else I've found. It really has every single feature that I could possibly want for identity protection and just overall privacy."`
        }
    }
};

export const logoImages = [
    "./images/c-1.jpg",
    "./images/c-2.jpg",
    "./images/c-3.jpg",
    "./images/c-4.jpg",
]

export const faqData = [
    {
        question: "What is indentity theft?",
        answer: "When a fraudster steals your personal data (name, address, phone number, social security number, credit card number, passport number, etc.) to commit crimes in your name. Identity thieves have a singular goal: steal your personally identifiable information (PII) and use it to get a payday."
    },

    {
        question: "How does identity theft happen?",
        answer: [
            "While there are many ways, here are 4 of the most common:",
            "<span class='font-semibold text-lg sm:text-xl underline'>Data Breaches</span>‍ - scammers hack a company’s database or get stolen information from the Dark Web. Stolen data includes any personal info you've saved on a website, from passwords and credit card details to Social Security numbers.",
            "<span class='font-semibold text-lg sm:text-xl underline'>‍Viruses & Malware</span> - If you ever visited an unknown website, clicked on a strange link, or connected an unfamiliar USB into your device, you may be at risk of accidentally downloading harmful software.",
            `<span class='font-semibold text-lg sm:text-xl underline'>Phishing Attacks</span>‍ - Commonly delivered by email, text message, and DMs on social media from people you don't recognize. They’ll want you to “confirm your identity” or "prove it's really you" by asking you to enter your username and password. Phishing attacks also target kids on social media and online gaming forums."`,
            "<span class='font-semibold text-lg sm:text-xl underline'>Physical Theft</span>‍ - A stolen or lost driver’s license, Social Security card, or even your physical mail can be used to commit ID theft, such as your bank account number.",
        ]
    },

    {
        question: "What is White Glove Fraud Resolution?",
        answer: "It takes the guesswork out of resolving the situation on your own. It removes the stress of recovering your identity and assets if you’re a victim of identity theft or financial fraud. Your White Glove agent will work with you to craft a plan to help prevent and recover existing losses or damages while navigating credit bureaus and federal institutions."
    },

    {
        question: "How does the 60 day money-back guarantee work?",
        answer: "Your satisfaction with Aura products and services is their top priority. That’s why they offer a 60 day money-back guarantee for all annual membership plans. To cancel and request a refund, simply call Customer Support within 60 days of enrollment and you’ll get a full refund of your annual membership cost."
    },

    {
        question: "What does Identity Theft Insurance cover?",
        answer: [
            "All Aura plans include a $1M Identity Theft Insurance shield. This provides coverage for eligible losses after a stolen identity event, including:",
            "<li class='text-lg tracking-tighter ml-6 leading-3'>Aggregate Limit of Insurance: $1,000,000 per policy period</li>",
            "<li class='text-lg tracking-tighter ml-6 leading-3'>Lost Wages: $2,000 per week, for 5 weeks maximum</li>",
            "<li class='text-lg tracking-tighter ml-6 leading-3'>Travel Expenses: $1,000 per policy period</li>",
            "<li class='text-lg tracking-tighter ml-6 leading-3'>Certified Public Accountant Costs: $1,000 per policy period</li>"
        ]

    }
]

export const sourceData = [
    {
        link: "https://www.ftc.gov/news-events/news/press-releases/2024/02/nationwide-fraud-losses-top-10-billion-2023-ftc-steps-efforts-protect-public",
        text: "Nationwide Fraud Losses Top $10B, FTC Steps Up Efforts to Protect Public"
    },

    {
        link: "https://bjs.ojp.gov/press-release/victims-identity-theft-2021?utm_source=chatgpt.com",
        text: "Bureau of Justice Statistics"
    },

    {
        link: "https://www.hupd.harvard.edu/identity-theft?utm_source=chatgpt.com",
        text: "Harvard University Police Department"
    },

    {
        link: "https://en.wikipedia.org/wiki/Identity_theft_in_the_United_States?utm_source=chatgpt.com",
        text: "Wikipedia"
    },

    {
        link: "https://www.acfe.com/fraud-magazine?id=4294993877",
        text: "'I didn't commit that crime!'"
    },

    {
        link: "https://www.cnbc.com/2023/02/10/how-to-delete-yourself-from-the-internet.html",
        text: "https://www.cnbc.com/2023/02/10/how-to-delete-yourself-from-the-internet.html"
    },

    {
        link: "https://www.experian.com/blogs/ask-experian/what-is-a-virtual-credit-card/",
        text: "https://www.experian.com/blogs/ask-experian/what-is-a-virtual-credit-card/"
    },

    {
        text: "<p class='text-[10px] text-center sm:text-left sm:text-xl sm:py-4 italic mt-1'>60-day money back guarantee is only available for our annual plans purchased through our websites (excludes Amazon) or via our Customer Support team. You may cancel your membership online and request a refund within 60 days of your initial purchase date of an eligible Aura membership purchase.</p>"
    }
]

export const footerData = {
    content: {
        text1: "This is an op ad (opinion advertisement) and not an actual news article, blog, or consumer protection update.",
        text2: "Any story or person depicted on this site is not actual news. Instead, they are based on the results that some people who have used this product or service have achieved. Any results portrayed on this page and in the comments are illustrative, and may not be the results that you achieve with this product or service. The owners of this page could receive compensation for clicks on or purchase of the product/service featured on this site.",
        text3: {
            content: {
                bold: "MARKETING DISCLOSURE:",
                text: "This website is a marketplace. As such, the owner has a monetary connection to the product and services advertised on the site. The owner receives payment whenever a qualified lead is referred but that is the extent of it.",
            }
        },

        text4: {
            content: {
                bold: "ADVERTISING DISCLOSURE: ",
                text: "This website and the products & services referred to on the site are advertising marketplaces. This website is an op ad and not a news publication. Any photographs of persons used on this site are models. The owner of this site and of the products and services referred to on this site only provides a service where consumers can obtain and compare.",
            }
        },

        links : {
            text1 : "Contact",
            text2 : "Privacy Policy",
            text3 : "Terms of Service",
        }
    }
}

export const tableData = [
    ["", { img: { path: "/images/aura.webp", style: "w-[50px] sm:w-[80px]" } }, { text: ["LifeLock", "Ultimate Plus"] }, { text: ["IdentityForce", "UltraSecure + Credit"] }],
    ["Free Trials", { img: { path: "/images/fill-check.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["14-day free trial", "available."] }, { img: { path: "/images/fill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: "30 days free." }, { img: { path: "/images/unfill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" } }],
    ["Monthly Plan Cost (Individual)", "$15/month", "$34.99/month", "$34.90/month"],
    ["Annual plan cost (Individual)", "$12/month", "$19.99/month", "~$29.15/month"],
    ["24/7 U.S.-Based Support", { img: { path: "/images/fill-check.webp", style: "py-1 w-[20px] sm:w-[27px]" } }, { img: { path: "/images/Tilde.webp", style: "py-1 w-[20px] sm:w-[27px]" } }, { img: { path: "/images/unfill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" } }],
    ["Clear Pricing", { text: ["Transparent pricing:", "no hidden renewal", "fees."] }, { text: ["Price increases by", "~42% after the", "first year.",] }, { text: ["Renewal pricing is", "based on subscription", "rates in effect at that", "time. 10"] }],
    ["Identity Monitoring", { img: { path: "/images/fill-check.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["Identity Protection", "with Home and Auto", "Title monitoring.",] }, { img: { path: "/images/Tilde.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["No auto title", "monitoring."] }, { img: { path: "/images/Tilde.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["No home or auto title", "monitoring."] }],
    ["Three-bureau Credit Monitoring", { img: { path: "/images/fill-check.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["Available across all", "plans."] }, { img: { path: "/images/fill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" } }, { img: { path: "/images/fill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" } }],
    ["Online Safety Features", { img: { path: "/images/fill-check.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["VPN, AntiVirus,", "Password Manager,", "Anti-Tracking, Ad", "Blocker, and more."] }, { img: { path: "/images/unfill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["No auto title", "monitoring."] }, { img: { path: "/images/Tilde.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["No home or auto title", "monitoring."] }],
    ["Family Plan With Parental Controls, Child ID Protection", { img: { path: "/images/fill-check.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["5 adults, unlimited", "kids plus Child ID", "Protection, Parental", "Controls, and Safe", "Gaming."] }, { img: { path: "/images/unfill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["2 adults, 5 kids.", "No parental", "controls."] }, { img: { path: "/images/Tilde.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["2 adults, unlimited kids.", "No parental controls."] }],
    ["Social Media Monitoring", { img: { path: "/images/unfill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" } }, { img: { path: "/images/fill-check-gray.webp", style: "py-1 w-[20px] sm:w-[27px]" } }, { img: { path: "/images/Tilde.webp", style: "py-1 w-[20px] sm:w-[27px]" }, text: ["Dark Web social media", "monitoring only."] }],
];