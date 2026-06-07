import { Heart, Clock, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Built for Small Business",
    description:
      "We understand that running a business is hard enough without worrying about websites. That's why we handle everything for you.",
  },
  {
    icon: Clock,
    title: "Save Your Time",
    description:
      "No more struggling with website builders or chasing developers. Tell us what you need, and we'll make it happen.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "Your website is hosted on modern, secure infrastructure. We ensure it loads quickly and stays online 24/7.",
  },
  {
    icon: Shield,
    title: "No Technical Hassle",
    description:
      "SSL certificates, updates, backups, security — we take care of all the technical stuff so you don't have to.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
              Why Monopoly Web Builder?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We're a UK-based team that believes every local business deserves a 
              professional online presence without the complexity and high costs of 
              traditional web development.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Using cutting-edge technology, we create beautiful, fast websites that 
              are easy for us to update and maintain. This means lower costs for you 
              and a website that's always current and working perfectly.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-display font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Managed Service</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Website Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-accent">UK</p>
                <p className="text-sm text-muted-foreground">Based Support</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
