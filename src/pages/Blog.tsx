
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Contractor for Your Home Renovation",
      excerpt: "Finding the perfect contractor can make or break your renovation project. Learn the essential questions to ask and red flags to watch for.",
      category: "Home Renovation",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Top 5 Kitchen Trends for 2025",
      excerpt: "Discover the latest kitchen design trends that are taking the industry by storm this year, from sustainable materials to smart appliances.",
      category: "Interior Design",
      date: "April 2, 2025",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "DIY vs. Professional Plumbing: When to Call the Experts",
      excerpt: "While some plumbing tasks are suitable for DIY enthusiasts, others require professional expertise. Learn when to tackle it yourself and when to call in the pros.",
      category: "Plumbing",
      date: "March 25, 2025",
      image: "https://images.unsplash.com/photo-1558618666-3a7917bdf35f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Energy-Efficient Home Upgrades That Save You Money",
      excerpt: "Invest in these energy-efficient upgrades to reduce your carbon footprint and save on utility bills in the long run.",
      category: "Sustainability",
      date: "March 18, 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Understanding Building Permits: A Homeowner's Guide",
      excerpt: "Navigating the world of building permits can be confusing. This comprehensive guide breaks down what you need to know before starting your project.",
      category: "Legal",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Small Space Solutions: Making the Most of Limited Square Footage",
      excerpt: "Living in a small home or apartment? Learn clever design tricks and storage solutions to maximize your space without sacrificing style.",
      category: "Interior Design",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    "All Categories",
    "Home Renovation",
    "Interior Design",
    "Plumbing",
    "Electrical",
    "Sustainability",
    "Legal",
    "DIY"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-buildease-black text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Insights, tips, and inspiration for your home improvement projects
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 px-5 pr-12 rounded-full border-none focus:ring-2 focus:ring-buildease-yellow"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2 bg-buildease-yellow text-buildease-black hover:bg-amber-400">
                <Search size={20} />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-start gap-4 overflow-x-auto pb-4 scrollbar-thin">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  index === 0 
                    ? "bg-buildease-yellow text-buildease-black" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-buildease-yellow">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button asChild variant="link" className="p-0 text-buildease-yellow hover:text-amber-600">
                    <Link to={`/blog/${post.id}`}>Read More →</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Get the latest articles, tips, and inspiration delivered directly to your inbox.
          </p>
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-3 px-4 rounded-lg"
            />
            <Button className="btn-primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
