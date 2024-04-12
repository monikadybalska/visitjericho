import {
  SubcategoryPreviewData,
  PlacesPreviewsData,
  PlacesPreviews,
  ItinerariesPreviewsData,
  ItinerariesPreviews,
  SubcategoryPreview,
  SubcategoryData,
  Subcategory,
  CategoryData,
  Category,
  PracticalitiesPreviewsData,
  PracticalitiesPreviews,
  PackagesPreviewsData,
  PackagesPreviews,
  PlacesPage,
  PlacesPageData,
} from "./types";

const API_URL: string = "http://13.40.106.112/graphql" || "";

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
      package1:
        data.section.packages.nodes[0].packagesFields.preview.package1Preview,
      package2:
        data.section.packages.nodes[0].packagesFields.preview.package2Preview,
      package3:
        data.section.packages.nodes[0].packagesFields.preview.package3Preview,
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
