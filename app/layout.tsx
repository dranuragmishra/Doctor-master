import Script from 'next/script';
import ClientLayout from './client_layout';

export const metadata = {
  title: 'Dr. Anurag Mishra – Expert Gastroenterologist & Hepatologist in Lucknow | ERCP, EUS, Liver Care',
  description: 'Doctor clinic in Lucknow for expert medical care. Our experienced physicians & specialists offer treatments in gastroenterology, cardiology, orthopaedics, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        {/* ✅ GTM Head Script using next/script */}
        <Script id="gtm-head" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPBKBQ24');
        `}
        </Script>
      </head>
      <body>
        {/* ✅ GTM Body Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPBKBQ24"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* ✅ Render the client layout here */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}