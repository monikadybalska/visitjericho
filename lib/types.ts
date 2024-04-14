import { color } from "@material-tailwind/react/types/components/alert";

export interface ImageUrl {
  node: {
    mediaItemUrl: string;
  };
}

export type Object =
  | { type: "places"; fields: "placeFields" }
  | { type: "itineraries"; fields: "itineraryFields" }
  | { type: "practicalities"; fields: "practicalitiesFields" };

export interface HomepageData {
  sections: {
    nodes: {
      name: HomepageSection["title"];
      sectionFields: {
        order: HomepageSection["order"];
        color: color;
      };
      children: {
        nodes: {
          slug: HomepageSubsection["slug"];
          subsectionFields: {
            preview: {
              order: HomepageSubsection["order"];
              title: string;
              cta: string;
            };
          };
          places: {
            nodes: {
              slug: string;
              placeFields: {
                preview: Preview;
              };
            }[];
          };
        }[];
      };
    }[];
  };
}

export interface HomepageSection {
  order: number;
  title: string;
  color: color;
  subsections: HomepageSubsection[];
}

export interface HomepageSubsection {
  order: number;
  slug: string;
  title: string;
  cta: string;
  places: Preview[];
  color?: color;
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

export interface CategoryData {
  section: {
    slug: string;
    name: string;
    sectionFields: {
      color: color;
    };
  };
}

export interface Category {
  slug: string;
  name: string;
  color: color;
}

export interface SubcategoryData {
  section: {
    slug: string;
    subsectionFields: {
      title: string;
      image: ImageUrl;
    };
  };
}
export interface Subcategory {
  title: string;
  image: ImageUrl;
  slug: string;
}

export interface SubcategoriesPreviewsData {
  section: {
    children: {
      nodes: SubcategoryPreviewData["section"][];
    };
  };
}

export interface SubcategoryPreviewData {
  section: {
    slug: string;
    subsectionFields: {
      preview: {
        order: number;
        title: string;
        thumbnail?: ImageUrl;
        cta: string;
      };
    };
  };
}
export interface SubcategoryPreview {
  slug: string;
  order: number;
  title: string;
  thumbnail?: ImageUrl;
  cta: string;
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
  package1: Pick<Preview, "title" | "description" | "cta">;
  package2: Pick<Preview, "title" | "description" | "cta">;
  package3: Pick<Preview, "title" | "description" | "cta">;
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

export interface PlacesPage {
  slug: string;
  title: string;
  subtitle: string;
  image: ImageUrl;
  description: string;
  listingsTitle: string;
  moreItemsTitle: string;
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

export interface PracticalitiesPage {
  title: string;
  subtitle: string;
  image: ImageUrl;
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
