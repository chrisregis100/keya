const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="ml-2 text-xl font-bold">KeyaPay</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              The future of international money transfers. Fast, secure, and
              transparent.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Send money
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Exchange rates
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Mobile app
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                About us
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Press
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Partners
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Help center
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Contact us
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Security
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Legal
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm">
            © 2025 KeyaPay. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
