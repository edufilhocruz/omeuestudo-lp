import { useEffect, useRef } from 'react';
import { PerformanceMetrics } from '@/types';

interface PerformanceMonitorProps {
  onMetrics?: (metrics: PerformanceMetrics) => void;
  enabled?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetrics,
  enabled = process.env.NODE_ENV === 'development',
}) => {
  const startTime = useRef<number>(performance.now());
  const renderTime = useRef<number>(0);

  useEffect(() => {
    if (!enabled) return;

    const measurePerformance = () => {
      const loadTime = performance.now() - startTime.current;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        renderTime.current = performance.now() - renderStart;
      });

      // Measure interaction time
      const interactionTime = performance.timing?.domInteractive 
        ? performance.timing.domInteractive - performance.timing.navigationStart
        : 0;

      const metrics: PerformanceMetrics = {
        loadTime,
        renderTime: renderTime.current,
        interactionTime,
      };

      onMetrics?.(metrics);

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('🚀 Performance Metrics:', {
          'Load Time': `${loadTime.toFixed(2)}ms`,
          'Render Time': `${renderTime.current.toFixed(2)}ms`,
          'Interaction Time': `${interactionTime.toFixed(2)}ms`,
        });
      }
    };

    // Measure after initial render
    const timer = setTimeout(measurePerformance, 100);

    return () => clearTimeout(timer);
  }, [enabled, onMetrics]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 LCP:', `${lastEntry.startTime.toFixed(2)}ms`);
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('⚡ FID:', `${entry.processingStart - entry.startTime}ms`);
        }
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    return () => {
      observer.disconnect();
      fidObserver.disconnect();
    };
  }, [enabled]);

  return null;
};
