import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const animationClasses = {
    'fade-in': 'opacity-0 animate-fade-in',
    'fade-in-up': 'opacity-0 translate-y-8 animate-fade-in-up',
    'fade-in-down': 'opacity-0 -translate-y-8 animate-fade-in-down',
    'slide-in-left': 'opacity-0 -translate-x-8 animate-slide-in-left',
    'slide-in-right': 'opacity-0 translate-x-8 animate-slide-in-right',
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all duration-700 ease-out',
        animationClasses[animation],
        hasIntersected && 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
