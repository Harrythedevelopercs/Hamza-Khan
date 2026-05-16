"use client";

import { useEffect, useRef, useState } from "react";

const snippets = [
  "const api = Laravel::route('/portfolio');",
  "return <Portfolio />;",
  "php artisan optimize",
  "Route::get('/api/portfolio')",
  "await fetch(profile.skills)",
  "npm run build",
  "class Developer extends Human",
  "$stack = ['Laravel', 'Next.js'];",
  "deploy --production",
  "useEffect(() => animate(), [])",
];

type TrailItem = {
  id: number;
  x: number;
  y: number;
  text: string;
};

export default function CodeTrail() {
  const [items, setItems] = useState<TrailItem[]>([]);
  const lastPoint = useRef({ x: 0, y: 0, time: 0 });
  const counter = useRef(0);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const now = Date.now();
      const dx = Math.abs(event.clientX - lastPoint.current.x);
      const dy = Math.abs(event.clientY - lastPoint.current.y);

      if (now - lastPoint.current.time < 55 || dx + dy < 28) {
        return;
      }

      lastPoint.current = {
        x: event.clientX,
        y: event.clientY,
        time: now,
      };

      const id = counter.current++;
      const text = snippets[id % snippets.length];

      setItems((current) => [
        ...current.slice(-22),
        {
          id,
          x: event.clientX,
          y: event.clientY,
          text,
        },
      ]);

      window.setTimeout(() => {
        setItems((current) => current.filter((item) => item.id !== id));
      }, 1600);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="code-trail-layer" aria-hidden="true">
      {items.map((item) => (
        <span
          className="code-trail-item"
          key={item.id}
          style={{
            left: item.x,
            top: item.y,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
