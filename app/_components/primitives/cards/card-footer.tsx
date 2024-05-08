import { CardFooter as CardFooterMT, Button } from "../../exports";
import Link from "next/link";

import { variant } from "@material-tailwind/react/types/components/button";

import React from "react";

export default function CardFooter({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <CardFooterMT className="p-0 mt-4 mx-4 flex items-center justify-center">
      {children}
    </CardFooterMT>
  );
}
