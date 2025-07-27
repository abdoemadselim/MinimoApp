const ProductivityCycle = () => {
  const cycleSteps = [
    { title: "Start your session", position: "top" },
    { title: "Take a break", position: "left" },
    { title: "Get insights", position: "bottom" },
    { title: "Be more productive", position: "right", accent: true },
  ];

  return (
    <section className="text-center max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8 flex items-center justify-center gap-3">
        <div className="w-6 h-6 rounded-full bg-circle-accent flex items-center justify-center">
          <span className="text-white text-sm font-bold">×</span>
        </div>
        <p className="text-muted-foreground">
          Instead of studying/working for 8 hours in row
        </p>
      </div>

      <div className="relative w-80 h-80 mx-auto">
        {/* Central connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
          <circle
            cx="160"
            cy="160"
            r="120"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Cycle steps */}
        {cycleSteps.map((step, index) => {
          const angle = (index * 90 - 90) * (Math.PI / 180); // Start from top
          const x = 160 + 120 * Math.cos(angle);
          const y = 160 + 120 * Math.sin(angle);

          return (
            <div
              key={step.title}
              className={`absolute w-24 h-24 rounded-full flex items-center justify-center text-sm font-medium text-center p-2 transform -translate-x-1/2 -translate-y-1/2 ${
                step.accent
                  ? "bg-circle-accent text-white"
                  : "bg-card border border-border text-foreground"
              }`}
              style={{
                left: x,
                top: y,
              }}
            >
              {step.title}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductivityCycle;