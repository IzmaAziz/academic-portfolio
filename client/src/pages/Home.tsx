import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Linkedin, 
  Mail, 
  Award, 
  Briefcase, 
  BookOpen, 
  Code2, 
  GraduationCap,
  Lightbulb,
  Mic,
  Beaker,
  Zap,
  MessageSquare,
  BarChart3,
  Trophy,
  Brain,
  Sparkles,
  Link2,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";

// Hero Stats Data
const heroStatsData = [
  { 
    label: "of 152 graduates", 
    value: "3rd", 
    badge: "Bronze Medalist",
    badgeColor: "text-amber-600",
    href: "#education",
    bgColor: "bg-amber-100",
    icon: "medal",
  },
  { 
    label: "Accuracy", 
    value: "80%", 
    badge: "NLP, T5 Transformer",
    badgeColor: "text-emerald-600",
    href: "#research",
    bgColor: "bg-emerald-100",
    icon: "chart",
  },
  { 
    label: "Years as AI Engineer", 
    value: "2+", 
    href: "#experience",
    bgColor: "bg-blue-100",
    icon: "briefcase",
  },
  { 
    label: "Certifications", 
    value: "5+", 
    href: "#certifications",
    bgColor: "bg-primary/10",
    icon: "award",
  },
];

// Research Interests
const researchInterests = [
  {
    icon: "brain",
    iconColor: "text-pink-500",
    title: "Natural Language Processing",
    description: "Semantic parsing, text-to-SQL, structured generation from natural language",
  },
  {
    icon: "sparkles",
    iconColor: "text-amber-500",
    title: "Machine Learning",
    description: "Deep learning, transfer learning, neural network architectures",
  },
  {
    icon: "link",
    iconColor: "text-violet-500",
    title: "AI Systems",
    description: "Agentic architectures, multi-agent coordination, tool use and reasoning",
  },
  {
    icon: "shield",
    iconColor: "text-blue-500",
    title: "Trustworthy AI",
    description: "AI safety, alignment, robustness, and interpretability",
  },
];

// Awards Data
const awardsData = [
  { title: "DOT Awards (4x)", issuer: "Data Science Dojo", year: "2023-2025", description: "Quarterly recognition for Delivery Ownership and Trust", emoji: "🏆" },
  { title: "Giant Leap Award", issuer: "Data Science Dojo", year: "2024", description: "Exceptional innovation in AI product development", emoji: "🚀" },
  { title: "Bronze Medal", issuer: "NED University", year: "2023", description: "Ranked 3rd among 152 graduates in Computer Systems Engineering", emoji: "🥉" },
  { title: "Runner-Up", issuer: "FAST DevDay", year: "2022", description: "Genome prediction hackathon competition", emoji: "🥈" },
];

// Publications Data
const webinarsData = [
  {
    title: "Master Agentic AI: Event-Driven LlamaIndex Workflows",
    year: "2025",
    link: "https://datasciencedojo.com/tutorial/agentic-ai-llamaindex-workflows/",
  },
  {
    title: "Building Simple and Efficient Chatbots Step-by-Step",
    year: "2024",
    link: "https://datasciencedojo.com/tutorial/building-simple-and-efficient-chatbots-step-by-step/",
  },
];

const articlesData = [
  {
    title: "Dynamic Few-Shot Prompting for Digital Content",
    link: "https://datasciencedojo.com/blog/dynamic-few-shot-prompting/",
  },
  {
    title: "RAG in LLM – Elevate Your Large Language Models",
    link: "https://datasciencedojo.com/blog/rag-in-llm-approach/",
  },
  {
    title: "Evolution of GPT: From 1 to 4 Trillion",
    link: "https://datasciencedojo.com/blog/evolution-of-gpt-series/",
  },
];

// Projects Data
const projectsData = [
  {
    title: "ReAct Agent Workflow",
    subtitle: "Event-driven AI agent",
    description: "Event-driven ReAct agent implementing reasoning and action patterns with modular tool integration, stateful conversation memory, and graceful error recovery for production deployment.",
    tech: ["LlamaIndex", "Azure OpenAI"],
    link: "https://github.com/IzmaAziz/ReAct-Agent-Workflow-Llama-Index",
    iconColor: "bg-blue-500",
  },
  {
    title: "RAG Chatbot",
    subtitle: "Retrieval-augmented conversational AI",
    description: "RAG-based chatbot grounding LLM responses in uploaded documents using dense embeddings and hybrid retrieval with conversation memory and source attribution.",
    tech: ["LangChain", "ChromaDB"],
    link: "https://github.com/IzmaAziz/Building-Simple-and-Efficient-Chatbots-Demo",
    iconColor: "bg-emerald-500",
  },
  {
    title: "Genome Prediction",
    subtitle: null,
    badge: "Runner-Up",
    description: "ML pipeline for genomic sequence classification using feature engineering (k-mer frequencies, GC content) and ensemble methods. Runner-up at FAST DevDay 2022 hackathon.",
    tech: ["Machine Learning", "Python"],
    link: "https://github.com/IzmaAziz/DevDay-Competition-Submission-Runner-Up",
    iconColor: "bg-amber-500",
  },
  {
    title: "PSO Algorithm",
    subtitle: "Optimization technique",
    description: "Vectorized implementation of PSO metaheuristic with configurable parameters, benchmarked on standard test functions (Rastrigin, Rosenbrock, Sphere) with convergence visualization.",
    tech: ["Optimization", "Python"],
    link: "https://github.com/IzmaAziz/Partical-Swarm-Optimization-Algorithm",
    iconColor: "bg-violet-500",
  },
];

// Certifications Data
const certificationsData = [
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/IzmaAziz-0126/CB533613BA2B0C5B?sharingId" },
  { name: "Azure Administrator Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/IzmaAziz-0126/5AC055D0D7A20FBB?sharingId" },
  { name: "Azure AI Engineer Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/IzmaAziz-0126/F46BCFEC40C00DA4?sharingId" },
  { name: "Azure Data Engineer Associate", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/IzmaAziz-0126/DE327E2B45D8B967?sharingId" },
  { name: "Azure Fundamentals", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/IzmaAziz-0126/D3DA20970920CA55?sharingId" },
  { name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", link: "https://coursera.org/verify/W8YJ8S7WJ33K" },
];

// Skills Data
const skillsData = {
  "AI & Machine Learning": ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LlamaIndex", "OpenCV"],
  "Backend & Architecture": ["Python", "FastAPI", "Django", "REST APIs", "Microservices", "Docker", "CI/CD"],
  "Infrastructure & Data": ["SQL", "PostgreSQL", "ChromaDB", "FAISS", "Azure", "Database Design", "Vector Stores"],
  "Advanced Gen-AI Concepts": ["A2A Protocols", "MCPs", "Deep Agents", "Agentic RAG", "Hybrid Search", "Semantic Reranking"],
  "Cloud & DevOps": ["Microsoft Azure", "Infrastructure as Code", "Monitoring & Logging", "Git"],
  "Specialized Domains": ["NLP", "Transfer Learning", "Production AI Systems", "System Design"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl [font-family:Poppins] font-bold text-primary">IA</div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition">About</a>
            <a href="#research" className="text-sm font-medium hover:text-primary transition">Research</a>
            <a href="#education" className="text-sm font-medium hover:text-primary transition">Education</a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition">Experience</a>
            <a href="#publications" className="text-sm font-medium hover:text-primary transition">Publications</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-primary font-medium">AI Researcher & Engineer</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl [font-family:Poppins] font-bold text-foreground leading-tight">
                Hi, I'm Izma Aziz
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Software Engineer at Data Science Dojo, building production-ready Multi-Agentic Systems and Generative AI Features. Bronze Medalist from NED University, seeking graduate opportunities to advance my research in AI and Computer Systems.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://linkedin.com/in/izma-aziz-31a922224" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:izma.aziz02@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Stats Cards Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {heroStatsData.map((stat, idx) => (
                <a 
                  key={idx}
                  href={stat.href}
                  className="block"
                >
                  <Card className="p-4 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      {stat.icon === "medal" && <Award className="w-5 h-5 text-amber-600" />}
                      {stat.icon === "chart" && <BarChart3 className="w-5 h-5 text-emerald-600" />}
                      {stat.icon === "briefcase" && <Briefcase className="w-5 h-5 text-blue-600" />}
                      {stat.icon === "award" && <Award className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    {stat.badge && (
                      <div className={`text-xs font-medium mt-1 ${stat.badgeColor}`}>{stat.badge}</div>
                    )}
                  </Card>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              Experience
            </h2>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Experience Card */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <Card className="p-8 bg-white">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">Software Engineer — Generative AI</h3>
                      <Badge className="bg-blue-100 text-blue-700 border-0">Current</Badge>
                    </div>
                    <p className="text-muted-foreground">Data Science Dojo • Sep 2023 – Present</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Lead core AI team, driving architecture decisions and mentoring developers while maintaining hands-on development",
                    "Architect and build end-to-end AI systems from research to production, spanning AI feature development, infrastructure design, API development, and deployment pipelines",
                    "Design and implement multi-agent systems using MCP/A2A protocols, with deep understanding of agent orchestration, tool use, and autonomous decision-making",
                    "Build production RAG pipelines with hybrid retrieval and semantic reranking, optimizing for accuracy, latency, and scale",
                    "Rapidly acquire and apply emerging AI technologies, consistently delivering complex features ahead of schedule",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Core Skills Developed */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Multi-Agent Systems",
                    "RAG Pipelines",
                    "LLM Engineering",
                    "System Design",
                    "Technical Leadership",
                    "Research to Production",
                  ].map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a href="#awards" className="text-sm text-primary hover:text-primary/80 font-medium">View Awards →</a>
                </div>
              </Card>
            </motion.div>
            
            {/* Side Stats */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              <Card className="p-6">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-muted-foreground text-sm">Years of Experience</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-muted-foreground text-sm">Team Members Led</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-muted-foreground text-sm">AI Solutions Delivered</div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-600" />
              </div>
              Education
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border border-amber-100">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">BE Computer Systems</h3>
                    <p className="text-muted-foreground mb-1">NED University of Engineering & Technology</p>
                    <p className="text-sm text-muted-foreground mb-4">2019 – 2023 • Karachi, Pakistan</p>
                    
                    <div className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3 w-fit mb-4">
                      <span className="text-2xl">🥉</span>
                      <div>
                        <div className="font-bold text-amber-800">Bronze Medalist</div>
                        <div className="text-sm text-muted-foreground">Ranked 3rd among 152 students</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Thesis</p>
                      <p className="text-foreground text-sm font-medium">Smart SQL Query Generator: Neural Text-to-SQL with Data Augmentation</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {["Artificial Intelligence", "Machine Learning", "Deep Learning", "Data Structures & Algorithms", "Database Systems", "Operating Systems","Distributed Computing","Object-Oriented Programming","Computer Networks"].map((course, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/80">{course}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-block bg-white rounded-2xl p-6 shadow-sm">
                      <div className="text-5xl font-bold text-foreground">3.96</div>
                      <div className="text-sm text-muted-foreground mt-1">CGPA / 4.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
              </div>
              Research
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Research Card */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white mb-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-0 mb-4">Undergraduate Thesis</Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Smart SQL Query Generator</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      Developed a fine-tuned T5 transformer model for translating natural language questions to executable SQL queries. Introduced a novel synonym-based data augmentation strategy and schema-aware positional embeddings to improve generalization. Achieved 80% exact-match precision on the Spider benchmark, a 39% relative improvement over baseline, with strong transfer performance on WikiSQL.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["T5 Transformer", "Transfer Learning", "Semantic Parsing", "NLP"].map((tech, i) => (
                        <Badge key={i} className="bg-white/10 border-0">{tech}</Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm text-slate-400">
                      <span className="text-slate-300">Advisor:</span> Dr. Shahab Tahzeeb • NED University • 2023
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 stat-ring p-2">
                        <div className="w-full h-full bg-slate-800 rounded-full flex flex-col items-center justify-center">
                          <span className="text-4xl font-bold text-white">80%</span>
                          <span className="text-xs text-slate-400">Precision</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                        +39%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Research Interests */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-muted-foreground mb-6 text-center">Research Interests</p>
              <div className="grid md:grid-cols-2 gap-4">
                {researchInterests.map((interest, idx) => {
                  const IconComponent = {
                    brain: Brain,
                    sparkles: Sparkles,
                    link: Link2,
                    shield: Shield,
                  }[interest.icon];
                  return (
                    <Card key={idx} className="p-5 bg-white border-slate-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`${interest.iconColor}`}>
                          {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                        <h4 className="font-semibold text-foreground">{interest.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-amber-600" />
              </div>
              Honors & Awards
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {awardsData.map((award, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="text-3xl mb-3">{award.emoji}</div>
                  <h3 className="font-bold text-foreground mb-1">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{award.issuer}, {award.year}</p>
                  <p className="text-xs text-muted-foreground">{award.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-purple-600" />
              </div>
              Publications & Presentations
            </h2>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Webinars */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-white h-full">
                <h3 className="text-sm font-medium text-purple-600 mb-4">Invited Talks</h3>
                <div className="space-y-4">
                  {webinarsData.map((webinar, idx) => (
                    <a 
                      key={idx}
                      href={webinar.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{webinar.title}</div>
                      <div className="text-sm text-muted-foreground">{webinar.year}</div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
            
            {/* Articles */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-white h-full">
                <h3 className="text-sm font-medium text-purple-600 mb-4">Technical Articles</h3>
                <div className="space-y-4">
                  {articlesData.map((article, idx) => (
                    <a 
                      key={idx}
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{article.title}</div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-indigo-600" />
              </div>
              Projects
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectsData.map((project, idx) => (
              <motion.a 
                key={idx} 
                variants={itemVariants}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${project.iconColor} rounded-lg flex items-center justify-center`}>
                      {idx === 0 && <Zap className="w-5 h-5 text-white" />}
                      {idx === 1 && <MessageSquare className="w-5 h-5 text-white" />}
                      {idx === 2 && <Beaker className="w-5 h-5 text-white" />}
                      {idx === 3 && <BarChart3 className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                        {project.subtitle && <p className="text-sm text-muted-foreground">{project.subtitle}</p>}
                      </div>
                      {project.badge && (
                        <Badge className="bg-amber-100 text-amber-700 border-0">{project.badge}</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-white">{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              Certifications
            </h2>
            <p className="text-muted-foreground">Professional certifications and credentials</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certificationsData.map((cert, idx) => (
                    <a 
                      key={idx} 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group hover:bg-slate-50 p-2 -m-2 rounded-lg transition-colors"
                    >
                      <span className="text-accent mt-1">✓</span>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                          {cert.name}
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2">Technical Skills</h2>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(skillsData).map(([category, skills], idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 h-full">
                  <h3 className="text-lg [font-family:Poppins] font-bold text-foreground mb-4">{category}</h3>
                  <div className="space-y-2">
                    {skills.map((skill, i) => (
                      <p key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {skill}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl [font-family:Poppins] font-bold mb-4">Let's Connect</h2>
            <p className="text-lg mb-8 opacity-90">Seeking graduate opportunities in Computer Science and Artificial Intelligence.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild className="bg-white text-primary hover:bg-slate-100">
                <a href="mailto:izma.aziz02@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                <a href="https://linkedin.com/in/izma-aziz-31a922224" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <p className="text-slate-400">© 2026 Izma Aziz. All rights reserved.</p>
          <p className="text-slate-500 text-sm mt-2">AI Researcher & Engineer • NED University Bronze Medalist</p>
        </div>
      </footer>
    </div>
  );
}
