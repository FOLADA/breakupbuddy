import { useEffect, useRef } from "react";

export function useParallaxCanvas(containerRef: React.RefObject<HTMLDivElement | null>) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Array<{x:number;y:number;z:number;vx:number;vy:number}> = [];
    let width = 0;
    let height = 0;
    let rafId: number | null = null;
    let idleId: number | null = null;
    const pointer = { x: 0, y: 0 };
    const DPR = Math.max(window.devicePixelRatio || 1, 1);

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const count = Math.floor((width * height) / 50000) + 20;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 1.2 + 0.2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const distance = (a: typeof nodes[number], b: typeof nodes[number]) => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, "rgba(10, 12, 25, 0.55)");
      g.addColorStop(1, "rgba(25, 10, 30, 0.45)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const px = (pointer.x - width / 2) * (0.0025 * n.z);
        const py = (pointer.y - height / 2) * (0.0025 * n.z);

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -50) n.x = width + 50;
        if (n.x > width + 50) n.x = -50;
        if (n.y < -50) n.y = height + 50;
        if (n.y > height + 50) n.y = -50;

        const r = 1.2 + n.z * 2.2;
        const grad = ctx.createRadialGradient(n.x + px, n.y + py, 0, n.x + px, n.y + py, r * 6);
        grad.addColorStop(0, `rgba(255,255,255,${(0.8 * n.z).toFixed(2)})`);
        grad.addColorStop(0.2, `rgba(200,180,255,${(0.18 * n.z).toFixed(2)})`);
        grad.addColorStop(1, "rgba(120,100,160,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x + px, n.y + py, r * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      const maxDist = Math.min(width, height) / 6;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = distance(a, b);
          if (d < maxDist) {
            const strength = 1 - d / maxDist;
            const avgZ = (a.z + b.z) / 2;
            const ox = (pointer.x - width / 2) * (0.0015 * avgZ);
            const oy = (pointer.y - height / 2) * (0.0015 * avgZ);
            ctx.strokeStyle = `rgba(170,150,255,${(0.08 * strength * avgZ).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x + ox, a.y + oy);
            ctx.lineTo(b.x + ox, b.y + oy);
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
    };

    const onLeave = () => {
      pointer.x = width / 2;
      pointer.y = height / 2;
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove, { passive: true });
    canvas.addEventListener("touchmove", onMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave);

    let t = 0;
    const idleMove = () => {
      t += 0.01;
      pointer.x += Math.cos(t) * 0.2;
      pointer.y += Math.sin(t) * 0.15;
      idleId = requestAnimationFrame(idleMove);
    };
    idleMove();

    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
      if (idleId) cancelAnimationFrame(idleId);
    };
  }, [containerRef]);

  return canvasRef;
}
