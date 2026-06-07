import { MessageSquare, Palette, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell Us About Your Business",
    description:
      "We have a quick chat to understand your business, what you do, and what you need from your website.",
  },
  {
    icon: Palette,
    step: "02",
    title: "We Design & Build Your Site",
    description:
      "We create a professional, mobile-friendly website tailored to your business. You review and approve it.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Your Website Goes Live",
    description:
      "Once you're happy, we launch your site. We handle hosting, security certificates, and all the technical bits.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "We Keep It Updated",
    description:
      "Need changes? Just email or message us. We'll update your site as part of your monthly plan — no extra charges.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding hero-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-3 mb-4">
            Getting Online Is Easy
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            No complicated processes or technical jargon. Just a simple, 
            straightforward path to your new website.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-foreground/20" />
              )}

              <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary-foreground/10 transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-primary-foreground text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
