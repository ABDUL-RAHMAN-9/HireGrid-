import React from 'react';
import { Lightbulb, Users, Handshake, Code, BrainCircuit, HeartHandshake } from 'lucide-react'; // More Lucide icons for features

const About = () =>
{
  const team = [
    { id: 1, name: 'Roman S.', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Sophia L.', role: 'Lead UI/UX Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Ethan M.', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1544723795-3fb6469e380e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Liam P.', role: 'Senior Frontend Developer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Olivia R.', role: 'Marketing & Partnerships', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Mason T.', role: 'Cloud & DevOps Architect', image: 'https://images.unsplash.com/photo-1559869275-c70e34c26359?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // Added two new team members for a total of 8
    { id: 7, name: 'Ava C.', role: 'Data Scientist', image: 'https://images.unsplash.com/photo-1519085360753-af0f3890fdb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, name: 'Noah K.', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1581093589139-509503460492?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Continuously exploring new technologies and creative solutions." },
    { icon: Handshake, title: "Collaboration", description: "Working closely with clients to bring their vision to life." },
    { icon: Code, title: "Excellence", description: "Committing to high-quality code and robust, scalable applications." },
    { icon: BrainCircuit, title: "Integrity", description: "Operating with transparency and honesty in all our engagements." },
    { icon: HeartHandshake, title: "User Focus", description: "Designing intuitive and delightful experiences for end-users." },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-sans py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero-like Intro Section - "Our Story" */}
      <section className="relative text-center mb-20 py-20 px-6 overflow-hidden rounded-3xl"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517035172288-0624a732289c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Modern office/collaboration scene
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: '0 0 50px rgba(0, 150, 255, 0.2), 0 0 20px rgba(255, 0, 100, 0.2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent rounded-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fadeInUp">
            Crafting Digital Futures, <span className="text-pink-500">Together</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeInUp delay-100">
            At HireGrid, we are more than just a team; we are innovators, problem-solvers, and partners dedicated to transforming visionary ideas into powerful digital realities.
          </p>
          <div className="flex justify-center animate-fadeInUp delay-200">
            <a href="#mission" className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
              Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section id="mission" className="max-w-7xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group rounded-3xl overflow-hidden backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Strategic planning image
            alt="Our Mission"
            className="rounded-2xl w-full h-auto object-cover max-h-[400px] transform group-hover:scale-102 transition duration-500 opacity-90"
          />
          <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>
        </div>
        <div className="text-center md:text-left backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-gray-50">
            Our Core <span className="text-pink-500">Mission</span>
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
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Our Guiding <span className="text-blue-500">Values</span>
        </h2>
        {/* MODIFIED: Added 'justify-items-center' to the grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg
                         flex flex-col items-center transform hover:translate-y-[-5px] transition duration-300 group
                         w-full max-w-sm" // MODIFIED: Added 'w-full max-w-sm' for controlled width and better centering
            >
              <value.icon className="w-16 h-16 text-pink-500 mb-4 transition duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Meet Our Amazing <span className="text-pink-500">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="relative bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden p-6
                         transform hover:scale-[1.03] transition-all duration-300 ease-in-out
                         group backdrop-filter backdrop-blur-md flex flex-col items-center text-center"
            >
              {/* Profile Image with subtle glow */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-transparent group-hover:border-blue-500 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full" style={{
                  boxShadow: '0 0 20px rgba(0,150,255,0.3) inset, 0 0 10px rgba(255,0,100,0.3) inset',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  transform: 'scale(1.1)',
                  zIndex: 1
                }}></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h3>
              <p className="text-gray-400 text-lg group-hover:text-pink-400 transition-colors">{member.role}</p>

              {/* Social Icons (Conceptual) */}
              <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <Link to="#" className="text-gray-500 hover:text-blue-400"><Github className="w-5 h-5" /></Link>
                <Link to="#" className="text-gray-500 hover:text-blue-400"><Linkedin className="w-5 h-5" /></Link>
                <Link to="#" className="text-gray-500 hover:text-blue-400"><Twitter className="w-5 h-5" /></Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision/Future Section (Optional, but adds depth) */}
      <section className="max-w-7xl mx-auto text-center backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-6">
          Our <span className="text-blue-500">Vision</span> for Tomorrow
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          We envision a future where innovative technology seamlessly integrates with human potential,
          creating a more connected, efficient, and inspiring digital world. HireGrid aims to be at
          the forefront of this transformation, empowering businesses and individuals alike.
        </p>
        <button className="inline-block bg-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105">
          Join Our Journey
        </button>
      </section>
    </div>
  );
};

export default About;