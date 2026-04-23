"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + "px";
        dotRef.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }
      if (labelRef.current) {
        labelRef.current.style.left = ringX + "px";
        labelRef.current.style.top = ringY + "px";
      }
      requestAnimationFrame(animate);
    };

    const onEnterService = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const label = el.dataset.cursor || "";
      if (ringRef.current) {
        ringRef.current.style.width = "90px";
        ringRef.current.style.height = "90px";
        ringRef.current.style.borderColor = "#E8650A";
        ringRef.current.style.background = "rgba(232,101,10,0.08)";
        ringRef.current.style.opacity = "1";
      }
      if (labelRef.current) {
        labelRef.current.textContent = label;
        labelRef.current.style.opacity = "1";
      }
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const onLeaveService = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(232,101,10,0.5)";
        ringRef.current.style.background = "transparent";
        ringRef.current.style.opacity = "1";
      }
      if (labelRef.current) {
        labelRef.current.style.opacity = "0";
        labelRef.current.textContent = "";
      }
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    animate();

    const targets = document.querySelectorAll("[data-cursor]");
    targets.forEach(t => {
      t.addEventListener("mouseenter", onEnterService);
      t.addEventListener("mouseleave", onLeaveService);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      targets.forEach(t => {
        t.removeEventListener("mouseenter", onEnterService);
        t.removeEventListener("mouseleave", onLeaveService);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position: 'fixed', width: 6, height: 6, borderRadius: '50%',
        background: '#E8650A', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%, -50%)', transition: 'opacity 0.2s'
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: 'fixed', width: 36, height: 36, borderRadius: '50%',
        border: '1px solid rgba(232,101,10,0.5)', pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%, -50%)', transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s'
      }} />
      {/* Label */}
      <div ref={labelRef} style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#E8650A',
        letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center',
        opacity: 0, transition: 'opacity 0.2s', whiteSpace: 'nowrap'
      }} />
    </>
  );
}
