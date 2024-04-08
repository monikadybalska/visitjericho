import { color } from "@material-tailwind/react/types/components/alert";

export interface ImageUrl {
  node: {
    mediaItemUrl: string;
  };
}

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
          name: HomepageSubsection["title"];
          subsectionFields: {
            order: HomepageSubsection["order"];
            title: string;
            cta: string;
          };
          places: {
            nodes: {
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
  name?: string;
  title: string;
  cta: string;
  places: Preview[];
  color?: color;
}

export interface Preview {
  title: string;
  thumbnail: ImageUrl;
  description: string;
  cta: string;
  displayOnHomepage?: boolean;
  priority: number;
  color?: color;
}
