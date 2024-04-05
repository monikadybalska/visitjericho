import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { getPost } from "@/lib/api";

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await getPost(params.slug);
  console.log(postData);

  return (
    <div>
      <div className="w-full overflow-hidden">
        <Image
          src={postData.placeFields.image.node.mediaItemUrl}
          width={1140}
          height={384}
          alt=""
          // className="object-cover object-center"
          sizes="(max-width: 720px) 100px, (max-width: 960px) 200px, 300px"
        />
      </div>
      <div className="mt-10 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="font-serif">{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: `${postData.content}` }} />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif">
              {postData.placeFields.gettingThere.title}
            </h2>
            <p>{postData.placeFields.gettingThere.description}</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-serif">
              {postData.placeFields.makeABooking.heading}
            </h2>
            <Image
              src={postData.placeFields.makeABooking.image.node.mediaItemUrl}
              width={400}
              height={400}
              alt=""
            />
            <p>{postData.placeFields.makeABooking.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-serif">See other sights</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: `${postData.placeFields.preview.cta}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
