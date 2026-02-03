import { motion } from "framer-motion";
import { Activity, CheckCircle, XCircle, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { apiUsageData } from "@/data/portfolioData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const stats = [
  { label: "Total Requests", value: "23,540", change: "+5.8%", icon: Activity },
  { label: "Active Users", value: "1,824", change: "+3.2%", icon: TrendingUp },
  { label: "Success Rate", value: "98.7%", change: "+0.3%", icon: CheckCircle },
  { label: "Errors", value: "73", change: "-3.8%", icon: XCircle },
];

const responseTimeData = [
  { time: "Mar 25", value: 180 },
  { time: "Mar 26", value: 220 },
  { time: "Mar 27", value: 195 },
  { time: "Mar 28", value: 240 },
  { time: "Mar 29", value: 210 },
  { time: "Mar 30", value: 185 },
  { time: "Mar 31", value: 200 },
];

const requestBreakdown = [
  { name: "Auth Requests", value: 45.4, color: "#22d3ee" },
  { name: "GET Requests", value: 25.6, color: "#a855f7" },
  { name: "POST Requests", value: 16.2, color: "#f59e0b" },
  { name: "PUT Requests", value: 7.5, color: "#10b981" },
  { name: "DELETE Requests", value: 3.1, color: "#ef4444" },
];

const topEndpoints = [
  { endpoint: "GET /projects", requests: 3006 },
  { endpoint: "GET /skills", requests: 2500 },
  { endpoint: "POST /auth/login", requests: 1824 },
  { endpoint: "GET /clients", requests: 1500 },
  { endpoint: "GET /stats", requests: 1200 },
];

const recentErrors = [
  { timestamp: "Today 3:17 PM", endpoint: "/api/auth/login", code: "401 Unauthorized", message: "Invalid credentials" },
  { timestamp: "Today 2:53 PM", endpoint: "/api/projects", code: "500 Server Error", message: "Internal error" },
  { timestamp: "Today 1:54 PM", endpoint: "/api/clients", code: "404 Not Found", message: "Client ID not found" },
];

const APIAnalytics = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="API Analytics"
            subtitle="Monitor API usage, performance, and statistics across my platform."
          />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span
                    className={`text-xs font-medium ${
                      stat.change.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-display font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* API Usage Trends */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6 lg:col-span-2"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-xl">
                  API Usage Trends
                </h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Last 7 Days</Button>
                  <Button variant="outline" size="sm">Last 30 Days</Button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={responseTimeData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(187 92% 55%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(187 92% 55%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 47% 18%)" />
                  <XAxis dataKey="time" stroke="hsl(215 20% 65%)" fontSize={12} />
                  <YAxis stroke="hsl(215 20% 65%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222 47% 8%)",
                      border: "1px solid hsl(222 47% 18%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(187 92% 55%)"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Request Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-xl mb-6">
                Request Breakdown
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={requestBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {requestBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222 47% 8%)",
                      border: "1px solid hsl(222 47% 18%)",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`${value}%`, ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {requestBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      {item.name}
                    </span>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Endpoints */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-xl mb-6">
                Top Endpoints
              </h3>
              <div className="space-y-4">
                {topEndpoints.map((endpoint, index) => (
                  <div key={endpoint.endpoint} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <code className="text-sm">{endpoint.endpoint}</code>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {endpoint.requests.toLocaleString()} req
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Errors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 lg:col-span-2"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-xl">
                  Recent Errors
                </h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-xs text-muted-foreground font-medium pb-3">
                        Timestamp
                      </th>
                      <th className="text-left text-xs text-muted-foreground font-medium pb-3">
                        Endpoint
                      </th>
                      <th className="text-left text-xs text-muted-foreground font-medium pb-3">
                        Error Code
                      </th>
                      <th className="text-left text-xs text-muted-foreground font-medium pb-3">
                        Message
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentErrors.map((error, index) => (
                      <tr key={index} className="border-b border-border/50 last:border-0">
                        <td className="py-3 text-sm text-muted-foreground">
                          {error.timestamp}
                        </td>
                        <td className="py-3">
                          <code className="text-sm">{error.endpoint}</code>
                        </td>
                        <td className="py-3">
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-destructive/10 text-destructive">
                            <AlertTriangle className="h-3 w-3" />
                            {error.code}
                          </span>
                        </td>
                        <td className="py-3 text-sm text-muted-foreground">
                          {error.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APIAnalytics;
