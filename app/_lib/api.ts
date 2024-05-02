import {
  Image,
  Listing,
  SubcategoryPagePreview,
  SubcategoryPageHeader,
  PracticalitiesPreviews,
  PackagesPreviews,
  MorePlacesPagesPreviews,
  ItineraryTimeline,
  PracticalitiesPageTips,
  PracticalitiesPageDirections,
  PackagesPageBenefits,
  PackagesPageHowItWorks,
  PackagesPagePackages,
} from "./types";

const API_URL: string = "http://3.10.27.185/graphql" || "";

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getSubcategoryPagePreview<T extends string>(
  slug: string,
  fieldGroup: T
): Promise<SubcategoryPagePreview | null> {
  const data: {
    [K in T]: {
      [P in `${T}Fields`]: {
        preview: {
          title: string;
          ctaText: string;
        };
      };
    };
  } = await fetchAPI(
    `query SubcategoryPreview($slug: ID = "id") {
      ${fieldGroup}(id: $slug, idType: SLUG) {
        ${fieldGroup}Fields {
          preview {
            title
            ctaText
          }
        }
      }
    }`,
    { variables: { slug } }
  );

  if (data) {
    return { ...data[fieldGroup][`${fieldGroup}Fields`].preview };
  }

  return null;
}
export async function getSubcategoryPageHeader<T extends string>(
  slug: string,
  fieldGroup: T
): Promise<SubcategoryPageHeader | null> {
  const data: {
    [K in T]: {
      [P in `${T}Fields`]: {
        title: string;
        subtitle: string;
        image: Image;
      };
    };
  } = await fetchAPI(
    `query SubcategoryPageHeader($slug: ID = "slug") {
      ${fieldGroup}(id: $slug, idType: SLUG) {
        ${fieldGroup}Fields {
          title
          subtitle
          image {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }`,
    { variables: { slug } }
  );

  if (data) {
    return { ...data[fieldGroup][`${fieldGroup}Fields`] };
  }

  return null;
}

export async function getPageDescription<T extends string>(
  slug: string,
  fieldGroup: T
): Promise<string | null> {
  const data: {
    [K in T]: {
      [P in `${T}Fields`]: {
        description: string;
      };
    };
  } = await fetchAPI(
    `query PageDescription($slug: ID = "slug") {
      ${fieldGroup}(id: $slug, idType: SLUG) {
        ${fieldGroup}Fields {
          description
        }
      }
    }`,
    { variables: { slug } }
  );

  if (data) {
    return data[fieldGroup][`${fieldGroup}Fields`].description;
  }

  return null;
}

export async function getListingTitle<T extends string>(
  slug: string,
  fieldGroup: T
): Promise<string | null> {
  const data: {
    [K in T]: {
      title: string;
    };
  } = await fetchAPI(
    `query ListingTitle($slug: ID = "slug") {
      ${fieldGroup}(id: $slug, idType: SLUG) {
        title
      }
    }`,
    { variables: { slug } }
  );

  if (data) {
    return data[fieldGroup].title;
  }

  return null;
}
export async function getListingImage<T extends string>(
  slug: string,
  fieldGroup: T
): Promise<Image | null> {
  const image: {
    [K in T]: {
      [P in `${T}Fields`]: {
        image: {
          node: {
            mediaItemUrl: string;
          };
        };
      };
    };
  } = await fetchAPI(
    `
  query ListingImage($slug: ID = "slug") {
    ${fieldGroup}(id: $slug, idType: SLUG) {
      ${fieldGroup}Fields {
        image {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
  `,
    {
      variables: { slug },
    }
  );
  if (image) {
    return image[fieldGroup][`${fieldGroup}Fields`].image;
  }
  return null;
}

export async function getPlacesPagePreview(slug: string) {
  return await getSubcategoryPagePreview(slug, "placesPage");
}
export async function getPracticalitiesPagePreview(slug: string) {
  return await getSubcategoryPagePreview(slug, "practicalities");
}
export async function getItinerariesPagePreview(slug: string) {
  return await getSubcategoryPagePreview(slug, "itinerariesPage");
}
export async function getBookATourPagePreview(slug: string) {
  return await getSubcategoryPagePreview(slug, "packages");
}

export async function getPlacesPreviews(
  slug: string
): Promise<Listing[] | null> {
  const data: {
    section: {
      places: {
        nodes: {
          slug: string;
          placeFields: {
            preview: Listing;
          };
        }[];
      };
    };
  } = await fetchAPI(
    `query PlacesPreviews($slug: ID = "slug") {
      section(id: $slug, idType: SLUG) {
        places {
          nodes {
            slug
            placeFields {
              preview {
                displayOnHomepage
                priority
                title
                thumbnail {
                  node {
                    mediaItemUrl
                  }
                }
                description
                cta
              }
            }
          }
        }
      }
    }`,
    {
      variables: { slug },
    }
  );

  if (data) {
    return data.section.places.nodes
      .map((place) => {
        return {
          ...place.placeFields.preview,
          slug: place.slug,
        };
      })
      .sort((place1, place2) => place2.priority - place1.priority);
  }

  return null;
}
export async function getPracticalitiesPreviews() {
  const data: PracticalitiesPreviews = await fetchAPI(
    `query PracticalitiesPreviews {
      practicalities(id: "practicalities", idType: SLUG) {
        practicalitiesFields {
          preview {
            gettingTherePreview {
              title
              description
            }
            tipsPreview {
              title
              description
            }
          }
        }
      }
    }`
  );

  if (data) {
    return {
      gettingThere:
        data.practicalities.practicalitiesFields.preview.gettingTherePreview,
      tips: data.practicalities.practicalitiesFields.preview.tipsPreview,
    };
  }

  return null;
}
export async function getItinerariesPreviews(): Promise<Listing[] | null> {
  const data: {
    itineraries: {
      nodes: {
        slug: string;
        itineraryFields: {
          preview: Listing;
        };
      }[];
    };
  } = await fetchAPI(
    `query ItinerariesPreviews {
      itineraries {
        nodes {
          slug
          itineraryFields {
            preview {
              displayOnHomepage
              priority
              title
              thumbnail {
                node {
                  mediaItemUrl
                }
              }
              description
              cta
            }
          }
        }
      }
    }`
  );

  if (data) {
    return data.itineraries.nodes.map((itinerary) => {
      return {
        ...itinerary.itineraryFields.preview,
        slug: itinerary.slug,
      };
    });
  }

  return null;
}
export async function getPackagesPreviews() {
  const data: PackagesPreviews = await fetchAPI(
    `query PackagesPreviews {
      packages(id: "packages", idType: SLUG) {
        packagesFields {
          preview {
            packagePreviews {
              package1Preview {
                title
                price
                description
                cta
              }
              package2Preview {
                title
                price
                description
                cta
              }
              package3Preview {
                title
                price
                description
                cta
              }
            }
          }
        }
      }
    }`
  );

  if (data) {
    return [
      data.packages.packagesFields.preview.packagePreviews.package1Preview,
      data.packages.packagesFields.preview.packagePreviews.package2Preview,
      data.packages.packagesFields.preview.packagePreviews.package3Preview,
    ];
  }

  return null;
}

export async function getPlacesPageHeader(slug: string) {
  return getSubcategoryPageHeader(slug, "placesPage");
}
export async function getPlacesPageDescription(slug: string) {
  return getPageDescription(slug, "placesPage");
}
export async function getPlacesPageListings(slug: string) {
  const title: { placesPage: { placesPageFields: { listingsTitle: string } } } =
    await fetchAPI(
      `query PlacesPage($slug: ID = "slug") {
      placesPage(idType: SLUG, id: $slug) {
        placesPageFields {
          listingsTitle
        }
      }
    }`,
      {
        variables: { slug },
      }
    );

  const cards = await getPlacesPreviews(slug);

  if (title && cards) {
    return {
      title: title.placesPage.placesPageFields.listingsTitle,
      cards: cards,
    };
  }

  return null;
}
export async function getMorePlacesPagesPreviews(
  slug: string
): Promise<MorePlacesPagesPreviews | null> {
  const title: {
    placesPage: {
      placesPageFields: { moreItemsTitle: string };
    };
  } = await fetchAPI(
    `query PlacesPage($slug: ID = "slug") {
      placesPage(idType: SLUG, id: $slug) {
        placesPageFields {
          moreItemsTitle
        }
      }
    }`,
    {
      variables: { slug },
    }
  );
  const cards: {
    section: {
      placesPages: {
        nodes: {
          slug: string;
          placesPageFields: {
            preview: { title: string; thumbnail: Image; ctaText: string };
          };
        }[];
      };
    };
  } = await fetchAPI(
    `query SeeAndDoPreviews {
      section(id: "see-and-do", idType: SLUG) {
        placesPages {
          nodes {
            slug
            placesPageFields {
              preview {
                title
                thumbnail {
                  node {
                    mediaItemUrl
                  }
                }
                ctaText
              }
            }
          }
        }
      }
    }`
  );

  if (title && cards) {
    return {
      title: title.placesPage.placesPageFields.moreItemsTitle,
      cards: cards.section.placesPages.nodes
        .filter((placesPage) => placesPage.slug !== slug)
        .map((placesPage) => {
          return {
            ...placesPage.placesPageFields.preview,
            slug: placesPage.slug,
          };
        }),
    };
  }

  return null;
}

export async function getPlaceImage(slug: string) {
  return await getListingImage(slug, "place");
}
export async function getPlaceTitle(slug: string) {
  return await getListingTitle(slug, "place");
}
export async function getPlaceDescription(slug: string) {
  return await getPageDescription(slug, "place");
}
export async function getPlaceLocation(slug: string) {
  const data: {
    place: {
      placeFields: {
        gettingThere: {
          title: string;
          description: string;
          map: {
            streetAddress: string;
            latitude: number;
            longitude: number;
          };
        };
      };
    };
  } = await fetchAPI(
    `
  query Place($slug: ID = "slug") {
    place(id: $slug, idType: SLUG) {
      placeFields {
        gettingThere {
          title
          description
          map {
            streetAddress
            latitude
            longitude
          }
        }
      }
    }
  }
  `,
    {
      variables: { slug },
    }
  );

  if (data) {
    return data.place?.placeFields?.gettingThere;
  }

  return null;
}
export async function getPlaceBooking(slug: string) {
  const data: {
    place: {
      placeFields: {
        makeABooking: {
          heading: string;
          description: string;
          image: {
            node: {
              mediaItemUrl: string;
            };
          };
          cta: {
            title: string;
            url: string;
          };
        };
      };
    };
  } = await fetchAPI(
    `
  query Place($slug: ID = "slug") {
    place(id: $slug, idType: SLUG) {
      placeFields {
        makeABooking {
          heading
          description
          image {
            node {
              mediaItemUrl
            }
          }
          cta {
            title
            url
          }
        }
      }
    }
  }
  `,
    {
      variables: { slug },
    }
  );

  if (data) {
    return data.place.placeFields.makeABooking;
  }

  return null;
}
export async function getMorePlaces(
  subcategorySlug: string,
  placeSlug: string
) {
  const title: {
    placesPage: { placesPageFields: { preview: { ctaText: string } } };
  } = await fetchAPI(
    `query SubcategoryPreview($subcategorySlug: ID = "id") {
      placesPage(id: $subcategorySlug, idType: SLUG) {
        placesPageFields {
          preview {
            ctaText
          }
        }
      }
    }`,
    { variables: { subcategorySlug } }
  );

  const cards = await getPlacesPreviews(subcategorySlug).then(
    (result) => result && result.filter((place) => place.slug !== placeSlug)
  );

  if (cards) {
    return {
      title: title.placesPage.placesPageFields.preview.ctaText,
      cards: cards,
    };
  }

  return null;
}

export async function getItinerariesPageHeader() {
  return getSubcategoryPageHeader("itineraries", "itinerariesPage");
}

export async function getItineraryImage(slug: string) {
  return await getListingImage(slug, "itinerary");
}
export async function getItineraryHeading(slug: string) {
  const data: {
    itinerary: {
      title: string;
      itineraryFields: {
        numberOfDays: number;
        numberOfAttractions: string;
        cta: {
          title: string;
          url: string;
        };
      };
    };
  } = await fetchAPI(
    `query Itinerary($slug: ID = "slug") {
      itinerary(id: $slug, idType: SLUG) {
        title
        itineraryFields {
          numberOfDays
          numberOfAttractions
          cta {
            title
            url
          }
        }
      }
    }`,
    {
      variables: { slug },
    }
  );

  if (data) {
    const itinerary = {
      ...data.itinerary.itineraryFields,
      title: data.itinerary.title,
      cta: {
        text: data.itinerary.itineraryFields.cta.title,
        link: data.itinerary.itineraryFields.cta.url,
      },
    };

    return itinerary;
  }
  return null;
}
export async function getItineraryDirections(slug: string) {
  const data: {
    itinerary: {
      itineraryFields: {
        gettingThere: {
          map: string;
        };
      };
    };
  } = await fetchAPI(
    `query Itinerary($slug: ID = "slug") {
      itinerary(id: $slug, idType: SLUG) {
        itineraryFields {
          gettingThere {
            map
          }
        }
      }
    }`,
    {
      variables: { slug },
    }
  );

  if (data) {
    return {
      mapURL: data.itinerary?.itineraryFields?.gettingThere.map,
    };
  }
  return null;
}
export async function getItineraryDescription(slug: string) {
  return await getPageDescription(slug, "itinerary");
}
export async function getItineraryTimeline(slug: string) {
  const data: {
    itinerary: {
      itineraryFields: {
        timeline: ItineraryTimeline;
      };
    };
  } = await fetchAPI(
    `
    query ItineraryTimeline($slug: ID = "slug") {
      itinerary(id: $slug, idType: SLUG) {
        itineraryFields {
          timeline {
            day1 {
              step1 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
                }
              }
              step2 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
                }
              }
              step3 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step4 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step5 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step6 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
        }
            day2 {
              step1 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
                }
              }
              step2 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
                }
              }
              step3 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step4 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step5 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step6 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
            }
            day3 {
              step1 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
                }
              }
              step2 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
                }
              }
              step3 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step4 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step5 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
              step6 {
                title
                description
                cta {
                  title
                  url
                }
                image {
                  node {
                    mediaItemUrl
                  }
            }
          }
            }
          }
        }
      }
    }
  `,
    {
      variables: { slug },
    }
  );

  if (data) {
    const timeline = [
      [
        data.itinerary.itineraryFields.timeline.day1.step1,
        data.itinerary.itineraryFields.timeline.day1.step2,
        data.itinerary.itineraryFields.timeline.day1.step3,
        data.itinerary.itineraryFields.timeline.day1.step4,
        data.itinerary.itineraryFields.timeline.day1.step5,
        data.itinerary.itineraryFields.timeline.day1.step6,
      ],
      [
        data.itinerary.itineraryFields.timeline.day2.step1,
        data.itinerary.itineraryFields.timeline.day2.step2,
        data.itinerary.itineraryFields.timeline.day2.step3,
        data.itinerary.itineraryFields.timeline.day2.step4,
        data.itinerary.itineraryFields.timeline.day2.step5,
        data.itinerary.itineraryFields.timeline.day2.step6,
      ],
      [
        data.itinerary.itineraryFields.timeline.day3.step1,
        data.itinerary.itineraryFields.timeline.day3.step2,
        data.itinerary.itineraryFields.timeline.day3.step3,
        data.itinerary.itineraryFields.timeline.day3.step4,
        data.itinerary.itineraryFields.timeline.day3.step5,
        data.itinerary.itineraryFields.timeline.day3.step6,
      ],
    ];

    return timeline;
  }
  return null;
}
export async function getMoreItineraries(slug: string) {
  const cards = await getItinerariesPreviews().then(
    (result) => result && result.filter((itinerary) => itinerary.slug !== slug)
  );

  return cards;
}

export async function getPracticalitiesPageHeader() {
  return getSubcategoryPageHeader("practicalities", "practicalities");
}
export async function getPracticalitiesPageDirections() {
  const data: PracticalitiesPageDirections = await fetchAPI(
    `query PracticalitiesPageDirections {
      practicalities(idType: SLUG, id: "practicalities") {
        practicalitiesFields {
          gettingThere {
            title
            cards {
              card1 {
                title
                description
              }
              card2 {
                title
                description
              }
              card3 {
                title
                description
              }
              card4 {
                title
                description
              }
            }
          }
        }
      }
    }`
  );

  if (data) {
    return {
      title: data.practicalities.practicalitiesFields.gettingThere.title,
      cards: [
        data.practicalities.practicalitiesFields.gettingThere.cards.card1,
        data.practicalities.practicalitiesFields.gettingThere.cards.card2,
        data.practicalities.practicalitiesFields.gettingThere.cards.card3,
        data.practicalities.practicalitiesFields.gettingThere.cards.card4,
      ],
    };
  }

  return null;
}
export async function getPracticalitiesPageTips() {
  const data: PracticalitiesPageTips = await fetchAPI(
    `query PracticalitiesPageTips {
      practicalities(idType: SLUG, id: "practicalities") {
        practicalitiesFields {
          tips {
            title
            tips {
              tip1 {
                title
                description
              }
              tip2 {
                title
                description
              }
              tip3 {
                title
                description
              }
              tip4 {
                title
                description
              }
            }
          }
        }
      }
    }`
  );

  if (data) {
    return {
      title: data.practicalities.practicalitiesFields.tips.title,
      tips: [
        data.practicalities.practicalitiesFields.tips.tips.tip1,
        data.practicalities.practicalitiesFields.tips.tips.tip2,
        data.practicalities.practicalitiesFields.tips.tips.tip3,
        data.practicalities.practicalitiesFields.tips.tips.tip4,
      ],
    };
  }

  return null;
}

export async function getPackagesPageHeader() {
  return getSubcategoryPageHeader("packages", "packages");
}
export async function getPackagesPageBenefits() {
  const data: PackagesPageBenefits = await fetchAPI(
    `query Packages {
      packages(id: "packages", idType: SLUG) {
        packagesFields {
          benefits {
            title
            cards {
              card1 {
                title
                description
              }
              card2 {
                title
                description
              }
              card3 {
                title
                description
              }
              card4 {
                title
                description
              }
            }
          }
        }
      }
    }`
  );

  if (data) {
    return {
      title: data.packages.packagesFields.benefits.title,
      cards: [
        data.packages.packagesFields.benefits.cards.card1,
        data.packages.packagesFields.benefits.cards.card2,
        data.packages.packagesFields.benefits.cards.card3,
        data.packages.packagesFields.benefits.cards.card4,
      ],
    };
  }

  return null;
}
export async function getPackagesPageHowItWorks() {
  const data: PackagesPageHowItWorks = await fetchAPI(
    `query Packages {
      packages(id: "packages", idType: SLUG) {
        packagesFields {
          howItWorks {
            title
            steps {
              step1
              step2
              step3
              step4
              step5
            }
          }
        }
      }
    }`
  );

  if (data) {
    return {
      title: data.packages.packagesFields.howItWorks.title,
      steps: [
        data.packages.packagesFields.howItWorks.steps.step1,
        data.packages.packagesFields.howItWorks.steps.step2,
        data.packages.packagesFields.howItWorks.steps.step3,
        data.packages.packagesFields.howItWorks.steps.step4,
      ],
    };
  }

  return null;
}
export async function getPackagesPagePackages() {
  const data: PackagesPagePackages = await fetchAPI(
    `query Packages {
      packages(id: "packages", idType: SLUG) {
        packagesFields {
          packages {
            title
            packages {
              package1 {
                title
                price
                description
                cta
              }
              package2 {
                title
                price
                description
                cta
              }
              package3 {
                title
                price
                description
                cta
              }
            }
          }
        }
      }
    }`
  );

  if (data) {
    return {
      title: data.packages.packagesFields.packages.title,
      packages: [
        data.packages.packagesFields.packages.packages.package1,
        data.packages.packagesFields.packages.packages.package2,
        data.packages.packagesFields.packages.packages.package3,
      ],
    };
  }

  return null;
}
