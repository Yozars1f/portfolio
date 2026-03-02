"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";

export default function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configuration based on theme
        const isDark = resolvedTheme === 'dark';
        const particleColor = isDark ? "rgba(148, 163, 184, 0.5)" : "rgba(100, 116, 139, 0.5)"; // Slate-400 (Dark) vs Slate-500 (Light)
        const lineColorBase = isDark ? "148, 163, 184" : "148, 163, 184"; // Slate-400 base for both, maybe adjust opacity

        const particleCount = 60; // Adjust for density
        const connectionDistance = 150;
        const moveSpeed = 0.5;

        // Resize handler
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                // Random velocity between -moveSpeed and +moveSpeed
                this.vx = (Math.random() - 0.5) * moveSpeed;
                this.vy = (Math.random() - 0.5) * moveSpeed;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }

            draw() {
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx!.fillStyle = particleColor;
                ctx!.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        // Opacity based on distance (closer = more opaque)
                        const opacity = 1 - distance / connectionDistance;
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(${lineColorBase}, ${opacity * 0.2})`; // Slate-400, very low opacity
                        ctx!.lineWidth = 1;
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawLines();

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initial setup
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]); // Re-run effect when theme changes

    return (
        <motion.canvas
            ref={canvasRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
}
