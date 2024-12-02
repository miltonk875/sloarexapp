import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import ScriptLoader from "@/components/ScriptLoader";
import Preloader from "@/components/Preloader";
// import HydrationProvider from "@/components/HydrationProvider";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollHandler from "@/components/ScrollNavbar";

export const metadata = {
  title: "Solarex Ltd",
  description: "Power house of Light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/img/logo/favicon.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/all-fontawesome.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Preloader />
        <ScrollHandler/>
        <Header />
        <main>{children}</main>
        <Footer />

        <Script src="/js/jquery-3.6.0.min.js" strategy="lazyOnload" />
        <Script src="/js/modernizr.min.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.appear.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.easing.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/counter-up.js" strategy="lazyOnload" />
        <Script src="/js/masonry.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
        {/* <ScrollToTop/> */}
      </body>
    </html>
  );
}
