import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chief Adebayo Ogundimu",
      position: "Project Director",
      company: "Lagos State Development Corporation",
      content: "Cigni Enterprises delivered exceptional subsoil investigation services for our major infrastructure project. Their technical expertise and attention to detail ensured our foundation designs were optimal and cost-effective.",
      rating: 5,
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Mrs. Folake Adesanya",
      position: "CEO",
      company: "Mainland Properties Ltd",
      content: "The piling works completed by Cigni Enterprises exceeded our expectations. Their CFA piling solution was efficient, and the pile integrity testing gave us complete confidence in the foundation quality.",
      rating: 5,
      image: "photo-1494790108755-2616b612b5ab"
    },
    {
      name: "Engr. Tunde Bakare",
      position: "Construction Manager",
      company: "Victoria Island Commercial Complex",
      content: "Outstanding construction services from start to finish. Cigni Enterprises managed our commercial building project with professionalism, delivering on time and within budget while maintaining high quality standards.",
      rating: 5,
      image: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Dr. Amina Ibrahim",
      position: "Project Coordinator",
      company: "Federal Ministry of Works",
      content: "Their expertise in pile load testing and comprehensive project management approach made our industrial facility construction seamless. Highly recommended for large-scale projects.",
      rating: 5,
      image: "photo-1438761681033-6461ffad8d80"
    },
    {
      name: "Mr. Chidi Okafor",
      position: "Real Estate Developer",
      company: "Ikoyi Heights Development",
      content: "Cigni Enterprises transformed our residential development vision into reality. Their attention to detail in both foundation work and construction phases was impressive.",
      rating: 5,
      image: "photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Mrs. Bukola Martins",
      position: "Operations Manager",
      company: "Lekki Industrial Estate",
      content: "Exceptional service delivery! Their subsoil investigation work provided crucial insights that saved our project significant costs. Professional team with deep technical knowledge.",
      rating: 5,
      image: "photo-1544005313-94ddf0286df2"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
            Client <span className="text-orange-600">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Hear what our satisfied clients say about our construction and project management services across Lagos.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-orange-600 mr-3" />
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <img
                        src={`https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=100&h=100`}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.position}</p>
                        <p className="text-sm text-orange-600 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let us help you achieve your construction goals with our proven expertise and commitment to excellence.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
