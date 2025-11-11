// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import { useEffect, useRef } from 'react';
import './ElectricBorder.css';

export default function ElectricBorder({
  children,
  color = '#7df9ff',
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  style = {}
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const points = [];
    const numPoints = Math.floor((width + height) * 2 / 10);

    // Initialize points around the border
    for (let i = 0; i < numPoints; i++) {
      const progress = i / numPoints;
      const perimeter = (width + height) * 2;
      const distance = progress * perimeter;

      let x, y;
      if (distance < width) {
        x = distance;
        y = 0;
      } else if (distance < width + height) {
        x = width;
        y = distance - width;
      } else if (distance < width * 2 + height) {
        x = width - (distance - width - height);
        y = height;
      } else {
        x = 0;
        y = height - (distance - width * 2 - height);
      }

      points.push({
        x,
        y,
        baseX: x,
        baseY: y,
        offset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const animate = () => {
      time += speed * 0.01;

      ctx.clearRect(0, 0, width, height);

      // Update points with chaos
      points.forEach((point, i) => {
        const chaosX = Math.sin(time + point.offset) * chaos * 10;
        const chaosY = Math.cos(time + point.offset * 1.5) * chaos * 10;
        point.x = point.baseX + chaosX;
        point.y = point.baseY + chaosY;
      });

      // Draw the glowing border
      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        const xc = (points[i].x + points[i - 1].x) / 2;
        const yc = (points[i].y + points[i - 1].y) / 2;
        ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
      }

      // Close the path
      const xc = (points[0].x + points[points.length - 1].x) / 2;
      const yc = (points[0].y + points[points.length - 1].y) / 2;
      ctx.quadraticCurveTo(points[points.length - 1].x, points[points.length - 1].y, xc, yc);
      ctx.closePath();
      ctx.stroke();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      // Recalculate base positions
      points.forEach((point, i) => {
        const progress = i / numPoints;
        const perimeter = (width + height) * 2;
        const distance = progress * perimeter;

        if (distance < width) {
          point.baseX = distance;
          point.baseY = 0;
        } else if (distance < width + height) {
          point.baseX = width;
          point.baseY = distance - width;
        } else if (distance < width * 2 + height) {
          point.baseX = width - (distance - width - height);
          point.baseY = height;
        } else {
          point.baseX = 0;
          point.baseY = height - (distance - width * 2 - height);
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [color, speed, chaos, thickness]);

  return (
    <div 
      ref={containerRef} 
      className="electric-border-container" 
      style={style}
    >
      <canvas 
        ref={canvasRef} 
        className="electric-border-canvas"
      />
      <div className="electric-border-content">
        {children}
      </div>
    </div>
  );
}
