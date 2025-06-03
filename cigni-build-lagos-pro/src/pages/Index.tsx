
import { motion } from "framer-motion";
import { Building2, Hammer, TestTube, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: TestTube,
      title: "Subsoil Investigation",
      description: "Comprehensive geological studies and soil analysis for foundation planning and construction safety."
    },
    {
      icon: Hammer,
      title: "Piling Works",
      description: "Expert Bored and CFA piling solutions with pile load tests and integrity testing services."
    },
    {
      icon: Building2,
      title: "Construction Services",
      description: "Full-scale residential, commercial, and industrial building construction projects."
    }
  ];

  const projects = [
    { type: "Residential", count: "50+" },
    { type: "Commercial", count: "25+" },
    { type: "Industrial", count: "15+" },
    { type: "Investigations", count: "100+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Building Excellence in
                <span className="text-orange-600 block">Lagos, Nigeria</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Premier construction and project management company specializing in subsoil investigation, 
                piling works, and comprehensive building solutions across residential, commercial, and industrial sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Get Quote
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-3">
                  View Projects
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600"
                alt="Modern construction building"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.type}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">{project.count}</div>
                <div className="text-slate-300">{project.type} Projects</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive construction and engineering solutions tailored to meet the unique demands of Lagos's growing infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400"
                alt="Construction site"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">About Cigni Enterprises</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Based in Lagos, Nigeria, Cigni Enterprises stands as a leading construction and project management 
                company committed to delivering excellence in every project. We specialize in subsoil investigation 
                works, comprehensive piling solutions including Bored and CFA piling, and complete construction services.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our expertise spans across residential developments, commercial complexes, industrial facilities, 
                and real estate projects. With advanced pile load testing and integrity testing capabilities, 
                we ensure the highest standards of structural safety and reliability.
              </p>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span className="text-slate-700">Serving Lagos and surrounding regions</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to start your next construction project? Contact our team for professional consultation and competitive quotes.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-slate-300">Lagos, Nigeria</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">+234 (0) 123 456 7890</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">info@ciginenterprises.com</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Request Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
