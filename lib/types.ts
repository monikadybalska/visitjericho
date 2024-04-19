import { color } from "@material-tailwind/react/types/components/alert";

export interface ImageUrl {
  node: {
    mediaItemUrl: string;
  };
}

export interface CategoryPreviewData {
  section: {
    name: string;
    sectionFields: {
      color: color;
    };
  };
}
export interface CategoryPreview {
  name: CategoryPreviewData["section"]["name"];
  color: CategoryPreviewData["section"]["sectionFields"]["color"];
}
export interface SubcategoryPreviewData {
  section: {
    slug: string;
    subsectionFields: {
      preview: {
        title: string;
        thumbnail?: ImageUrl;
        cta: string;
        description?: string;
      };
    };
  };
}
export interface SubcategoryPreview {
  slug: SubcategoryPreviewData["section"]["slug"];
  title: SubcategoryPreviewData["section"]["subsectionFields"]["preview"]["title"];
  thumbnail?: SubcategoryPreviewData["section"]["subsectionFields"]["preview"]["thumbnail"];
  cta: SubcategoryPreviewData["section"]["subsectionFields"]["preview"]["cta"];
  description?: string;
}
export interface Preview {
  slug?: string;
  title: string;
  thumbnail?: ImageUrl;
  description?: string;
  cta?: string;
  displayOnHomepage?: boolean;
  priority: number;
  color?: color;
}
export interface PlacesPreviewsData {
  section: {
    sectionFields: {
      color: color;
    };
    places: {
      nodes: {
        slug: string;
        placeFields: {
          preview: Preview;
        };
      }[];
    };
  };
}
export interface ItinerariesPreviewsData {
  section: {
    sectionFields: {
      color: color;
    };
    itineraries: {
      nodes: {
        slug: string;
        itineraryFields: {
          preview: Preview;
        };
      }[];
    };
  };
}
export interface PracticalitiesPreviewsData {
  section: {
    sectionFields: {
      color: color;
    };
    practicalities: {
      nodes: {
        slug: string;
        practicalitiesFields: {
          gettingTherePreview: Preview;
          tipsPreview: Preview;
        };
      }[];
    };
  };
}
export interface PlacesPreviews {
  color: color;
  places: Preview[];
}
export interface ItinerariesPreviews {
  color: color;
  itineraries: Preview[];
}
export interface PracticalitiesPreviews {
  slug: string;
  color: color;
  gettingThere: Omit<Preview, "slug">;
  tips: Omit<Preview, "slug">;
}
export interface PackagesPreviewsData {
  section: {
    sectionFields: {
      color: color;
    };
    packages: {
      nodes: {
        slug: string;
        packagesFields: {
          preview: {
            package1Preview: {
              title: string;
              description: string;
              cta: string;
            };
            package2Preview: {
              title: string;
              description: string;
              cta: string;
            };
            package3Preview: {
              title: string;
              description: string;
              cta: string;
            };
          };
        };
      }[];
    };
  };
}
export interface PackagesPreviews {
  slug: string;
  color: color;
  packages: Pick<Preview, "title" | "description" | "cta">[];
}

export interface SubcategoryData {
  section: {
    subsectionFields: {
      title: string;
      subtitle: string;
      image: ImageUrl;
    };
  };
}
export interface Subcategory {
  title: SubcategoryData["section"]["subsectionFields"]["title"];
  subtitle: string;
  image: SubcategoryData["section"]["subsectionFields"]["image"];
}
export interface PlacesPageData {
  placesPage: {
    slug: string;
    placesPageFields: {
      title: string;
      subtitle: string;
      image: ImageUrl;
      description: string;
      listingsTitle: string;
      moreItemsTitle: string;
    };
  };
}
export interface PlacesPage extends Subcategory {
  slug: string;
  description: string;
  listingsTitle: string;
  moreItemsTitle: string;
}
export interface SeeAndDoPreviewsData {
  section: {
    children: {
      nodes: SubcategoryPreviewData["section"][];
    };
  };
}
export interface ItinerariesPageData {
  itinerariesPage: {
    itinerariesPageFields: {
      title: string;
      subtitle: string;
      image: ImageUrl;
    };
  };
}
export interface ItinerariesPage {
  title: string;
  subtitle: string;
  image: ImageUrl;
}
export interface PracticalitiesPageData {
  practicalities: {
    sections: {
      nodes: {
        sectionFields: {
          color: color;
        };
      }[];
    };
    practicalitiesFields: {
      title: string;
      subtitle: string;
      image: ImageUrl;
      gettingThere: {
        title: string;
        cards: {
          card1: {
            title: string;
            description: string;
          };
          card2: {
            title: string;
            description: string;
          };
          card3: {
            title: string;
            description: string;
          };
          card4: {
            title: string;
            description: string;
          };
        };
      };
      tips: {
        title: string;
        tips: {
          tip1: {
            title: string;
            description: string;
          };
          tip2: {
            title: string;
            description: string;
          };
          tip3: {
            title: string;
            description: string;
          };
          tip4: {
            title: string;
            description: string;
          };
        };
      };
    };
  };
}
export interface PracticalitiesPage extends Subcategory {
  color: color;
  gettingThere: {
    title: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  tips: {
    title: string;
    tips: {
      title: string;
      description: string;
    }[];
  };
}
export interface PackagesPageData {
  packages: {
    sections: {
      nodes: {
        sectionFields: {
          color: color;
        };
      }[];
    };
    packagesFields: {
      title: string;
      subtitle: string;
      image: ImageUrl;
      benefits: {
        title: string;
        cards: {
          card1: {
            title: string;
            description: string;
          };
          card2: {
            title: string;
            description: string;
          };
          card3: {
            title: string;
            description: string;
          };
          card4: {
            title: string;
            description: string;
          };
        };
      };
      howItWorks: {
        title: string;
        steps: {
          step1: string;
          step2: string;
          step3: string;
          step4: string;
          step5: string;
        };
      };
      packages: {
        title: string;
        packages: {
          package1: {
            title: string;
            price: string;
            description: string;
            cta: string;
          };
          package2: {
            title: string;
            price: string;
            description: string;
            cta: string;
          };
          package3: {
            title: string;
            price: string;
            description: string;
            cta: string;
          };
        };
      };
    };
  };
}
export interface PackagesPage extends Subcategory {
  color: color;
  benefits: {
    title: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  howItWorks: {
    title: string;
    steps: string[];
  };
  packages: {
    title: string;
    packages: {
      title: string;
      price: string;
      description: string;
      cta: string;
    }[];
  };
}

export interface ItineraryData {
  itinerary: {
    title: string;
    content: string;
    itineraryFields: {
      numberOfDays: number;
      numberOfAttractions: string;
      cta: {
        title: string;
        url: string;
      };
      image: ImageUrl;
      gettingThere: {
        cta: {
          title: string;
          url: string;
        };
      };
      timeline: {
        day1: ItineraryDay;
        day2: ItineraryDay;
        day3: ItineraryDay;
      };
    };
  };
}
export interface ItineraryDay {
  step1: ItineraryStep;
  step2: ItineraryStep;
  step3: ItineraryStep;
  step4: ItineraryStep;
  step5: ItineraryStep;
  step6: ItineraryStep;
}
export interface ItineraryStep {
  title: string;
  description: string;
  cta: {
    title: string;
    url: string;
  };
  image: ImageUrl;
}
export interface Itinerary {
  title: string;
  content: string;
  numberOfDays: number;
  numberOfAttractions: string;
  cta: {
    text: string;
    link: string;
  };
  image: ImageUrl;
  gettingThere: {
    cta: {
      title: string;
      url: string;
    };
  };
  timeline: {
    day1: ItineraryStep[];
    day2: ItineraryStep[];
    day3: ItineraryStep[];
  };
}
