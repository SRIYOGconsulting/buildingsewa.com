import type { Metadata } from "next";
import VideoSection from "@/components/video/VideoSection";
import Ribbon from "@/components/Ribbon";
import { featuredVideo, videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos | Building Sewa",
  description:
    "Watch Building Sewa videos: project walkthroughs, client testimonials, and behind-the-scenes looks at our building services in Nepal.",
};

export default function VideoPage() {
  return (
    <main>
       <Ribbon
        name="Videos"
      />
      <VideoSection featuredVideo={featuredVideo} videos={videos} />
    </main>
  );
}
