import { useCallback } from 'react';
import { AnalyticsEvent } from '@/types';
import { analyticsConfig } from '@/config/app.config';

export const useAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!analyticsConfig.enabled) {
      if (analyticsConfig.debug) {
        console.log('Analytics Event:', event);
      }
      return;
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', event.action, {
        content_name: event.label,
        value: event.value,
      });
    }
  }, []);

  const trackPageView = useCallback((page: string) => {
    trackEvent({
      event: 'page_view',
      category: 'navigation',
      action: 'page_view',
      label: page,
    });
  }, [trackEvent]);

  const trackCTA = useCallback((ctaName: string, location: string) => {
    trackEvent({
      event: 'cta_click',
      category: 'engagement',
      action: 'cta_click',
      label: `${ctaName}_${location}`,
    });
  }, [trackEvent]);

  const trackScroll = useCallback((section: string, percentage: number) => {
    trackEvent({
      event: 'scroll',
      category: 'engagement',
      action: 'scroll',
      label: section,
      value: percentage,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackCTA,
    trackScroll,
  };
};

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}
