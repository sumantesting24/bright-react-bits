import { motion } from "framer-motion";
import { clients } from "@/data/portfolioData";

export const ClientCarousel = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-display font-semibold mb-2">
          Clients Showcase
        </h3>
        <p className="text-muted-foreground">
          Brands and clients I've had the pleasure of working with
        </p>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 w-40 h-20 glass-card rounded-xl flex items-center justify-center"
            >
              <span className="font-display font-semibold text-lg text-muted-foreground">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
