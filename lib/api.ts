import { PreviewNode, Preview, PreviewCategories } from "./types";

const API_URL: string = process.env.WORDPRESS_API_URL || "";

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
        preview {
          description
          cta
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

export async function getHomepagePreviews(): Promise<PreviewCategories | null> {
  const data = await fetchAPI(
    `
    query Places {
      places {
        nodes {
          title
          placeFields {
            category
            image {
              node {
                mediaItemUrl
              }
            }
            preview {
              description
              cta
              displayOnHomepage
              priority
            }
          }
        }
      }
    }
  `
  );
  if (data) {
    const places: Preview[] = data.places.nodes
      .filter(
        (place: PreviewNode) => place.placeFields.preview.displayOnHomepage
      )
      .map((place: PreviewNode) => {
        return { ...place.placeFields, title: place.title };
      });

    const sights = places.filter((place) => place.category[0] === "Sights");
    const nature = places.filter((place) => place.category[0] === "Nature");
    const food = places.filter((place) => place.category[0] === "Food");
    const accommodation = places.filter(
      (place) => place.category[0] === "Accommodation"
    );

    return { sights, nature, food, accommodation };
  }

  return null;
}
