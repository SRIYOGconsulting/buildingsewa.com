// components/video/VideoSection.tsx
import type { Video } from "@/data/videos";

interface VideoEmbedProps {
  video: Video;
  size?: "large" | "small";
}

function VideoEmbed({ video, size = "small" }: VideoEmbedProps) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="relative w-full overflow-hidden rounded-lg bg-neutral-900 pb-[56.25%] shadow-sm">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <figcaption
        className={
          size === "large"
            ? "text-lg font-semibold text-neutral-900"
            : "text-sm font-medium text-neutral-700"
        }
      >
        {video.title}
      </figcaption>
    </figure>
  );
}

interface VideoSectionProps {
  featuredVideo: Video;
  videos: Video[];
  featuredHeading?: string;
  gridHeading?: string;
}

export default function VideoSection({
  featuredVideo,
  videos,
  featuredHeading = "Featured Building Sewa Video",
  gridHeading = "Building Sewa Videos",
}: VideoSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Featured video */}
      <h2 className="mb-6 text-2xl font-bold text-neutral-900 sm:text-3xl">
        {featuredHeading}
      </h2>
      <div className="mb-14 max-w-3xl">
        <VideoEmbed video={{ ...featuredVideo, title: featuredHeading }} size="large" />
      </div>

      <h2 className="mb-6 text-2xl font-bold text-neutral-900 sm:text-3xl">
        {gridHeading}
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoEmbed key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}