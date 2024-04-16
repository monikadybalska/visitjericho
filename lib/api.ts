import {
  SubcategoriesPreviewsData,
  SubcategoryPreviewData,
  PlacesPreviewsData,
  PlacesPreviews,
  ItinerariesPreviewsData,
  ItinerariesPreviews,
  SubcategoryPreview,
  CategoryData,
  Category,
  PracticalitiesPreviewsData,
  PracticalitiesPreviews,
  PackagesPreviewsData,
  PackagesPreviews,
  PlacesPage,
  PlacesPageData,
  ItinerariesPageData,
  ItinerariesPage,
  PracticalitiesPageData,
  PracticalitiesPage,
  PackagesPageData,
  PackagesPage,
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

export async function getCategoryPreview(slug: string) {
  const data: CategoryData = await fetchAPI(
    `query Section($slug: ID = "slug") {
      section(id: $slug, idType: SLUG) {
        slug
        name
        sectionFields {
          color
        }
      }
    }`,
    { variables: { slug } }
  );

  if (data) {
    const category: Category = {
      ...data.section,
      color: data.section.sectionFields.color,
    };

    return category;
  }

  return null;
}

export async function getSubcategoryPreview(slug: string) {
  const data: SubcategoryPreviewData = await fetchAPI(
    `query Section($slug: ID = "slug") {
      section(id: $slug, idType: SLUG) {
        slug
        subsectionFields {
          preview {
            order
            title
            cta
          }
        }
      }
    }`,
    { variables: { slug } }
  );

  if (data) {
    const category: SubcategoryPreview = {
      ...data.section,
      ...data.section.subsectionFields.preview,
    };

    return category;
  }

  return null;
}

export async function getSeeAndDoPreviews(slug: string) {
  const data: SubcategoriesPreviewsData = await fetchAPI(
    `query SeeAndDoPreviews {
      section(id: "see-and-do", idType: SLUG) {
        children {
          nodes {
            slug
            subsectionFields {
              preview {
                title
                thumbnail {
                  node {
                    mediaItemUrl
                  }
                }
                cta
              }
            }
          }
        }
      }
    }`
  );

  if (data) {
    const categories: Omit<SubcategoryPreview, "order">[] =
      data.section.children.nodes
        .filter((subcategory) => subcategory.slug !== slug)
        .map((subcategory) => {
          return {
            ...subcategory.subsectionFields.preview,
            thumbnail: subcategory.subsectionFields.preview.thumbnail,
            slug: subcategory.slug,
          };
        });

    return categories;
  }

  return null;
}

export async function getPlacesPreviews(slug: string) {
  const data: PlacesPreviewsData = await fetchAPI(
    `query PlacesPreviews($slug: ID = "slug") {
      section(id: $slug, idType: SLUG) {
        sectionFields {
          color
        }
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
    const places: PlacesPreviews = {
      color: data.section.sectionFields.color,
      places: data.section.places.nodes
        .map((post) => {
          return {
            ...post.placeFields.preview,
            slug: post.slug,
          };
        })
        .sort((post1, post2) => post2.priority - post1.priority),
    };

    return places;
  }

  return null;
}
export async function getItinerariesPreviews(slug: string) {
  const data: ItinerariesPreviewsData = await fetchAPI(
    `query Section($slug: ID = "slug") {
      section(id: $slug, idType: SLUG) {
        sectionFields {
          color
        }
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
      }
    }`,
    {
      variables: { slug },
    }
  );

  if (data) {
    const category: ItinerariesPreviews = {
      color: data.section.sectionFields.color,
      itineraries: data.section.itineraries.nodes
        .map((post) => {
          return {
            ...post.itineraryFields.preview,
            slug: post.slug,
          };
        })
        .sort((post1, post2) => post2.priority - post1.priority),
    };

    return category;
  }

  return null;
}
export async function getPracticalitiesPreviews() {
  const data: PracticalitiesPreviewsData = await fetchAPI(
    `query Practicalities {
      section(idType: SLUG, id: "practicalities") {
        sectionFields {
          color
        }
        practicalities {
          nodes {
            slug
            practicalitiesFields {
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
      }
    }`
  );

  if (data) {
    const category: PracticalitiesPreviews = {
      color: data.section.sectionFields.color,
      slug: data.section.practicalities.nodes[0].slug,
      gettingThere:
        data.section.practicalities.nodes[0].practicalitiesFields
          .gettingTherePreview,
      tips: data.section.practicalities.nodes[0].practicalitiesFields
        .tipsPreview,
    };

    return category;
  }

  return null;
}
export async function getPackagesPreviews() {
  const data: PackagesPreviewsData = await fetchAPI(
    `query Packages {
      section(idType: SLUG, id: "packages") {
        sectionFields {
          color
        }
        packages {
          nodes {
            slug
            packagesFields {
              preview {
                package1Preview {
                  title
                  description
                  cta
                }
                package2Preview {
                  title
                  description
                  cta
                }
                package3Preview {
                  title
                  description
                  cta
                }
              }
            }
          }
        }
      }
    }`
  );

  if (data) {
    const category: PackagesPreviews = {
      color: data.section.sectionFields.color,
      slug: data.section.packages.nodes[0].slug,
      packages: [
        data.section.packages.nodes[0].packagesFields.preview.package1Preview,
        data.section.packages.nodes[0].packagesFields.preview.package2Preview,
        data.section.packages.nodes[0].packagesFields.preview.package3Preview,
      ],
    };

    return category;
  }

  return null;
}

export async function getPlacesPage(slug: string) {
  const data: PlacesPageData = await fetchAPI(
    `query PlacesPage($slug: ID = "slug") {
      placesPage(idType: SLUG, id: $slug) {
        slug
        placesPageFields {
          title
          subtitle
          image {
            node {
              mediaItemUrl
            }
          }
          description
          listingsTitle
          moreItemsTitle
        }
      }
    }`,
    {
      variables: { slug },
    }
  );

  if (data) {
    const category: PlacesPage = {
      slug: data.placesPage.slug,
      ...data.placesPage.placesPageFields,
    };

    return category;
  }

  return null;
}

export async function getItinerariesPage() {
  const data: ItinerariesPageData = await fetchAPI(
    `query ItinerariesPage {
      itinerariesPage(idType: SLUG, id: "itineraries") {
        itinerariesPageFields {
          title
          subtitle
          image {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }`
  );

  if (data) {
    const category: ItinerariesPage = {
      ...data.itinerariesPage.itinerariesPageFields,
    };

    return category;
  }

  return null;
}

export async function getPracticalitiesPage() {
  const data: PracticalitiesPageData = await fetchAPI(
    `query PracticalitiesPage {
      practicalities(idType: SLUG, id: "practicalities") {
        sections(where: {slug: "practicalities"}) {
          nodes {
            sectionFields {
              color
            }
          }
        }
        practicalitiesFields {
          title
          subtitle
          image {
            node {
              mediaItemUrl
            }
          }
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
    const category: PracticalitiesPage = {
      ...data.practicalities.practicalitiesFields,
      color: data.practicalities.sections.nodes[0].sectionFields.color,
      gettingThere: {
        title: data.practicalities.practicalitiesFields.gettingThere.title,
        cards: [
          data.practicalities.practicalitiesFields.gettingThere.cards.card1,
          data.practicalities.practicalitiesFields.gettingThere.cards.card2,
          data.practicalities.practicalitiesFields.gettingThere.cards.card3,
          data.practicalities.practicalitiesFields.gettingThere.cards.card4,
        ],
      },
      tips: {
        title: data.practicalities.practicalitiesFields.tips.title,
        tips: [
          data.practicalities.practicalitiesFields.tips.tips.tip1,
          data.practicalities.practicalitiesFields.tips.tips.tip2,
          data.practicalities.practicalitiesFields.tips.tips.tip3,
          data.practicalities.practicalitiesFields.tips.tips.tip4,
        ],
      },
    };

    return category;
  }

  return null;
}

export async function getPackagesPage() {
  const data: PackagesPageData = await fetchAPI(
    `query Packages {
      packages(id: "packages", idType: SLUG) {
        sections(where: {slug: "packages"}) {
          nodes {
            sectionFields {
              color
            }
          }
        }
        packagesFields {
          title
          subtitle
          image {
            node {
              mediaItemUrl
            }
          }
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
    const category: PackagesPage = {
      ...data.packages.packagesFields,
      color: data.packages.sections.nodes[0].sectionFields.color,
      benefits: {
        title: data.packages.packagesFields.benefits.title,
        cards: [
          data.packages.packagesFields.benefits.cards.card1,
          data.packages.packagesFields.benefits.cards.card2,
          data.packages.packagesFields.benefits.cards.card3,
          data.packages.packagesFields.benefits.cards.card4,
        ],
      },
      howItWorks: {
        title: data.packages.packagesFields.howItWorks.title,
        steps: [
          data.packages.packagesFields.howItWorks.steps.step1,
          data.packages.packagesFields.howItWorks.steps.step2,
          data.packages.packagesFields.howItWorks.steps.step3,
          data.packages.packagesFields.howItWorks.steps.step4,
        ],
      },
      packages: {
        title: data.packages.packagesFields.packages.title,
        packages: [
          data.packages.packagesFields.packages.packages.package1,
          data.packages.packagesFields.packages.packages.package2,
          data.packages.packagesFields.packages.packages.package3,
        ],
      },
    };

    return category;
  }

  return null;
}

export async function getPost(slug: string) {
  const data = await fetchAPI(
    `
  query Post($slug: ID = "slug") {
    place(id: $slug, idType: SLUG) {
      title
      content
      placeFields {
        image {
          node {
            mediaItemUrl
          }
        }
        gettingThere {
          title
          description
          cta {
            title
            url
          }
        }
        makeABooking {
          heading
          image {
            node {
              mediaItemUrl
            }
          }
          description
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
  return data?.place;
}
