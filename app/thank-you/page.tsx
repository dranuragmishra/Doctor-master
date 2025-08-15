'use client';
import React from 'react';
import Head from 'next/head'

export default function ThankYouPage() {
  return (
    <>
    <Head>
        <link rel="canonical" href="https://dranuragmishragastro.com/thank-you" />
    </Head>
    <div style={{ padding: '4rem 2rem 10rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You!</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Your booking was successful. We look forward to seeing you!
      </p>
    </div>
    </>
  );
}
