"use client";
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating some async operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <html lang="en">
      <body>
      <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
    
        <Navbar />
        {children}
        <Footer />
        </div>
      )}
    </div>
      </body>
    </html>
  )
}
