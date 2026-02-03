import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { employments, certifications } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const ExperienceTimeline = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Timeline */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-display font-semibold mb-2">
            Work History Timeline
          </h3>
          <p className="text-muted-foreground">
            My professional journey and previous employment
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          {employments.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 w-5 h-5 rounded-full bg-primary border-4 border-background" />

              <div className="glass-card rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-display font-semibold text-lg">
                      {job.role}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-display font-semibold mb-2">
            Certifications
          </h3>
        </motion.div>

        <div className="space-y-4 mb-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-4"
            >
              <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
              <p className="text-xs text-muted-foreground">
                {cert.issuer} • {cert.date}
              </p>
            </motion.div>
          ))}
        </div>

        <Button className="w-full gap-2">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </div>
  );
};
