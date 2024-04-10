import Section from "@/app/components/homepage/section";
import {
  HomepageData,
  HomepageSection,
  HomepageSubsection,
  Preview,
  CategoryData,
  Category,
} from "./types";
import { unstable_noStore as noStore } from "next/cache";

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

// export async function getPost(id: any, idType = "DATABASE_ID") {
//   const data = await fetchAPI(
//     `
//     query PreviewPost($id: ID!, $idType: PostIdType!) {
//       post(id: $id, idType: $idType) {
//         databaseId
//         slug
//         status
//       }
//     }`,
//     {
//       variables: { id, idType },
//     }
//   );
//   return data.post;
// }

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

export async function getSectionPreviews(slug: string) {
  const data: CategoryData = await fetchAPI(
    `query Section($slug: ID = "slug") {
      section(id: $slug, idType: SLUG) {
        slug
        sectionFields {
          color
        }
        subsectionFields {
          title
          image {
            node {
              mediaItemUrl
            }
          }
        }
        places {
          nodes {
            slug
            placeFields {
              preview {
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
        itineraries {
          nodes {
            slug
            itineraryFields {
              preview {
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
    const category: Category = {
      ...data.section,
      title: data.section.subsectionFields.title,
      image: data.section.subsectionFields.image,
      color: data.section.sectionFields.color,
      places: [],
    };
    if (data.section.places.nodes.length > 0) {
      category.places = data.section.places.nodes
        .map((place) => {
          return {
            ...place.placeFields.preview,
            slug: place.slug,
          };
        })
        .sort((place1, place2) => place2.priority - place1.priority);
    } else if (data.section.itineraries.nodes.length > 0) {
      category.places = data.section.itineraries.nodes
        .map((place) => {
          return {
            ...place.itineraryFields.preview,
            slug: place.slug,
          };
        })
        .sort((place1, place2) => place2.priority - place1.priority);
    }

    return category;
  }

  return null;
}

export async function getHomepagePreviews(): Promise<HomepageSection[] | null> {
  const data: HomepageData = await fetchAPI(
    `
    query Places {
      sections(where: {parent: 0, hideEmpty: true}) {
        nodes {
          name
          sectionFields {
            order
            color
          }
          children {
            nodes {
              name
              slug
              subsectionFields {
                preview {
                  order
                  title
                  cta
                }
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
          }
        }
      }
    }
  `
  );
  if (data) {
    const sections: HomepageSection[] = data.sections.nodes
      .map((section) => {
        return {
          title: section.name,
          order: section.sectionFields.order,
          color: section.sectionFields.color,
          subsections: section.children.nodes
            .map((subsection) => {
              return {
                slug: subsection.slug,
                title: subsection.subsectionFields.preview.title,
                order: subsection.subsectionFields.preview.order,
                cta: subsection.subsectionFields.preview.cta,
                places: [
                  ...subsection.places.nodes
                    .map((place) => {
                      return { ...place.placeFields.preview, slug: place.slug };
                    })
                    .filter((place) => place.displayOnHomepage)
                    .sort(
                      (place1, place2) => place2.priority - place1.priority
                    ),
                  ...subsection.itineraries.nodes
                    .map((place) => {
                      return {
                        ...place.itineraryFields.preview,
                        slug: place.slug,
                      };
                    })
                    .filter((place) => place.displayOnHomepage)
                    .sort(
                      (place1, place2) => place2.priority - place1.priority
                    ),
                ],
              };
            })
            .sort(
              (subsection1: any, subsection2: any) =>
                subsection1.order - subsection2.order
            ),
        };
      })
      .sort((section1, section2) => section1.order - section2.order);

    return sections;
  }

  return null;
}
