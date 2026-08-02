"use client";

import Image from "next/image";
import React, { useState } from "react";

const previewSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="850" viewBox="0 0 1200 850">
  <defs>
    <linearGradient id="pageBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1220" />
      <stop offset="100%" stop-color="#09101b" />
    </linearGradient>
    <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2b3a55" />
      <stop offset="100%" stop-color="#172033" />
    </linearGradient>
    <pattern id="watermarkPattern" width="360" height="240" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
      <text x="40" y="110" fill="#ffffff" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="700" opacity="0.03">SAMPLE</text>
      <text x="160" y="200" fill="#ffffff" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="700" opacity="0.03">SAMPLE</text>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#pageBg)" />
  <rect x="56" y="56" width="1088" height="738" rx="24" fill="#f8fbff" stroke="url(#frame)" stroke-width="2" />
  <rect x="76" y="76" width="1048" height="698" rx="20" fill="#fdfefe" stroke="#d8e2ee" stroke-width="1.5" />
  <rect x="96" y="96" width="1008" height="658" rx="18" fill="url(#watermarkPattern)" />
  <text x="128" y="184" fill="#10243d" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="700">VisionMate</text>
  <text x="128" y="234" fill="#29415f" font-family="Helvetica, Arial, sans-serif" font-size="21">Harvard HSIL Hackathon — 2nd Runner-Up (April 2026)</text>
  <text x="128" y="298" fill="#5d7089" font-family="Helvetica, Arial, sans-serif" font-size="16">Preview only. Verification: github.com/noorishimran</text>
  <rect x="128" y="350" width="944" height="1" fill="#d7e3ef" />
  <text x="128" y="410" fill="#39506a" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="700">Recognition Summary</text>
  <text x="128" y="452" fill="#51677f" font-family="Helvetica, Arial, sans-serif" font-size="16">Edge-AI assistive mobile project recognized at the Harvard HSIL Hackathon.</text>
</svg>
`;

function toDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function CertificateViewer({ pdf, thumb }: { pdf?: string; thumb?: string }) {
  const [open, setOpen] = useState(false);
  const previewSrc = thumb ?? "/certificate.jpeg";

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 hover:bg-violet-500/20"
      >
        View Certificate
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative h-[90vh] w-[90vw] max-w-4xl rounded-lg bg-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded bg-white/10 px-3 py-1 text-sm text-white backdrop-blur"
            >
              Close
            </button>
            {previewSrc ? (
              <div className="relative h-full w-full">
                <Image
                  src={previewSrc}
                  alt="Certificate preview"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            ) : pdf ? (
              <iframe src={pdf} className="h-full w-full" title="Certificate preview" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-white/70">No preview available</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
