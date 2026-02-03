import { useState } from "react";
import { motion } from "framer-motion";
import { Code, BarChart3, Briefcase, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projects, skills } from "@/data/portfolioData";
import developerIllustration from "@/assets/developer-illustration.png";

const navLinks = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

const features = [
  {
    icon: Code,
    title: "Projects Showcase",
    description: "Explore my portfolio of web applications",
  },
  {
    icon: BarChart3,
    title: "Skills Dashboard",
    description: "Review my technical skills and expertise",
  },
  {
    icon: Briefcase,
    title: "Work Experience",
    description: "View my professional journey and achievements",
  },
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="font-display font-bold text-lg">John Doe</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
            <Button size="sm" className="btn-shadow">
              Get in Touch
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <p className="text-primary font-medium text-lg mb-4">
                Aspiring Full Stack Developer
              </p>
              <p className="text-muted-foreground mb-6 max-w-md">
                Welcome to my personal portfolio! I'm passionate about developing 
                robust web applications with Java, Spring Boot, React, and Angular.
              </p>
              <div className="flex gap-3">
                <Button className="btn-shadow">View My Work</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src={developerIllustration} 
                alt="Developer illustration" 
                className="w-full max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground">Here are some of the projects I've worked on recently.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <div className="h-36 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-full h-full bg-[linear-gradient(0deg,transparent_24%,hsl(var(--border))_25%,hsl(var(--border))_26%,transparent_27%,transparent_74%,hsl(var(--border))_75%,hsl(var(--border))_76%,transparent_77%),linear-gradient(90deg,transparent_24%,hsl(var(--border))_25%,hsl(var(--border))_26%,transparent_27%,transparent_74%,hsl(var(--border))_75%,hsl(var(--border))_76%,transparent_77%)] bg-[length:40px_40px] opacity-30" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" className="w-full btn-shadow">View Project</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Dashboard Section */}
      <section id="skills" className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Skills Dashboard</h2>
              <p className="text-muted-foreground mb-6">My technical skills and proficiency</p>
              
              {/* Skill Gauge */}
              <div className="glass-card p-6 mb-4">
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="hsl(var(--border))"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${80 * 2.51} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">80</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 flex-wrap">
                      {["Java", "Spring Boot", "React", "TypeScript"].map((skill, i) => (
                        <div key={skill} className="flex items-center gap-1.5 text-sm">
                          <span 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: ["#f89820", "#6db33f", "#61dafb", "#3178c6"][i] }}
                          ></span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="glass-card p-6">
                <div className="space-y-4">
                  {skills.slice(0, 5).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>john@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 234 567 8100</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-display font-bold mb-2">Get in Touch</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Feel free to reach out! Just leave a message & I'll be in contact.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Your Message</label>
                  <Textarea
                    placeholder="Write your message here..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full btn-shadow">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
