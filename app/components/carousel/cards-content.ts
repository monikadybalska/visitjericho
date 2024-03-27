import { color } from "@material-tailwind/react/types/components/alert";
import hero from ".../public/hero2.jpg";

export const cardsContent: {
  label: string;
  color: color | undefined;
  subsections: {
    title: string[];
    cards: {
      title: string;
      image?: string;
      description: string;
    }[];
    cta: string;
  }[];
}[] = [
  {
    label: "See and do",
    color: "yellow",
    subsections: [
      {
        title: ["Visit the ", "monumental sights"],
        cards: [
          {
            title: "Hisham's Palace",
            image: "/hishamspalace.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Tell es-Sultan",
            image: "/tellessultan.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Jebel Quruntul",
            image: "/jebelquruntul.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Hisham's Palace",
            image: "/hishamspalace.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Tell es-Sultan",
            image: "/tellessultan.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Jebel Quruntul",
            image: "/jebelquruntul.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Hisham's Palace",
            image: "/hishamspalace.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Tell es-Sultan",
            image: "/tellessultan.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Jebel Quruntul",
            image: "/jebelquruntul.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
        ],
        cta: "See all sights",
      },
      {
        title: ["Discover the ", "nature"],
        cards: [
          {
            title: "Trail 1",
            image: "/trail.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Trail 2",
            image: "/trail.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Trail 3",
            image: "/trail.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Trail 4",
            image: "/trail.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Trail 5",
            image: "/trail.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Trail 6",
            image: "/trail.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
        ],
        cta: "See all trails",
      },
      {
        title: ["Taste the ", "cuisine"],
        cards: [
          {
            title: "Restaurant 1",
            image: "/food.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Restaurant 2",
            image: "/food.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Restaurant 3",
            image: "/food.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Restaurant 4",
            image: "/food.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Restaurant 5",
            image: "/food.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Restaurant 6",
            image: "/food.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
        ],
        cta: "See all restaurants",
      },
      {
        title: ["Book your ", "perfect stay"],
        cards: [
          {
            title: "Accommodation 1",
            image: "/accommodation.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Accommodation 2",
            image: "/accommodation.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Accommodation 3",
            image: "/accommodation.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Accommodation 4",
            image: "/accommodation.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Accommodation 5",
            image: "/accommodation.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
          {
            title: "Accommodation 6",
            image: "/accommodation.jpg",
            description:
              "The 8th-century’s Hisham’s Palace is one of the most important...",
          },
        ],
        cta: "See all accommodations",
      },
    ],
  },
  {
    label: "Plan your travel",
    color: "green",
    subsections: [
      {
        title: ["Check out our ", "tips and practicalities"],
        cards: [
          {
            title: "Getting there",
            description: "Description",
          },
          {
            title: "Tips",
            description: "Description",
          },
        ],
        cta: "Learn more",
      },
      {
        title: ["Explore trip ", "ideas and itineraries"],
        cards: [
          {
            title: "Jericho Crown Jewels",
            image: "/hishamspalace.jpg",
            description: "Description",
          },
          {
            title: "Jericho Crown Jewels",
            image: "/hishamspalace.jpg",
            description: "Description",
          },
          {
            title: "Jericho Crown Jewels",
            image: "/hishamspalace.jpg",
            description: "Description",
          },
        ],
        cta: "Learn more",
      },
    ],
  },
  {
    label: "Meet the people",
    color: "pink",
    subsections: [
      {
        title: ["Meet the ", "local people"],
        cards: [
          {
            title: "Place 1",
            image: "/people.jpg",
            description: "Description",
          },
          {
            title: "Place 2",
            image: "/people.jpg",
            description: "Description",
          },
          {
            title: "Place 3",
            image: "/people.jpg",
            description: "Description",
          },
          {
            title: "Place 4",
            image: "/people.jpg",
            description: "Description",
          },
          {
            title: "Place 5",
            image: "/people.jpg",
            description: "Description",
          },
          {
            title: "Place 6",
            image: "/people.jpg",
            description: "Description",
          },
        ],
        cta: "See all places",
      },
    ],
  },
];
