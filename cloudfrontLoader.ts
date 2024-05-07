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
  if (quality && width) {
    return `https://${src.slice(
      6
    )}?format=auto&quality=${quality}&width=${width}`;
  } else if (width) {
    return `https://${src.slice(6)}?format=auto&width=${width}`;
  } else return `https://${src.slice(6)}`;
}
