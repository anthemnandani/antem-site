
export const metadata = {
  title: "Anthem Infotech - Software Product Development",
  description: "Anthem Infotech specializes in end-to-end software product development and maintenance.",
  openGraph: {
    title: "Anthem Infotech",
    description: "Trusted by businesses worldwide for software product development",
    url: "https://antheminfotech.com",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Anthem Infotech Logo" },
    ],
    type: "website",
  },
};


import IntroSlider from "../container/IntroSlider/IntroSlider";
import HomeAbout from "../components/About/HomeAbout.jsx";
import Funfact from "../container/Funfact/Funfact";
import ServiceIconBox from "../container/service/ServiceIconBox";
import HomeSuccess from "../components/Success/HomeSuccess.jsx";
import CallToAction from "../container/CallToAction/CallToAction";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import BrandContainer from "../container/Brand/BrandContainer";
import ScrollToTop from "../components/ScrollToTop";


console.log('asdfghj', process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL)

export default function HomePage() {

  return (
    <>
    
      <main>
        <IntroSlider />
        <HomeAbout classOption="bg-white" />
        <Funfact classOption="bg-white" />
        <ServiceIconBox classOption="background-1" />
        <HomeSuccess classOption="bg-white" />
        <CallToAction />
        <ContactInformation classOption="background-1" />
        <BrandContainer classOption="section-padding bg-white" />
      </main>
      <ScrollToTop />
    </>
  );
}
