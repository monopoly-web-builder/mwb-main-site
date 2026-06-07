const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-bold text-sm">MWB</span>
              </div>
              <span className="font-display font-bold text-lg">
                Monopoly<span className="text-accent">WebBuilder</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Professional, affordable websites for UK small businesses. 
              Built and managed for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#packages"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Packages & Pricing
              </a>
              <a
                href="#about"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="#how-it-works"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                How It Works
              </a>
              <a
                href="#faq"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>
                <a
                  href="mailto:info@monopolywebbuilder.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@monopolywebbuilder.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.monopolywebbuilder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  www.monopolywebbuilder.com
                </a>
              </p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Monopoly Web Builder Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
