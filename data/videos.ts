
export interface Video {
  id: string;             
  youtubeId: string;      
  title: string;          
  serviceSlug?: string;  
}

export const featuredVideo: Video = {
  id: "featured",
  youtubeId: "mbwuj58UEPg",
  title: "Civil Construction: From Foundation to Finishing",
  serviceSlug: "civil-construction",
};

export const videos: Video[] = [
  {
    id: "video-1",
    youtubeId: "SPCewaAfqPA",
    title: "Land Survey & Site Inspection Before You Build",
    serviceSlug: "land-survey-site-inspection",
  },
  {
    id: "video-2",
    youtubeId: "7O3Unkchpuc",
    title: "Designing Your Home: Architecture Walkthrough",
    serviceSlug: "architecture-house-design",
  },
  {
    id: "video-3",
    youtubeId: "M10YR38VGso",
    title: "Structural Engineering: Built to Last",
    serviceSlug: "structural-engineering",
  },
  {
    id: "video-4",
    youtubeId: "GGX4a7npOUA",
    title: "Waterproofing That Keeps Your Home Dry",
    serviceSlug: "waterproofing",
  },
  {
    id: "video-5",
    youtubeId: "puxoiPvNx44",
    title: "Modular Kitchens Built for Nepali Homes",
    serviceSlug: "modular-kitchen",
  },
  {
    id: "video-6",
    youtubeId: "giuWAhwfQpo",
    title: "Interior Design: From Concept to Finished Room",
    serviceSlug: "interior-designing",
  },
  {
    id: "video-7",
    youtubeId: "dyn8jSxrfBc",
    title: "Solar Panel Installation for a Sustainable Home",
    serviceSlug: "solar-panel-installation",
  },
  {
    id: "video-8",
    youtubeId: "VPQH7CvIJcE",
    title: "CCTV Installation for Home & Office Security",
    serviceSlug: "cctv-camera-installation",
  },
  {
    id: "video-9",
    youtubeId: "vpfUjG9OMy0",
    title: "Griha Pravesh Puja: Welcoming You Home",
    serviceSlug: "griha-pravesh-puja",
  },

];