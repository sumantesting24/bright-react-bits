import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { employments } from "@/data/portfolioData";

const Experience = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and previous employment history."
          />

          <ExperienceTimeline />
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
