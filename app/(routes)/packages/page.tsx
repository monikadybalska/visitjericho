import { getPackagesPageHeader } from "../../_lib/api";

import SectionLayout from "../../_components/layouts/section-layout";
import Header from "../_components/header";
import Benefits from "./_components/benefits";
import HowItWorks from "./_components/how-it-works";
import Packages from "./_components/packages";
import Form from "./_components/form";
import { Suspense } from "react";
import ThreeCardsSkeleton from "../../_components/skeletons/three-cards";
import MosaicSkeleton from "../../_components/skeletons/mosaic";
import FullwidthImage from "../../_components/skeletons/fullwidth-image";
import ColumnsSkeleton from "../../_components/skeletons/columns";

export default function BookATour() {
  return (
    <>
      <Suspense fallback={<MosaicSkeleton />}>
        <Header slug="packages" query={getPackagesPageHeader} />
      </Suspense>
      <SectionLayout>
        <Suspense fallback={<ColumnsSkeleton />}>
          <Benefits color="orange" />
        </Suspense>
      </SectionLayout>
      <SectionLayout>
        <Suspense fallback={<FullwidthImage />}>
          <HowItWorks color="orange" />
        </Suspense>
      </SectionLayout>
      <SectionLayout>
        <Suspense fallback={<ThreeCardsSkeleton />}>
          <Packages color="orange" />
        </Suspense>
      </SectionLayout>
      <SectionLayout>
        <Form />
      </SectionLayout>
    </>
  );
}
