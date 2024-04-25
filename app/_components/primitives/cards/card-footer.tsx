import { CardFooter as CardFooterMT, Button } from "../../exports";
import Link from "next/link";

import { Preview } from "@/app/_lib/types";
import { variant } from "@material-tailwind/react/types/components/button";

import React from "react";

export default function CardFooter({
  slug,
  cta,
  buttonVariant,
}: Pick<Preview, "slug" | "cta"> & {
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
          <Link href={slug}>
            <Button
              variant={buttonVariant}
              size="md"
              className="font-medium"
              ripple={false}
              color={
                buttonVariant === "filled" || buttonVariant === "outlined"
                  ? "orange"
                  : "black"
              }
            >
              {cta}
            </Button>
          </Link>
        </CardFooterMT>
      )}
    </>
  );
}
