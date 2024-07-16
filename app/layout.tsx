"use client";
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr Anurag Mishra',
  description: 'Best Doctor in Lucknow for Gastroenterology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
