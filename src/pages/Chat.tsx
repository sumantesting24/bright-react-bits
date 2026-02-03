import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, MessageCircle, X, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hi! I'm John's AI assistant. Ask me anything about my portfolio, projects, or skills. I'm here to help!",
    sender: "bot",
    timestamp: new Date(),
  },
];

const botResponses: Record<string, string> = {
  default: "That's a great question! John specializes in full-stack development using Java, Spring Boot, React, and Angular. Would you like to know more about a specific project or skill?",
  portfolio: "The Portfolio Management Platform is a full-stack application designed to help users manage and showcase their portfolios effectively. It's built using Java Spring Boot for the backend and React with TypeScript for the frontend.",
  skills: "John's core skills include Java (95%), Spring Boot (90%), React (85%), Angular (80%), TypeScript (88%), and PostgreSQL (82%). He's continuously learning and improving!",
  experience: "John has over 5 years of experience in software development. He's currently a Senior Software Engineer at TechCorp, and previously worked at WebSolutions and InnovateTech.",
  contact: "You can reach John via email at johndoe@example.com or through the Contact page. He typically responds within 24 hours!",
  project: "John has worked on various projects including Portfolio Management Platform, Client Collaboration App, Finance Tracker, and more. Each project demonstrates his full-stack capabilities.",
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("portfolio") || lowerMessage.includes("management")) {
      return botResponses.portfolio;
    }
    if (lowerMessage.includes("skill")) {
      return botResponses.skills;
    }
    if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
      return botResponses.experience;
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email")) {
      return botResponses.contact;
    }
    if (lowerMessage.includes("project")) {
      return botResponses.project;
    }
    
    return botResponses.default;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot thinking
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(input),
      sender: "bot",
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Chat Assistant"
            subtitle="Ask me anything about my portfolio, projects, or skills. I'm here to help!"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Chat Assistant (AI)</h3>
                  <p className="text-xs text-muted-foreground">
                    {isTyping ? "typing..." : "Online"}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex items-start gap-3 ${
                        message.sender === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full flex-shrink-0 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`max-w-[80%] p-4 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground rounded-tr-none"
                            : "bg-muted rounded-tl-none"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-2 ${
                            message.sender === "user"
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 rounded-full bg-muted text-muted-foreground">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-muted p-4 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -5, 0],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                            className="w-2 h-2 rounded-full bg-muted-foreground"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                    className="bg-muted/50"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Chat;
