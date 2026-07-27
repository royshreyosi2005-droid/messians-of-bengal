"use client";

import { useEffect, useRef } from "react";

type TrailPoint = {
  x: number;
  y: number;
};

export default function MouseGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const trail: TrailPoint[] = [];

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    const MAX_POINTS = 35;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.unshift({
        x: mouse.x,
        y: mouse.y,
      });

      if (trail.length > MAX_POINTS) {
        trail.pop();
      }

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < trail.length; i++) {
        const prev = trail[i - 1];
        const curr = trail[i];

        const alpha = 1 - i / trail.length;
        const width = (trail.length - i) * 0.6;

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);

        ctx.strokeStyle = `rgba(56,189,248,${alpha * 0.35})`;
        ctx.lineWidth = Math.max(width, 1);

        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(56,189,248,0.8)";

        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        mixBlendMode: "screen",
      }}
    />
  );
}