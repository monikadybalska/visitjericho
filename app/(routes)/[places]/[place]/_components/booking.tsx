import { getPlaceBooking } from "@/app/_lib/api";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "@/app/_lib/providers";
import { Button } from "../../../../_components/exports";
import Column from "@/app/_components/layouts/column";
import SectionLayout from "@/app/_components/layouts/section-layout";

export default async function Booking({ slug }: { slug: string }) {
  const booking = await getPlaceBooking(slug);

  return (
    <Column>
      {booking && (
        <SectionLayout>
          {booking.heading && <h2 className="font-serif">{booking.heading}</h2>}
          {booking.image && (
            <Image
              src={booking.image.node.mediaItemUrl}
              width={863}
              height={550}
              className="object-cover"
              alt=""
              sizes="(max-width: 1024px) 863px, 500px"
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
  );
}
