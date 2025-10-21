import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { COMPANY_INFO } from './utils/constants';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero').then(module => ({ default: module.Hero })));
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./components/sections/Services').then(module => ({ default: module.Services })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900">
        {/* SEO */}
        <Helmet>
          <title>{`${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`}</title>
          <meta
            name="description"
            content="Premier steel fabrication services in Virudhunagar, Tamil Nadu. Specializing in industrial, residential, restaurant, kitchen, fencing, and office solutions with mild steel and stainless steel."
          />
          <meta
            name="keywords"
            content="steel fabrication, mild steel, stainless steel, industrial fabrication, residential solutions, commercial kitchen, Virudhunagar, Tamil Nadu, Jegan Enterprises"
          />
          <meta property="og:title" content={`${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`} />
          <meta
            property="og:description"
            content="Premier steel fabrication services in Virudhunagar, Tamil Nadu. Over 10 years of expertise in custom steel solutions."
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://yourusername.github.io/jegan-enterprises-website" />
        </Helmet>

        {/* Navigation */}
        <NavBar />

        {/* Main Content */}
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#ff6b35',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </HelmetProvider>
  );
}
