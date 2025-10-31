import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PlayCircle, Award, Globe, Users, Zap, ShieldCheck, Lightbulb, ArrowRight } from 'lucide-react'; // Example icons, ensure you have lucide-react installed

const Home = () =>
{
  const jobs = useLoaderData(); // coming from jobsLoader

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-gray-200 font-sans">
      {/* Hero Section - Adapted from Melody */}
      <section
        className="relative h-[90vh] flex items-center justify-center px-6 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1627572718107-b24785461937?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Synthwave city for Melody vibe
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div> {/* Darker gradient overlay */}
        <div className="absolute inset-0 bg-black/60"></div> {/* Uniform dark overlay */}

        {/* Hero Content - Adjusted for Melody's split layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between h-full py-16">
          {/* Left Image (Similar to Melody's artist image) */}
          <div className="hidden md:block w-full md:w-1/2 lg:w-2/5 h-full relative p-4 pr-10">
            <img
              src="https://images.unsplash.com/photo-1610444558557-4ac97652750e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example image for the left side
              alt="Conceptual background"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-90"
              style={{
                boxShadow: '0 0 40px rgba(255, 0, 100, 0.4), 0 0 20px rgba(0, 150, 255, 0.2)'
              }}
            />
            {/* Neon glow effect behind the image */}
            <div className="absolute inset-0 rounded-3xl" style={{
              background: 'linear-gradient(45deg, rgba(255,0,100,0.3) 0%, rgba(0,150,255,0.3) 100%)',
              filter: 'blur(30px)',
              zIndex: -1,
              transform: 'scale(0.98)'
            }}></div>
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left w-full md:w-1/2 lg:w-3/5 p-4 md:pl-10 backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl space-y-6">
            <span className="inline-block text-sm font-semibold text-blue-300 bg-blue-900/40 px-3 py-1 rounded-full border border-blue-700/50">
              <Link to="/about">About Us</Link>
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp tracking-tight text-white leading-tight">
              Crafting Digital <span className="text-pink-500">Experiences</span>.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mb-8 font-light leading-relaxed animate-fadeInUp delay-200 text-gray-300">
              We engineer cutting-edge web platforms that drive innovation, engage
              audiences, and scale with your vision. Partner with us to define
              your digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp delay-400">
              <Link
                to="/products"
                className="relative px-8 py-4 rounded-full font-bold text-lg bg-pink-600 text-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out group overflow-hidden border border-pink-500"
              >
                <span className="absolute inset-0 bg-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center">Explore Solutions <ArrowRight className="ml-2 w-4 h-4" /></span>
              </Link>
              <Link
                to="/contact"
                className="relative px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 text-white bg-white/5 backdrop-filter backdrop-blur-sm shadow-md hover:bg-white/10 transform hover:scale-105 transition duration-300 ease-in-out group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 mr-2" /> Get a Consultation
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>

            {/* Stats section (similar to Melody's bottom left) */}
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-8">
              <div className="flex items-center space-x-2 backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-700/50 rounded-lg px-4 py-2 text-gray-300 text-sm">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>15+ Awards</span>
              </div>
              <div className="flex items-center space-x-2 backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-700/50 rounded-lg px-4 py-2 text-gray-300 text-sm">
                <Globe className="w-5 h-5 text-green-400" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-700/50 rounded-lg px-4 py-2 text-gray-300 text-sm">
                <Users className="w-5 h-5 text-blue-400" />
                <span>200+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Showcase Section */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-50">
            What We <span className="text-pink-500">Offer</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="relative p-8 rounded-xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out group">
              <img
                src="https://images.unsplash.com/photo-1590673431665-2268798cf05b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Web Development"
                className="w-full h-48 object-cover rounded-md mb-6 transition duration-300 group-hover:opacity-80 border border-gray-700/50"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Web Development
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Crafting responsive, high-performance websites and web
                applications tailored to your business needs.
              </p>
              <Link
                to="/products"
                className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition group-hover:translate-x-1"
              >
                Learn More <ArrowRight className="inline-block ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="relative p-8 rounded-xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out group">
              <img
                src="https://images.unsplash.com/photo-1549492167-9c60e036e7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="UI/UX Design"
                className="w-full h-48 object-cover rounded-md mb-6 transition duration-300 group-hover:opacity-80 border border-gray-700/50"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  UI/UX Design
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Designing intuitive and aesthetically pleasing user
                  interfaces for exceptional user experiences.
                </p>
                <Link
                  to="/products"
                  className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="inline-block ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="relative p-8 rounded-xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out group">
              <img
                src="https://images.unsplash.com/photo-1531545514216-77834ea5767b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Digital Marketing"
                className="w-full h-48 object-cover rounded-md mb-6 transition duration-300 group-hover:opacity-80 border border-gray-700/50"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">
                Digital Marketing
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Boosting your online presence with strategic SEO, social
                media, and content marketing.
              </p>
              <Link
                to="/products"
                className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition group-hover:translate-x-1"
              >
                Learn More <ArrowRight className="inline-block ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-[#0A0A0A]">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-50">
          Career <span className="text-pink-500">Opportunities</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs && jobs.length > 0 ? (
            jobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="relative p-8 rounded-xl backdrop-filter backdrop-blur-xl bg-white/5 border border-blue-700/30 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 mb-2 text-lg">
                    <span className="font-semibold text-pink-400">
                      Salary:{" "}
                    </span>
                    ${job.salary}
                  </p>
                  <p className="text-gray-400 mb-6 text-lg">
                    <span className="font-semibold text-blue-400">
                      Location:{" "}
                    </span>
                    {job.location}
                  </p>
                </div>
                <Link
                  to={`/jobs/${job.id}`}
                  className="mt-auto relative bg-pink-600 text-white text-center py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300 text-lg font-semibold shadow-md group overflow-hidden border border-pink-500"
                >
                  <span className="absolute inset-0 bg-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">View Details</span>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3 text-xl py-10">
              No new job openings at the moment. Check back soon!
            </p>
          )}
        </div>
        {jobs && jobs.length > 3 && (
          <div className="text-center mt-12">
            <Link
              to="/jobs"
              className="relative inline-block bg-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 text-lg group overflow-hidden border border-indigo-500"
            >
              <span className="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">View All Jobs <ArrowRight className="inline-block ml-2 w-4 h-4" /></span>
            </Link>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center bg-[#0A0A0A]">
        <h2 className="text-4xl font-bold mb-12 text-gray-50">
          Why <span className="text-blue-400">Choose Us</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="relative p-8 rounded-xl backdrop-filter backdrop-blur-xl bg-white/5 border border-gray-700/50 shadow-lg flex flex-col items-center transform hover:translate-y-[-5px] transition duration-300 group">
            <Zap className="w-16 h-16 text-green-400 mb-4 transition duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-3 text-white">
              Blazing Fast Performance
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our websites are optimized for lightning-fast loading speeds,
              ensuring a seamless user experience.
            </p>
          </div>
          <div className="relative p-8 rounded-xl backdrop-filter backdrop-blur-xl bg-white/5 border border-gray-700/50 shadow-lg flex flex-col items-center transform hover:translate-y-[-5px] transition duration-300 group">
            <ShieldCheck className="w-16 h-16 text-purple-400 mb-4 transition duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-3 text-white">
              Reliable & Secure
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We prioritize data security and stability, providing a robust
              foundation for your digital assets.
            </p>
          </div>
          <div className="relative p-8 rounded-xl backdrop-filter backdrop-blur-xl bg-white/5 border border-gray-700/50 shadow-lg flex flex-col items-center transform hover:translate-y-[-5px] transition duration-300 group">
            <Lightbulb className="w-16 h-16 text-orange-400 mb-4 transition duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-3 text-white">
              Innovative Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Leveraging the latest technologies to deliver unique and effective
              solutions that stand out.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-50">
              Our <span className="text-pink-500">Mission</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At <span className="text-white font-semibold">HireGrid</span>, we are dedicated to transforming ideas
              into powerful digital realities. We believe in crafting web
              applications that are not only visually stunning but also
              exceptionally functional and scalable. Our passion lies in
              creating seamless user experiences and delivering measurable
              results for our clients.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a focus on innovation and client collaboration, we strive to
              exceed expectations and build lasting partnerships in the
              ever-evolving digital landscape.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-lg border border-blue-500"
            >
              Learn More About Us <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative group rounded-3xl overflow-hidden backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1542438408-226e63286395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Modern, tech-focused image
              alt="About Us"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover max-h-[500px] transform group-hover:scale-102 transition duration-500 opacity-90"
            />
            <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-4xl mx-auto backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something <span className="text-pink-500">Amazing</span>?
          </h2>
          <p className="mb-10 text-xl font-light leading-relaxed text-gray-300">
            Let's discuss your project and turn your vision into a remarkable
            digital experience. Our team is eager to bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="relative inline-block bg-gradient-to-r from-pink-600 to-red-600 text-white font-extrabold px-10 py-5 rounded-full shadow-xl transform hover:scale-105 transition duration-300 text-xl group overflow-hidden border border-pink-500"
          >
            <span className="relative z-10">Connect With Us Today! <ArrowRight className="inline-block ml-2 w-5 h-5" /></span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-[#050505] text-gray-500 text-base border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <Link to="/" className="text-3xl font-extrabold text-white mb-4 md:mb-0 hover:text-pink-500 transition tracking-wider">
              HireGrid
            </Link>
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="hover:text-white transition">
                    Jobs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-gray-800 pt-4 mt-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} HireGrid. All rights reserved. |
              <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> |
              <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;