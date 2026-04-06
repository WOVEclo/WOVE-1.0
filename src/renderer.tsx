import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* SEO Meta Tags */}
        <title>WOVE - Premium Technical Menswear | Spring/Summer 2026</title>
        <meta name="description" content="WOVE - Where technical performance meets timeless design. Premium menswear combining innovation, quality, and minimalist aesthetics. Free UK shipping over £150." />
        <meta name="keywords" content="premium menswear, technical clothing, performance wear, minimalist fashion, contemporary menswear, luxury basics" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WOVE - Premium Technical Menswear" />
        <meta property="og:description" content="Where technical performance meets timeless design. Explore our Spring/Summer 2026 Collection." />
        <meta property="og:image" content="/static/hero-bag.jpg" />
        <meta property="og:url" content="https://webapp.pages.dev" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WOVE - Premium Technical Menswear" />
        <meta name="twitter:description" content="Where technical performance meets timeless design." />
        <meta name="twitter:image" content="/static/hero-bag.jpg" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Google Analytics / GA4 - Replace with your actual ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `
        }} />
        
        {/* Meta Pixel (Facebook) - Replace with your actual Pixel ID */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID_HERE');
            fbq('track', 'PageView');
          `
        }} />
        <noscript dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1" />`
        }} />
        
        {/* Structured Data for Products */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WOVE",
            "url": "https://webapp.pages.dev",
            "logo": "https://webapp.pages.dev/static/2.png",
            "description": "Premium technical menswear combining performance and timeless design",
            "sameAs": [
              "https://instagram.com/wove",
              "https://twitter.com/wove"
            ]
          })
        }} />
      </head>
      <body>
        {children}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
