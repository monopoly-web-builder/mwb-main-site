import { Beer, Hammer, Users, Store, Music, Building } from "lucide-react";

const sectors = [
  {
    icon: Beer,
    title: "Pubs & Bars",
    description: "Showcase your venue, menus, events, and opening hours",
  },
  {
    icon: Music,
    title: "Clubs & Venues",
    description: "Promote events, sell tickets, and build your audience",
  },
  {
    icon: Hammer,
    title: "Tradespeople",
    description: "Display your services, portfolio, and contact details",
  },
  {
    icon: Store,
    title: "Local Shops",
    description: "Share your products, location, and business story",
  },
  {
    icon: Users,
    title: "Community Groups",
    description: "Connect with members and share news and events",
  },
  {
    icon: Building,
    title: "Small Businesses",
    description: "Professional online presence to grow your brand",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Who We Help
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Websites for Every Local Business
          </h2>
          <p className="text-muted-foreground text-lg">
            From busy pubs to independent tradespeople, we help UK businesses 
            get online without the hassle.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:card-shadow-hover transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <sector.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                {sector.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
