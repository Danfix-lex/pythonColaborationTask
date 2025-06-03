import { motion } from "framer-motion";
import { Users, Award, Clock, MapPin, Target, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in every project we undertake."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Safety is our top priority in all construction and engineering activities."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach ensuring successful project delivery."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising commitment to quality in materials and workmanship."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Completed Projects" },
    { number: "50+", label: "Expert Engineers" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                About <span className="text-orange-600">Cigni Enterprises</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Established as Lagos's premier construction and project management company, 
                Cigni Enterprises has been at the forefront of Nigeria's infrastructure development 
                for over a decade.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We specialize in comprehensive construction solutions, from detailed subsoil 
                investigations to complex piling works and complete building construction across 
                residential, commercial, and industrial sectors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400"
                alt="Cigni Enterprises team"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center">
                    <Target className="mr-3 h-6 w-6 text-orange-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To deliver exceptional construction and engineering solutions that exceed client 
                    expectations while contributing to Lagos's sustainable infrastructure development. 
                    We are committed to innovation, safety, and environmental responsibility in all our projects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center">
                    <Award className="mr-3 h-6 w-6 text-orange-600" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To be West Africa's leading construction and project management company, 
                    recognized for our technical excellence, innovative solutions, and unwavering 
                    commitment to quality that shapes the future of Nigeria's built environment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Cigni Enterprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Proudly Serving <span className="text-orange-600">Lagos, Nigeria</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Strategically located in Lagos, we serve clients across Nigeria's commercial capital 
                and surrounding regions. Our deep understanding of local geology, regulations, and 
                construction practices gives us a unique advantage in delivering successful projects.
              </p>
              <div className="flex items-center space-x-4 text-slate-700">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span>Lagos State, Nigeria & Surrounding Regions</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400"
                alt="Lagos construction"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
