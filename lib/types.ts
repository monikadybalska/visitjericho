import { color } from "@material-tailwind/react/types/components/alert";

export interface PreviewNode {
  title: string;
  placeFields: {
    category: string[];
    image: {
      node: {
        mediaItemUrl: string;
      };
    };
    preview: {
      description: string;
      cta: string;
      displayOnHomepage: boolean;
      priority: number;
    };
  };
}

export interface Preview {
  category: string[];
  image: {
    node: {
      mediaItemUrl: string;
    };
  };
  preview: {
    description: string;
    cta: string;
    displayOnHomepage: boolean;
    priority: number;
  };
  title: string;
}

export interface PreviewCategories {
  sights: Preview[];
  nature: Preview[];
  food: Preview[];
  accommodation: Preview[];
}

export interface PreviewSubsection {
  title: string[];
  color: color | undefined;
  cards: {
    title: string;
    image?: string;
    description: string;
  }[];
  cta: string;
}
