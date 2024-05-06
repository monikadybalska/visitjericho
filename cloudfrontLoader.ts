"use client";

export default function cloudfrontLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  // const url = new URL(`https:/${src.slice(6)}`);
  // url.searchParams.set("format", "auto");
  // url.searchParams.set("width", width.toString());
  // url.searchParams.set("quality", (quality || 75).toString());
  // return url.href;
  if (quality) {
    return `https://${src.slice(
      6
    )}?format=auto&quality=${quality}&width=${width}`;
  } else return `https://${src.slice(6)}?format=auto&width=${width}`;
}
