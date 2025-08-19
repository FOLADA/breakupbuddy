"use client";
import React, { useRef, PropsWithChildren } from "react";
import { useParallaxCanvas } from "../hooks/useParallaxCanvas";

export default function ParallaxCanvas({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useParallaxCanvas(containerRef);

  return (
    <div ref={containerRef} className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10" style={{ minHeight: 420 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
