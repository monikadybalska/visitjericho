import { getPlaceLocation, getPlaceBooking } from "@/lib/api";
import SectionLayout from "../../layouts/section-layout";
import ColumnsLayout from "../../layouts/columns-layout";
import Column from "../../layouts/column";
import PlaceMap from "./place-map";
import { Providers } from "../../theme/providers";
import { Button } from "../../theme/exports";
import Link from "next/link";
import Image from "next/image";

export default async function LocationAndBooking({ slug }: { slug: string }) {
  const location = await getPlaceLocation(slug);
  const booking = await getPlaceBooking(slug);

  return (
    <ColumnsLayout>
      <Column>
        {location && (
          <SectionLayout>
            {location.title && <h2 className="font-serif">{location.title}</h2>}
            {location.map && (
              <PlaceMap
                streetAddress={location.map.streetAddress}
                latitude={location.map.latitude}
                longitude={location.map.longitude}
              />
            )}
            {location.description && <p>{location.description}</p>}
          </SectionLayout>
        )}
      </Column>
      <Column>
        {booking && (
          <SectionLayout>
            {booking.heading && (
              <h2 className="font-serif">{booking.heading}</h2>
            )}
            {booking.image && (
              <Image
                src={booking.image.node.mediaItemUrl}
                width={628}
                height={400}
                className="w-[628px] h-[400px] object-cover"
                alt=""
              />
            )}
            {booking.description && <p>{booking.description}</p>}
            {booking.cta && (
              <Providers>
                <Link href={booking.cta.url}>
                  <Button variant="text">{booking.cta.title}</Button>
                </Link>
              </Providers>
            )}
          </SectionLayout>
        )}
      </Column>
    </ColumnsLayout>
  );
}
