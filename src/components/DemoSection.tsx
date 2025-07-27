const DemoSection = () => {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-8 text-foreground">Watch a demo</h2>
      
      <div className="bg-card border border-video-border rounded-2xl aspect-video max-w-2xl mx-auto p-8 flex items-center justify-center">
        <div className="text-muted-foreground">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" fill="currentColor"/>
            </svg>
          </div>
          <p>Demo Video Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;