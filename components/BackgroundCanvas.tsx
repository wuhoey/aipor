
import React, { useEffect, useRef } from 'react';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; z: number; vx: number; vy: number }[] = [];
    const particleCount = 150; // 增加數量讓畫面更豐富
    const connectionDist = 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 2 + 0.5, // 模擬深度層次
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX - window.innerWidth / 2) * 0.05;
      mouse.current.y = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 背景層次感
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(1, '#020617');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // 加上視差位移
        const posX = p.x + mouse.current.x * p.z;
        const posY = p.y + mouse.current.y * p.z;

        p.x += p.vx;
        p.y += p.vy;

        // 循環邊界
        if (p.x < -100) p.x = canvas.width + 100;
        if (p.x > canvas.width + 100) p.x = -100;
        if (p.y < -100) p.y = canvas.height + 100;
        if (p.y > canvas.height + 100) p.y = -100;

        // 繪製粒子
        ctx.fillStyle = `rgba(6, 182, 212, ${0.15 + (p.z / 3)})`;
        ctx.beginPath();
        ctx.arc(posX, posY, 1 + p.z, 0, Math.PI * 2);
        ctx.fill();

        // 繪製連線 (神經網路節點)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const posX2 = p2.x + mouse.current.x * p2.z;
          const posY2 = p2.y + mouse.current.y * p2.z;
          const dx = posX - posX2;
          const dy = posY - posY2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.15 * p.z;
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 0.5 * p.z;
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(posX2, posY2);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default BackgroundCanvas;
