export interface Image {
  node: {
    mediaItemUrl: string;
  };
}

export type SubcategoryPagePreview = {
  title: string;
  ctaText: string;
};
export type SubcategoryPageHeader = {
  title: string;
  subtitle: string;
  image: Image;
};

export type PageDescription = {
  description: string;
};

export interface Card {
  slug: string;
  title: string;
  thumbnail: Image;
  description: string;
  cta: string;
}
export interface Listing extends Card {
  displayOnHomepage: boolean;
  priority: number;
  days?: number;
  attractions?: string;
}
export interface PracticalitiesPreviews {
  practicalities: {
    practicalitiesFields: {
      preview: {
        gettingTherePreview: {
          title: string;
          description: string;
        };
        tipsPreview: {
          title: string;
          description: string;
        };
      };
    };
  };
}
export interface PackagesPreviews {
  packages: {
    packagesFields: {
      preview: {
        packagePreviews: {
          package1Preview: {
            title: string;
            price: string;
            description: string;
            cta: string;
          };
          package2Preview: {
            title: string;
            price: string;
            description: string;
            cta: string;
          };
          package3Preview: {
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

export interface MorePlacesPagesPreviews {
  title: string;
  cards: {
    slug: string;
    title: string;
    thumbnail: Image;
    ctaText: string;
  }[];
}

export interface PracticalitiesPageDirections {
  practicalities: {
    practicalitiesFields: {
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
    };
  };
}
export interface PracticalitiesPageTips {
  practicalities: {
    practicalitiesFields: {
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

export interface PackagesPageBenefits {
  packages: {
    packagesFields: {
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
    };
  };
}
export interface PackagesPageHowItWorks {
  packages: {
    packagesFields: {
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
    };
  };
}
export interface PackagesPagePackages {
  packages: {
    packagesFields: {
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

export interface ItineraryHeading {
  title: string;
  cta: {
    text: string;
    link: string;
  };
  numberOfDays: number;
  numberOfAttractions: string;
}
export interface ItineraryStep {
  title: string;
  description: string;
  cta: {
    title: string;
    url: string;
  };
  image: Image;
}
export interface ItineraryDay {
  step1: ItineraryStep;
  step2: ItineraryStep;
  step3: ItineraryStep;
  step4: ItineraryStep;
  step5: ItineraryStep;
  step6: ItineraryStep;
}
export interface ItineraryTimeline {
  day1: ItineraryDay;
  day2: ItineraryDay;
  day3: ItineraryDay;
}
