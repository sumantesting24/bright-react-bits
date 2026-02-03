import { motion } from "framer-motion";
import { Download, TrendingUp, Award, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, skillActivityData, certifications, skillUsageByProject } from "@/data/portfolioData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#22d3ee", "#a855f7", "#f59e0b", "#10b981", "#ef4444", "#3b82f6"];

const Skills = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Skill Dashboard"
            subtitle="Track my skills and proficiency across various technologies."
          />

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Total Skills", value: skills.length, icon: BarChart3 },
              { label: "Projects Completed", value: "20+", icon: TrendingUp },
              { label: "Certifications", value: certifications.length, icon: Award },
              { label: "Years Experience", value: "5+", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-display font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-xl mb-6">
                Skills Overview
              </h3>
              <div className="space-y-4">
                {skills.slice(0, 8).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skill Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-xl mb-6">
                Skill Distribution
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={skills.slice(0, 6).map((s) => ({
                      name: s.name,
                      value: s.level,
                    }))}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {skills.slice(0, 6).map((skill, index) => (
                      <Cell key={skill.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222 47% 8%)",
                      border: "1px solid hsl(222 47% 18%)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {skills.slice(0, 6).map((skill, index) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 text-xs"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Activity Trends */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 lg:col-span-2"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-xl">
                  Skill Activity Trends
                </h3>
                <div className="flex gap-2">
                  {["1M", "3M", "6M"].map((period) => (
                    <Button key={period} variant="ghost" size="sm">
                      {period}
                    </Button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={skillActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 47% 18%)" />
                  <XAxis dataKey="month" stroke="hsl(215 20% 65%)" fontSize={12} />
                  <YAxis stroke="hsl(215 20% 65%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222 47% 8%)",
                      border: "1px solid hsl(222 47% 18%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Java"
                    stroke="#f89820"
                    strokeWidth={2}
                    dot={{ fill: "#f89820" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="React"
                    stroke="#61dafb"
                    strokeWidth={2}
                    dot={{ fill: "#61dafb" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Angular"
                    stroke="#dd0031"
                    strokeWidth={2}
                    dot={{ fill: "#dd0031" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Skill Usage by Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-xl mb-6">
                Skill Usage Across Projects
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={skillUsageByProject} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 47% 18%)" />
                  <XAxis type="number" stroke="hsl(215 20% 65%)" fontSize={12} />
                  <YAxis
                    type="category"
                    dataKey="project"
                    stroke="hsl(215 20% 65%)"
                    fontSize={11}
                    width={120}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222 47% 8%)",
                      border: "1px solid hsl(222 47% 18%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="skills" fill="hsl(187 92% 55%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-xl mb-6">
                Certifications & Learning
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                  >
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
