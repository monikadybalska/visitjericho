import { CardFooter as CardFooterMT, Button } from "../../exports";
import Link from "next/link";

import { variant } from "@material-tailwind/react/types/components/button";

import React from "react";

export default function CardFooter({
  slug,
  cta,
  buttonVariant,
}: {
  slug?: string;
  cta?: string;
  buttonVariant?: variant;
}) {
  return (
    <>
      {slug && cta && (
        <CardFooterMT
          className={`p-0 mt-4 mx-4 ${
            (buttonVariant === "filled" || buttonVariant === "outlined") &&
            "flex items-center justify-center"
          }`}
        >
          {buttonVariant === "filled" || buttonVariant === "outlined" ? (
            <Button
              variant={buttonVariant}
              size="md"
              className="font-medium"
              ripple={false}
              color="orange"
            >
              {cta}
            </Button>
          ) : (
            <p className="font-medium uppercase hover:underline">{cta}</p>
          )}
        </CardFooterMT>
      )}
    </>
  );
}
