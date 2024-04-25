import SightsIcon from "../../../public/SightsIcon";
import NatureIcon from "../../../public/NatureIcon";
import RestaurantIcon from "../../../public/RestaurantIcon";
import AccommodationIcon from "../../../public/AccommodationIcon";
import PracticalitiesIcon from "../../../public/PracticalitiesIcon";
import ItinerariesIcon from "../../../public/ItinerariesIcon";

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
