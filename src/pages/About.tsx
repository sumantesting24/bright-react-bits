import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, MapPin, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolioData";

const personalInfo = [
  { icon: Calendar, label: "Age", value: "25" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: GraduationCap, label: "Education", value: "B.Sc. in Computer Science" },
];

const whatIDo = [
  "Java & Spring Boot for powerful backend systems",
  "React & Angular for dynamic and interactive frontends",
  "PostgreSQL & Firebase for database management",
  "RESTful APIs and microservices architecture",
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="About Me"
            subtitle="Welcome to my portfolio! I'm John Doe, an aspiring full stack developer dedicated to building robust and user-friendly web applications."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Personal Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <info.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Background */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-xl mb-4 text-gradient">
                  My Background
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in designing and developing full stack web applications. 
                  I create responsive, secure, and efficient solutions using modern technologies. 
                  I'm continuously learning to stay ahead in backend and frontend development 
                  to deliver high quality, secure, and scalable web applications.
                </p>
              </div>

              {/* What I Do */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-xl mb-4 text-gradient">
                  What I Do
                </h3>
                <ul className="space-y-3">
                  {whatIDo.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Right Column - Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-xl mb-4 text-gradient">
                  Core Technologies
                </h3>
                <p className="text-muted-foreground mb-6">
                  I work with a variety of modern technologies to build full stack 
                  web applications. Here are the core technologies I frequently use:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.slice(0, 6).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-xl mb-4 text-gradient">
                  Why Work With Me
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I bring a unique combination of technical expertise and creative 
                  problem-solving to every project. My commitment to clean code, 
                  attention to detail, and passion for learning new technologies 
                  ensures that I deliver high-quality solutions that exceed expectations.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-card rounded-xl p-6 text-center glow"
              >
                <h3 className="font-display font-semibold text-xl mb-3">
                  Interested in working together?
                </h3>
                <p className="text-muted-foreground mb-4">Let's connect!</p>
                <Button asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
