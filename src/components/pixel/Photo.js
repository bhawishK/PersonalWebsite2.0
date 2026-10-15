"use client";
import { useState } from "react";

export default function Photo({ src, alt = "", className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={`h-full w-full bg-paper-deep bg-checker ${className}`} role="img" aria-label={alt || "Image"} />;
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-ink ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
