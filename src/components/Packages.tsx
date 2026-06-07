import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Star } from "lucide-react";

const packages = [
  {
    name: "InfoSite Basic",
    price: "20",
    setup: "20",
    description: "A simple, professional stand-alone information website for businesses that need an online presence.",
    features: [
      "Professional single-page or scrolling site",
      "Hosting & maintenance included",
      "Contact details, images & services",
      "Opening hours & location",
      "Mobile-responsive design",
      "SSL security certificate",
      "Social media integration",
    ],
    ideal: "Trades, consultants, small business profiles",
    example: "https://energy-pathways-uk.lovable.app/",
    popular: false,
  },
  {
    name: "Engage Monthly",
    price: "65",
    setup: "65",
    description: "For businesses that need light but regular updates and optional email marketing.",
    features: [
      "Everything in InfoSite Basic",
      "Website updates up to once per month",
      "Optional mailing-list integration",
      "Up to 5,000 email subscribers",
      "Up to 2 email campaigns per month",
      "Priority support",
    ],
    ideal: "Growing businesses needing regular updates",
    example: "https://golden-lion-sydenham-site.lovable.app/",
    popular: true,
  },
  {
    name: "Engage Weekly Pro",
    price: "130",
    setup: "130",
    description: "For businesses needing frequent promotions and regular content updates.",
    features: [
      "Everything in Engage Monthly",
      "Weekly website updates",
      "Weekly marketing email capability",
      "Advanced analytics & reporting",
      "Dedicated account manager",
    ],
    ideal: "Busy venues, hospitality & event-driven businesses",
    example: "https://ramble-inn-showcase.lovable.app/",
    popular: false,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the package that fits your business. All plans include hosting, 
            maintenance, and our managed update service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 ${
                pkg.popular ? "ring-2 ring-accent scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-display font-bold text-foreground">
                  £{pkg.price}
                </span>
                <span className="text-muted-foreground">/month</span>
                <p className="text-sm text-muted-foreground mt-1">
                  + £{pkg.setup} one-off setup
                </p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <p className="text-xs text-muted-foreground mb-6 italic">
                Ideal for: {pkg.ideal}
              </p>

              {/* Example Link */}
              <a
                href={pkg.example}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium mb-6 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Example Website
              </a>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "accent" : "default"}
                className="w-full"
                size="lg"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto">
          Additional email subscribers available at approximately 1p per user per month. 
          All prices exclude VAT. No long-term contracts — cancel anytime with 30 days notice.
        </p>
      </div>
    </section>
  );
};

export default Packages;
