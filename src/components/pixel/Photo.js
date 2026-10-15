"use client";
import { useState } from "react";
import Image from "next/image";

export default function Photo({
  src,
  alt = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  fit = "cover",
  className = "",
  imgClassName = "",
}) {
  const [failed, setFailed] = useState(false);
  const objectFit = fit === "contain" ? "object-contain" : "object-cover";

  if (!src || failed) {
    return <div className={`h-full w-full bg-paper-deep bg-checker ${className}`} role="img" aria-label={alt || "Image"} />;
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-ink ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
        className={`${objectFit} ${imgClassName}`}
      />
    </div>
  );
}
