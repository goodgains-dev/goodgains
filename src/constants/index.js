import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Learn More",
    url: "https://portfolio-goatsonthemoons-projects.vercel.app",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "https://goodgainsgram.vercel.app/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "https://goodgainsgram.vercel.app/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Data Ownership",
  "Credentials enhanced",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice Chat",
    text: "Enable your microphone to allow for voice and video calling, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "in progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Profit Sharing",
    text: "A percent of all revenue generated from advertisments between our apps will be distributed to users via our payment processor powered by blockchain technology.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Organization customization",
    text: "Allow organization's to customize the App's appearance and behavior, making it more engaging and improving productivity for organization members.",
    date: "May 2023",
    status: "in progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the profile to access external data sources, such as social media apps or other messanging platforms, to provide more relevant recommendations.",
    date: "May 2023",
    status: " in progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With our consolidation and badge system API thru blockchain, it's the perfect solution for teams looking to work smarter and identify themselves as a valued team member. Our Badge sytem API seamlessly integrates into other apps.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart consolidation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Freemium",
    description: "GoodGains Profile, personalized recommendations",
    price: "0.99",
    features: [
      "A chatfeed that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features for a one time $0.99 fee",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced features, priority support, your own customizable badge for your group",
    price: "6.99",
    features: [
      "Advanced group chat features",
      "Lower transaction fees and an ad-less experience",
      "Priority support to solve issues quickly and additional ad revenue for the user",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom UI for organization needs, advanced analytics, dedicated account",
    price: null,
    features: [
      "All organization memebrs recieve premium version of app",
      "Personalized UI to meet organization needs",
      "Unlimited voice and video meetings, and custom badge for organization",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Instant Messanging",
    text: "Allows users to quickly message peers from organizations of all kinds.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Data Ownership",
    text: "The app is built on the blockchain, allowing for decentralized data ownership where you own your digital identity.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with our apps thru one easy to use profile, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast payments",
    text: "Lets users quickly pay other users and recieve ad revenue thru our profile's built-in wallet functionality.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Video Calling",
    text: "Lets users video call for all purposes ranging from a meeting to a friendly chat.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improving everyday",
    text: "The app is constantly improving with new features being developed and thru customer feedback from our userbase.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
