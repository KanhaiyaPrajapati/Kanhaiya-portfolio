"use client";

import { useRef, ReactNode, ElementType } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/animations";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** How far (px) the element drifts toward the cursor at the edge. */
  strength?: number;
  as?: ElementType;
  href?: string;
  download?: boolean | string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
}

/**
 * Wraps content so it gently follows the cursor while hovered, then springs
 * back to center on leave. Disabled when the user prefers reduced motion.
 */
export default function MagneticButton({
  children,
  className,
  strength = 14,
  as = "a",
  ...rest
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * strength * 2);
    y.set(relY * strength * 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const MotionTag = motion(as);

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reduced ? undefined : { x: springX, y: springY }}
      whileTap={reduced ? undefined : { scale: 0.96 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
