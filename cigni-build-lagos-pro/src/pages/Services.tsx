import { motion } from "framer-motion";
import { TestTube, Hammer, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: TestTube,
      title: "Subsoil Investigation",
      description: "Comprehensive geological studies and soil analysis for foundation planning and construction safety.",
      features: [
        "Geological mapping and analysis",
        "Soil bearing capacity testing",
        "Foundation design recommendations",
        "Environmental impact assessment"
      ]
    },
    {
      icon: Hammer,
      title: "Piling Works",
      description: "Expert Bored and CFA piling solutions with pile load tests and integrity testing services.",
      features: [
        "Bored pile construction",
        "CFA (Continuous Flight Auger) piling",
        "Pile load testing",
        "Pile integrity testing"
      ]
    },
    {
      icon: Building2,
      title: "Construction Services",
      description: "Full-scale residential, commercial, and industrial building construction projects.",
      features: [
        "Residential developments",
        "Commercial complexes",
        "Industrial facilities",
        "Real estate projects"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6"
          >
            Our <span className="text-orange-600">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Comprehensive construction and engineering solutions tailored to meet Lagos's growing infrastructure demands.
          </motion.p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full border-0 shadow-xl">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <CardTitle className="text-2xl text-slate-800">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-slate-600 mt-4">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 bg-orange-600 hover:bg-orange-700">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1518005020951-eccb494ad742' : 
                      index === 1 ? '1487958449943-2429e8be8625' : 
                      '1496307653780-42ee777d4833'
                    }?auto=format&fit=crop&w=600&h=400`}
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
