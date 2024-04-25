import { getPracticalitiesPageHeader } from "@/app/_lib/api";

import Header from "../_components/header";
import SectionLayout from "../../_components/layouts/section-layout";
import Tips from "./_components/tips";
import GettingThere from "./_components/getting-there";

export default function Practicalities() {
  return (
    <>
      <Header slug="practicalities" query={getPracticalitiesPageHeader} />
      <SectionLayout>
        <GettingThere color="green" />
      </SectionLayout>
      <SectionLayout>
        <Tips />
      </SectionLayout>
    </>
  );
}
