import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Fahad — Product-Focused Full Stack Engineer | SaaS & Next.js Developer",
  description:
    "Mohammad Fahad is a product-focused full stack engineer building scalable SaaS applications. Specializing in Next.js, TypeScript, multi-tenant architecture, and production-ready software. Creator of EduFlow, a multi-tenant Institution Operating System.",
  keywords: [
    "Mohammad Fahad",
    "Full Stack Engineer",
    "Next.js Developer",
    "SaaS Developer",
    "React TypeScript Developer",
    "Remote Full Stack Developer",
    "Bangladesh Software Developer",
    "Product Engineer",
    "Multi-tenant SaaS",
  ],
  authors: [{ name: "Mohammad Fahad" }],
  creator: "Mohammad Fahad",
  publisher: "Mohammad Fahad",
  metadataBase: new URL("https://mohammadfahad.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mohammad Fahad — Portfolio",
    title: "Mohammad Fahad — Product-Focused Full Stack Engineer",
    description:
      "Building scalable SaaS applications with modern full-stack architecture. Next.js, TypeScript, multi-tenant systems, and production engineering.",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Fahad — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Fahad — Product-Focused Full Stack Engineer",
    description:
      "Building scalable SaaS applications with modern full-stack architecture. Next.js, TypeScript, multi-tenant systems, and production engineering.",
    images: ["/card.png"],
    creator: "@Mohamma52324377",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Fahad",
    url: "https://mohammadfahad.com",
    image: "/mohammad-fahd.jpg",
    jobTitle: "Product-Focused Full Stack Engineer",
    description:
      "Product-focused full stack engineer building scalable SaaS applications. Creator of EduFlow, a multi-tenant Institution Operating System.",
    sameAs: [
      "https://github.com/mohammad-fahad",
      "https://www.linkedin.com/in/mohammad--fahad/",
      "https://x.com/Mohamma52324377",
      "https://stackoverflow.com/users/13954171/mohammad-fahad",
    ],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "SaaS Architecture",
      "Multi-tenant Systems",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bangladesh University of Business and Technology",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Head */}
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
          <ToastContainer />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
      </body>
    </html>
  );
}