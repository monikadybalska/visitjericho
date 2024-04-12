import SightsIcon from "../icons/SightsIcon";
import NatureIcon from "../icons/NatureIcon";
import RestaurantIcon from "../icons/RestaurantIcon";
import AccommodationIcon from "../icons/AccommodationIcon";
import PracticalitiesIcon from "../icons/PracticalitiesIcon";
import ItinerariesIcon from "../icons/ItinerariesIcon";

export const navListMenuItemsData = [
  {
    title: "See and do",
    slug: "see-and-do",
    items: [
      {
        title: "Sights",
        icon: SightsIcon,
        slug: "sights",
      },
      {
        title: "Nature",
        icon: NatureIcon,
        slug: "nature",
      },
      {
        title: "Food",
        icon: RestaurantIcon,
        slug: "food",
      },
      {
        title: "Accommodation",
        icon: AccommodationIcon,
        slug: "accommodation",
      },
    ],
  },
  {
    title: "Plan your travel",
    slug: "plan-your-travel",
    items: [
      {
        title: "Practicalities",
        icon: PracticalitiesIcon,
        slug: "practicalities",
      },
      {
        title: "Trip itineraries",
        icon: ItinerariesIcon,
        slug: "itineraries",
      },
    ],
  },
];
