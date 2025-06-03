import { motion } from "framer-motion";
import { Package, Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const products = [
    {
      name: "Foundation Analysis Kit",
      category: "Investigation Equipment",
      description: "Complete soil analysis and foundation assessment tools for accurate subsoil investigation.",
      features: ["Digital penetrometer", "Soil sampling equipment", "Laboratory analysis kit", "Report generation software"],
      image: "photo-1518005020951-eccb494ad742"
    },
    {
      name: "Bored Pile Systems",
      category: "Piling Equipment",
      description: "Advanced bored pile construction equipment for deep foundation solutions.",
      features: ["Rotary drilling rigs", "Casing systems", "Concrete pumping units", "Quality control instruments"],
      image: "photo-1487958449943-2429e8be8625"
    },
    {
      name: "CFA Piling Solutions",
      category: "Piling Equipment",
      description: "Continuous Flight Auger piling systems for efficient foundation construction.",
      features: ["CFA drilling equipment", "Auger flight systems", "Concrete delivery systems", "Monitoring technology"],
      image: "photo-1496307653780-42ee777d4833"
    },
    {
      name: "Load Testing Equipment",
      category: "Testing Systems",
      description: "Comprehensive pile load testing and integrity testing equipment.",
      features: ["Hydraulic jacks", "Load cells", "Data acquisition systems", "Analysis software"],
      image: "photo-1431576901776-e539bd916ba2"
    },
    {
      name: "Construction Materials",
      category: "Building Supplies",
      description: "High-quality construction materials for residential and commercial projects.",
      features: ["Premium concrete mixes", "Reinforcement steel", "Waterproofing systems", "Quality assurance"],
      image: "photo-1449157291145-7efd050a4d0e"
    },
    {
      name: "Project Management Tools",
      category: "Software Solutions",
      description: "Digital project management and monitoring solutions for construction projects.",
      features: ["Project scheduling", "Resource management", "Progress tracking", "Client reporting"],
      image: "photo-1459767129954-1b1c1f9b9ace"
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
            Our <span className="text-orange-600">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Professional-grade equipment and materials for all your construction and engineering needs.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=400&h=250`}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">{product.name}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Package className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
