export type Cameo = {
  name: string;
  role: string;
  honorific?: string;
  portrait?: string;
};

export type Person = {
  name: string;
  role: string;
  portrait?: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  body: string;
  side: "left" | "right";
};

export type Value = {
  numeral: string;
  title: string;
  body: string;
};

export type Campus = {
  name: string;
  founded: string;
  region: string;
  body: string;
  image?: string;
  logo?: string;
  website?: string;
};

/* First Chairman — a special historical figure surfaced separately */
export const firstChairman: Cameo = {
  name: "Dr. Sarvepalli Radhakrishnan",
  role: "First Chairman, 1952",
  honorific: "Philosopher · 2nd President of India",
  portrait: "/images/people/radhakrishnan.jpg",
};

/* Managing Committee — the Society's executive leadership */
export const managingCommittee: Person[] = [
  {
    name: "Mr. Gusti J. Noria",
    role: "President",
    portrait: "/images/people/gusti-noria.png",
  },
  {
    name: "Mr. M. A. Faiz Khan",
    role: "Vice President",
    portrait: "/images/people/faiz-khan.png",
  },
  {
    name: "Mr. Jalagam Venkat Rao",
    role: "Secretary & Treasurer",
    portrait: "/images/people/jalagam-venkat-rao.png",
  },
  {
    name: "Mr. J. Vikramdev Rao",
    role: "Member",
    portrait: "/images/people/vikramdev-rao.jpg",
  },
  {
    name: "Mrs. Marri Nidhi Reddy",
    role: "Member",
    portrait: "/images/people/nidhi-reddy.jpg",
  },
  {
    name: "Mr. K. Ashvani Kanth Rao",
    role: "Member",
    portrait: "/images/people/ashvani-kanth-rao.png",
  },
  {
    name: "Mr. Hemant Jalan",
    role: "Member",
    portrait: "/images/people/hemant-jalan.png",
  },
];

/* Board of Governors */
export const boardOfGovernors: Person[] = [
  {
    name: "Dr. Yogita Rana, IAS",
    role: "Chairperson · Secretary to Govt., Education Dept., TG",
    portrait: "/images/people/yogita-rana.jpg",
  },
  {
    name: "Sri. R. Raghuram Reddy",
    role: "Vice Chairman",
    portrait: "/images/people/raghuram-reddy.png",
  },
  {
    name: "Dr. E. Naveen Nicolas, IAS",
    role: "Director of School Education, TG",
    portrait: "/images/people/naveen-nicolas.jpg",
  },
  {
    name: "Sri. P. Shyam Sunder",
    role: "Asst. Secretary to Govt., Finance Dept., TG",
    portrait: "/images/people/shyam-sunder.png",
  },
  {
    name: "Sri. M. A. Faiz Khan",
    role: "Board Member",
    portrait: "/images/people/faiz-khan.png",
  },
  {
    name: "Sri. M. Adithya Reddy",
    role: "Board Member",
    portrait: "/images/people/adithya-reddy.jpg",
  },
  {
    name: "Sri. G. Appnender Babu",
    role: "Board Member",
    portrait: "/images/people/appnender-babu.png",
  },
  {
    name: "Sri. V. Venu Vinod",
    role: "Board Member",
    portrait: "/images/people/venu-vinod.png",
  },
  {
    name: "Prof. T. Kishen Kumar Reddy",
    role: "Vice Chancellor, JNTUH · Member",
    portrait: "/images/people/kishen-kumar-reddy.png",
  },
  {
    name: "Prof. Kumar Molugaram",
    role: "Vice Chancellor, Osmania University",
    portrait: "/images/people/kumar-molugaram.jpg",
  },
  {
    name: "Dr. Skand Bali",
    role: "Principal, HPS Begumpet",
    portrait: "/images/people/skand-bali.png",
  },
  {
    name: "Dr. S. Narasimha Reddy",
    role: "Principal, HPS Ramanthapur",
    portrait: "/images/people/narasimha-reddy.jpg",
  },
  {
    name: "Smt. M. Radha Reddy",
    role: "ASPD, Samagra Shiksha, TG · Secretary to BoG (FAC)",
    portrait: "/images/people/radha-reddy.jpg",
  },
];

/* Society Members (Registered) — Former Presidents first, then alphabetical-ish from the source page order */
export const societyMembers: Person[] = [
  {
    name: "Mr. R. Surender Reddy",
    role: "Former President",
    portrait: "/images/people/surender-reddy.jpg",
  },
  {
    name: "Mr. P. Jagadish Reddy",
    role: "Former President",
    portrait: "/images/people/jagadish-reddy.jpg",
  },
  {
    name: "Mr. A. Shyam Mohan",
    role: "Immediate Past President",
    portrait: "/images/people/shyam-mohan.jpg",
  },
  {
    name: "Mrs. Sreelatha Bhupal",
    role: "Member",
    portrait: "/images/people/sreelatha-bhupal.jpg",
  },
  {
    name: "Mr. G. K. Mangaraj",
    role: "Member",
    portrait: "/images/people/gk-mangaraj.jpg",
  },
  {
    name: "Dr. Jairamchander Pingle",
    role: "Member",
    portrait: "/images/people/jairamchander-pingle.jpg",
  },
  {
    name: "Mr. P. Narendernath Choudary",
    role: "Member",
    portrait: "/images/people/narendernath-choudary.jpg",
  },
  {
    name: "Mrs. Yamuna Ranga Rao",
    role: "Member",
    portrait: "/images/people/yamuna-ranga-rao.jpg",
  },
  {
    name: "Mr. V. R. Reddy",
    role: "Member",
    portrait: "/images/people/vr-reddy.jpg",
  },
  {
    name: "Mr. R. V. Rama Mohan Rao",
    role: "Member",
    portrait: "/images/people/rv-rama-mohan-rao.jpg",
  },
  {
    name: "Dr. Arun Kabra",
    role: "Member",
    portrait: "/images/people/arun-kabra.jpg",
  },
  {
    name: "Mr. V. B. Shanker",
    role: "Member",
    portrait: "/images/people/vb-shanker.jpg",
  },
  {
    name: "Mrs. Anju Poddar",
    role: "Member",
    portrait: "/images/people/anju-poddar.jpg",
  },
  {
    name: "Mr. K. Gopal Choudary",
    role: "Member",
    portrait: "/images/people/gopal-choudary.jpg",
  },
  {
    name: "Mr. Subbarao V. Tipirneni",
    role: "Member",
    portrait: "/images/people/subbarao-tipirneni.jpg",
  },
  {
    name: "Mr. Chandrashekhar Reddy Kundur",
    role: "Member",
    portrait: "/images/people/chandrashekhar-reddy.jpg",
  },
  {
    name: "Mrs. Parveez Chinoy",
    role: "Member",
    portrait: "/images/people/parveez-chinoy.jpg",
  },
  {
    name: "Dr. G. Vivekanand",
    role: "Member",
    portrait: "/images/people/g-vivekanand.jpg",
  },
  {
    name: "Sri. K. Somnath",
    role: "Member",
    portrait: "/images/people/k-somnath.jpg",
  },
  {
    name: "Mr. Badiga Ramakrishna",
    role: "Member",
    portrait: "/images/people/badiga-ramakrishna.jpg",
  },
  {
    name: "Mr. N. Kiran Kumar Reddy",
    role: "Member",
    portrait: "/images/people/kiran-kumar-reddy.jpg",
  },
  {
    name: "Mr. M. Adithya Reddy",
    role: "Member",
    portrait: "/images/people/adithya-reddy.jpg",
  },
  {
    name: "Mr. Akbaruddin Owaisi",
    role: "Member",
    portrait: "/images/people/akbaruddin-owaisi.jpg",
  },
  {
    name: "Mr. Narender Surana",
    role: "Member",
    portrait: "/images/people/narender-surana.jpg",
  },
  {
    name: "Sri. R. Raghuram Reddy",
    role: "Member",
    portrait: "/images/people/raghuram-reddy.png",
  },
  {
    name: "Mr. C. Parthasarathy",
    role: "Member",
    portrait: "/images/people/c-parthasarathy.jpg",
  },
  {
    name: "Dr. Sriram Chandra Damaraju",
    role: "Member",
    portrait: "/images/people/sriram-chandra-damaraju.jpg",
  },
  {
    name: "Mr. B. Subhash Reddy",
    role: "Member",
    portrait: "/images/people/subhash-reddy.jpg",
  },
  {
    name: "Sri. G. Appnender Babu",
    role: "Member",
    portrait: "/images/people/appnender-babu.png",
  },
  {
    name: "Mr. Masiuddin Ahmed",
    role: "Member",
    portrait: "/images/people/masiuddin-ahmed.jpg",
  },
  {
    name: "Prof. B. R. Virmani",
    role: "Member",
    portrait: "/images/people/br-virmani.jpg",
  },
  {
    name: "Mr. Shaaz Mehmood",
    role: "Member",
    portrait: "/images/people/shaaz-mehmood.png",
  },
  {
    name: "Mr. Keshav Bhupal",
    role: "Member",
    portrait: "/images/people/keshav-bhupal.png",
  },
  {
    name: "Mrs. Mateen Ansari",
    role: "Member",
    portrait: "/images/people/mateen-ansari.jpg",
  },
  {
    name: "Justice R. Raghunandan Rao",
    role: "Member",
    portrait: "/images/people/raghunandan-rao.jpg",
  },
  {
    name: "Amb. Syed Akbaruddin",
    role: "Member · IFS (Retd.)",
    portrait: "/images/people/syed-akbaruddin.png",
  },
  {
    name: "Mr. Eswara Venkatesam",
    role: "Member",
    portrait: "/images/people/eswara-venkatesam.png",
  },
  {
    name: "Sri. V. Venu Vinod",
    role: "Member",
    portrait: "/images/people/venu-vinod.png",
  },
  {
    name: "Dr. G. V. Rao",
    role: "Member",
    portrait: "/images/people/gv-rao.png",
  },
];

/* Affiliate Membership */
export const affiliateMembers: Person[] = [
  {
    name: "Mr. Kotimreddy Vinay Reddy",
    role: "Affiliate Member",
    portrait: "/images/people/vinay-reddy.jpeg",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "1919",
    side: "right",
    title: "A Proposal is Penned",
    body: "Shortly after the First World War, H.W. Wakefield — Director General of the Revenue Department and Director of the Court of Wards — proposes a residential institution to educate the sons of <em>jagirdars</em> and orphans of the Nizam's dominions, rivalling Eton and Harrow.",
  },
  {
    year: "1921",
    side: "left",
    title: "The Begumpet Estate",
    body: "Princess Jahandar Unnissa Begum Sahiba — <em>Lady Viqar-ul-Umra</em> — grants nearly <strong>89 acres</strong> of her Begumpet estate, on par with Eton and Harrow, for the establishment of the College.",
  },
  {
    year: "1923",
    side: "right",
    title: "Jagirdars' College Established",
    body: "By Farman-e-Mubarak of the Seventh Nizam, Mir Osman Ali Khan, with the support of Sir Ross Masood, Director of Public Education. Founder-Principal Mr. H.W. Shawcross opens the institution with five students and six teachers.",
  },
  {
    year: "1950",
    side: "left",
    title: "A Society is Formed",
    body: "Following India's independence and the abolition of the Jagirdari system, <strong>The Hyderabad Public School Society</strong> is constituted under the Societies Registration Act to steward and develop the institution.",
  },
  {
    year: "1951",
    side: "right",
    title: "The Hyderabad Public School",
    body: "Jagirdars' College is reorganised and renamed. Admissions open to children of every community, religion and social background — a defining act of the new republic's spirit.",
  },
  {
    year: "1952",
    side: "left",
    title: "Dr. Sarvepalli Radhakrishnan",
    body: "The eminent philosopher-statesman — later the second President of India — becomes the first Chairman of the Society, shaping its academic philosophy and securing national stature.",
  },
  {
    year: "Today",
    side: "right",
    title: "Four Campuses, One Calling",
    body: "The Society today oversees campuses at Begumpet, Ramanthapur, Kadapa and Warangal — and looks toward <em>Vision 2050</em>: to stand among the foremost schools of the world.",
  },
];

export const values: Value[] = [
  {
    numeral: "i",
    title: "Pursuit of Excellence",
    body: "An abiding desire for continuous improvement with self-discipline — the belief that the quest for excellence is a life-long journey.",
  },
  {
    numeral: "ii",
    title: "Integrity, Courage & Empathy",
    body: "Consistency between thought, speech and action; a strong code of ethics; and the courage to stand for what is right.",
  },
  {
    numeral: "iii",
    title: "Leadership with a Universal Outlook",
    body: "Pride in our Indian heritage, fidelity to the principles of the Constitution, and respect for all fellow beings. Secular. Apolitical.",
  },
  {
    numeral: "iv",
    title: "Social & Environmental Stewardship",
    body: "A commitment to humanity, to other forms of life, and to the fragile environment we share — sensitive to consequence, proactive in action.",
  },
  {
    numeral: "v",
    title: "Equality & Celebration of Diversity",
    body: "Genuine empathy, gender equality, and a tolerant, inclusive school community — sensitive to those with special needs.",
  },
  {
    numeral: "vi",
    title: "Original, Creative & Critical Thinking",
    body: "A scientific temperament; a spirit of enquiry; the ability to analyse, articulate, and solve problems with originality.",
  },
];

export const campuses: Campus[] = [
  {
    name: "Begumpet",
    founded: "1923",
    region: "Hyderabad · The Founding Campus",
    body: "Set on 89 acres of the original Begumpet estate granted by Lady Viqar-ul-Umra, Begumpet is the spiritual home of the institution. The colonnaded heritage buildings and the central dome — symbols recognised across Hyderabad — house a co-educational school of national stature, with alumni who have shaped business, science, the arts and public life.",
    image: "/images/campuses/begumpet.jpg",
    logo: "/images/campuses/logos/begumpet.png",
    website: "https://www.hpsbegumpet.org.in/",
  },
  {
    name: "Ramanthapur",
    founded: "1972",
    region: "East Hyderabad",
    body: "Established on 4th August 1972 by resolution of the Board of Governors and shifted to a 40-acre Osmania University site at Ramanthapur, the school began admitting girls in 1988 and is permanently affiliated to the CBSE. A sister campus that carries forward the same standards of academics, character and service.",
    image: "/images/campuses/ramanthapur.jpg",
    logo: "/images/campuses/logos/ramanthapur.jpg",
    website: "https://hpsramanthapur.org/",
  },
  {
    name: "Kadapa",
    founded: "2005",
    region: "Rayalaseema, Andhra Pradesh",
    body: "A co-educational, English-medium day-boarding and residential school affiliated with the CISCE (New Delhi), HPS Kadapa brought the HPS tradition of public-spirited education to the Rayalaseema region — combining rigorous academics with rich opportunities in sports, the arts and leadership development.",
    image: "/images/campuses/kadapa.jpg",
    logo: "/images/campuses/logos/kadapa.png",
    website: "https://www.hpskadapa.org/",
  },
  {
    name: "Warangal",
    founded: "2016",
    region: "Madikonda, Telangana",
    body: "The institution's youngest campus, set on a fresh site at Madikonda near the historic city of Warangal. Committed to a holistic education that places the child at the centre of learning, HPS Warangal prepares students through academics, values and life skills to become responsible global citizens and future leaders — building on a century of legacy.",
    image: "/images/campuses/warangal.jpg",
    logo: "/images/campuses/logos/warangal.png",
    website: "https://www.hpswarangal.org/",
  },
];
