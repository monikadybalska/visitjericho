import { getPackagesPageHeader } from "../../_lib/api";

import SectionLayout from "../../_components/layouts/section-layout";
import Header from "../_components/header";
import Benefits from "./_components/benefits";
import HowItWorks from "./_components/how-it-works";
import Packages from "./_components/packages";
import Form from "./_components/form";

export default function BookATour() {
  return (
    <>
      <Header slug="packages" query={getPackagesPageHeader} />
      <SectionLayout>
        <Benefits color="orange" />
      </SectionLayout>
      <SectionLayout>
        <HowItWorks color="orange" />
      </SectionLayout>
      <SectionLayout>
        <Packages color="orange" />
      </SectionLayout>
      <SectionLayout>
        <Form />
      </SectionLayout>
    </>
  );
}
