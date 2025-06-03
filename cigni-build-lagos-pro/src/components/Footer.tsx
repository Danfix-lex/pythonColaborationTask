
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Services": [
      { name: "Subsoil Investigation", path: "/services" },
      { name: "Piling Works", path: "/services" },
      { name: "Construction Services", path: "/services" }
    ],
    "Company": [
      { name: "About Us", path: "/about" },
      { name: "Our Projects", path: "/projects" },
      { name: "Testimonials", path: "/testimonials" }
    ],
    "Products": [
      { name: "Investigation Equipment", path: "/products" },
      { name: "Piling Systems", path: "/products" },
      { name: "Construction Materials", path: "/products" }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold">Cigni Enterprises</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading construction and project management company in Lagos, Nigeria. 
              Specializing in subsoil investigation, piling works, and comprehensive 
              building solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                Lagos, Nigeria
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-5 w-5 text-orange-600 mr-3" />
                +234 (0) 123 456 7890
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-5 w-5 text-orange-600 mr-3" />
                info@ciginenterprises.com
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-slate-300 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © {currentYear} Cigni Enterprises. All rights reserved.
          </p>
          <p className="text-slate-400">
            Building excellence in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
