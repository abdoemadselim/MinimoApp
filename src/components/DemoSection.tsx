import demo from "@/assets/app.mp4";
import thumbnail from "@/assets/logo.png"

const DemoSection = () => {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-8 text-foreground">Watch a demo</h2>
      
      <div className="bg-card border border-video-border rounded-2xl aspect-video max-w-2xl mx-auto p-2 flex items-center justify-center">
        <video
          className="w-full h-full rounded-2xl"
          controls
          poster={thumbnail} // optional thumbnail
        >
          <source src={demo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default DemoSection;
