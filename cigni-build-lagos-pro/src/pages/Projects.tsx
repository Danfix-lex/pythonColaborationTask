import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Victoria Island Commercial Complex",
      category: "Commercial",
      description: "50-story mixed-use development with retail, office spaces, and luxury apartments.",
      location: "Victoria Island, Lagos",
      duration: "24 months",
      client: "Mainland Properties Ltd",
      status: "Completed",
      image: "photo-1487958449943-2429e8be8625",
      highlights: ["Subsoil investigation", "CFA piling works", "Full construction management"]
    },
    {
      title: "Lekki Industrial Estate",
      category: "Industrial",
      description: "Large-scale industrial facility with heavy machinery foundations and specialized infrastructure.",
      location: "Lekki, Lagos",
      duration: "18 months",
      client: "Federal Ministry of Works",
      status: "Completed",
      image: "photo-1518005020951-eccb494ad742",
      highlights: ["Deep foundation analysis", "Pile load testing", "Industrial construction"]
    },
    {
      title: "Ikoyi Heights Residential",
      category: "Residential",
      description: "Luxury residential development with 200 units across multiple towers.",
      location: "Ikoyi, Lagos",
      duration: "30 months",
      client: "Ikoyi Heights Development",
      status: "In Progress",
      image: "photo-1496307653780-42ee777d4833",
      highlights: ["Geological mapping", "Bored pile installation", "Residential construction"]
    },
    {
      title: "Lagos Port Expansion",
      category: "Infrastructure",
      description: "Port infrastructure expansion including deep water berths and cargo handling facilities.",
      location: "Apapa, Lagos",
      duration: "36 months",
      client: "Nigerian Ports Authority",
      status: "Completed",
      image: "photo-1431576901776-e539bd916ba2",
      highlights: ["Marine foundation work", "Pile integrity testing", "Port construction"]
    },
    {
      title: "Mainland Shopping Center",
      category: "Commercial",
      description: "Modern shopping center with parking facilities and entertainment complex.",
      location: "Yaba, Lagos",
      duration: "15 months",
      client: "Lagos State Development Corp",
      status: "Completed",
      image: "photo-1449157291145-7efd050a4d0e",
      highlights: ["Foundation engineering", "Commercial construction", "Project management"]
    },
    {
      title: "Ajah New Town Development",
      category: "Mixed-Use",
      description: "Comprehensive new town development with residential, commercial, and recreational facilities.",
      location: "Ajah, Lagos",
      duration: "48 months",
      client: "New Town Development Authority",
      status: "In Progress",
      image: "photo-1459767129954-1b1c1f9b9ace",
      highlights: ["Master planning", "Infrastructure development", "Mixed-use construction"]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Commercial": "bg-purple-100 text-purple-800",
      "Residential": "bg-orange-100 text-orange-800",
      "Industrial": "bg-gray-100 text-gray-800",
      "Infrastructure": "bg-teal-100 text-teal-800",
      "Mixed-Use": "bg-indigo-100 text-indigo-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
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
            Our <span className="text-orange-600">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Showcasing our portfolio of successful construction and engineering projects across Lagos.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=400&h=250`}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-600">
                        <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Users className="h-4 w-4 mr-2 text-orange-600" />
                        {project.client}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let our experienced team bring your construction vision to life with our proven expertise.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Discuss Your Project
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
