import './globals.css';

import {
  Navbar,
  Footer,
  TopBar,
  ScrollToTop,
} from '../components/layout/index.js';



export const metadata = {


  metadataBase:
    new URL(
      "https://www.azalprojects.com"
    ),


  title: {

    default:
      "AZAL Projects | Ground Engineering & Infrastructure Solutions Saudi Arabia",

    template:
      "%s | AZAL Projects",

  },


  description:
    "AZAL Projects provides professional ground engineering solutions including shoring systems, excavation, dewatering, trench shuttering and infrastructure contracting services across Saudi Arabia.",



  keywords:[

    "AZAL Projects",

    "Ground Engineering Saudi Arabia",

    "Shoring Systems Contractor",

    "Excavation Contractor Saudi Arabia",

    "Dewatering Solutions",

    "Infrastructure Contractor Riyadh",

    "Civil Engineering Saudi Arabia",

    "Construction Company KSA"

  ],



  authors:[

    {
      name:
      "AZAL Projects"
    }

  ],



  creator:
    "AZAL Projects",



  publisher:
    "AZAL Projects",



  applicationName:
    "AZAL Projects",



  category:
    "Engineering & Construction",



  alternates:{

    canonical:
      "https://www.azalprojects.com"

  },



  openGraph:{


    title:
      "AZAL Projects | Engineering Excellence",


    description:
      "Professional ground engineering, excavation and infrastructure solutions across Saudi Arabia.",


    url:
      "https://www.azalprojects.com",


    siteName:
      "AZAL Projects",


    locale:
      "en_US",


    type:
      "website",


  },



  twitter:{


    card:
      "summary_large_image",


    title:
      "AZAL Projects | Engineering Excellence",


    description:
      "Ground engineering and infrastructure solutions Saudi Arabia.",


  },



  robots:{


    index:true,

    follow:true,


    googleBot:{


      index:true,

      follow:true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,

    }

  },


};



export default function RootLayout({
  children,
}) {


  return (

    <html
      lang="en"
      suppressHydrationWarning
    >


      <body>


        {/* Google Structured Data */}

        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html:

            JSON.stringify({

              "@context":
              "https://schema.org",


              "@type":
              "Organization",


              "name":
              "AZAL Projects",


              "url":
              "https://www.azalprojects.com",


              "logo":
              "https://www.azalprojects.com/logo.png",



              "description":
              "Ground engineering and infrastructure contracting company in Saudi Arabia.",



              "address":{

                "@type":
                "PostalAddress",


                "addressCountry":
                "Saudi Arabia"

              },



              "contactPoint":{


                "@type":
                "ContactPoint",


                "telephone":
                "+966547264860",


                "contactType":
                "customer service"

              },



              "sameAs":[


                "https://linkedin.com/company/azalprojects",

                "https://instagram.com/azalprojects",

                "https://facebook.com/azalprojects"


              ]


            })


          }}

        />




        <TopBar />


        <Navbar />



        <main
          className="pt-10"
        >

          {children}


        </main>



        <Footer />



        <ScrollToTop />


      </body>


    </html>

  );

}