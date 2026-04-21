import {
  ClockIcon,
  CodeIcon,
  UsersFourIcon,
  CertificateIcon,
} from "@phosphor-icons/react";
import { motion, Variants } from "framer-motion";

const features = [
  { icon: ClockIcon, text: "+40 horas de conteúdo direto ao ponto" },
  { icon: CodeIcon, text: "Projetos com Python + IA desde o módulo 1" },
  { icon: UsersFourIcon, text: "Suporte da comunidade com +20.000 alunos" },
  { icon: CertificateIcon, text: "Certificado reconhecido pelo mercado" },
];

const codeLines = [
  {
    num: 1,
    tokens: [
      { text: "from", cls: "text-[#c678dd]" },
      { text: " flask ", cls: "text-[#abb2bf]" },
      { text: "import", cls: "text-[#c678dd]" },
      { text: " Flask, request, jsonify", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 2,
    tokens: [
      { text: "from", cls: "text-[#c678dd]" },
      { text: " ai_module ", cls: "text-[#abb2bf]" },
      { text: "import", cls: "text-[#c678dd]" },
      { text: " DeepLearningModel", cls: "text-[#abb2bf]" },
    ],
  },
  { num: 3, tokens: [] },
  {
    num: 4,
    tokens: [
      { text: "app = Flask(", cls: "text-[#abb2bf]" },
      { text: "__name__", cls: "text-[#d19a66]" },
      { text: ")", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 5,
    tokens: [
      { text: "model = DeepLearningModel(weights=", cls: "text-[#abb2bf]" },
      { text: '"latest"', cls: "text-[#98c379]" },
      { text: ")", cls: "text-[#abb2bf]" },
    ],
  },
  { num: 6, tokens: [] },
  {
    num: 7,
    tokens: [
      { text: "@app.route(", cls: "text-[#61afef]" },
      { text: '"/api/predict"', cls: "text-[#98c379]" },
      { text: ", methods=[", cls: "text-[#abb2bf]" },
      { text: '"POST"', cls: "text-[#98c379]" },
      { text: "])", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 8,
    tokens: [
      { text: "def", cls: "text-[#c678dd]" },
      { text: " ", cls: "" },
      { text: "get_ai_insight", cls: "text-[#61afef]" },
      { text: "():", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 9,
    tokens: [
      {
        text: "    # Captura a entrada do usuário",
        cls: "text-[#5c6370] italic",
      },
    ],
  },
  {
    num: 10,
    tokens: [
      { text: "    data = request.json.get(", cls: "text-[#abb2bf]" },
      { text: '"query"', cls: "text-[#98c379]" },
      { text: ")", cls: "text-[#abb2bf]" },
    ],
  },
  { num: 11, tokens: [] },
  {
    num: 12,
    tokens: [
      {
        text: "    # Processamento com rede neural",
        cls: "text-[#5c6370] italic",
      },
    ],
  },
  {
    num: 13,
    tokens: [
      { text: "    prediction = model.analyze(data)", cls: "text-[#abb2bf]" },
    ],
  },
  { num: 14, tokens: [] },
  {
    num: 15,
    tokens: [
      { text: "    ", cls: "" },
      { text: "return", cls: "text-[#c678dd]" },
      { text: " jsonify({", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 16,
    tokens: [
      { text: '        "status"', cls: "text-[#98c379]" },
      { text: ": ", cls: "text-[#abb2bf]" },
      { text: '"success"', cls: "text-[#98c379]" },
      { text: ",", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 17,
    tokens: [
      { text: '        "result"', cls: "text-[#98c379]" },
      { text: ": prediction,", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 18,
    tokens: [
      { text: '        "confidence"', cls: "text-[#98c379]" },
      { text: ": ", cls: "text-[#abb2bf]" },
      { text: "0.98", cls: "text-[#d19a66]" },
    ],
  },
  { num: 19, tokens: [{ text: "    })", cls: "text-[#abb2bf]" }] },
  { num: 20, tokens: [] },
  {
    num: 21,
    tokens: [
      { text: "if", cls: "text-[#c678dd]" },
      { text: " __name__ == ", cls: "text-[#abb2bf]" },
      { text: '"__main__"', cls: "text-[#98c379]" },
      { text: ":", cls: "text-[#abb2bf]" },
    ],
  },
  {
    num: 22,
    tokens: [
      { text: "    app.run(debug=", cls: "text-[#abb2bf]" },
      { text: "True", cls: "text-[#c678dd]" },
      { text: ", port=", cls: "text-[#abb2bf]" },
      { text: "5000", cls: "text-[#d19a66]" },
      { text: ")", cls: "text-[#abb2bf]" },
    ],
  },
];

const terminalLines = [
  "$ python3 main.py",
  ' * Serving Flask app "main"',
  " * Debug mode: on",
  " * Running on http://127.0.0.1:5000",
  ">>>",
  ">>> import requests",
  '>>> r = requests.post("http://localhost:5000/api/predict",',
  '...     json={"query": "análise de sentimento"})',
  ">>> r.json()",
  "{'status': 'success', 'result': 'positivo', 'confidence': 0.98}",
  ">>>",
];

const activityIcons = [
  "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7zM13 2v7h7",
  "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z",
  "M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9",
  "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98], // Cubic bezier para suavidade robusta
    },
  },
};

const ActivityIcon = ({ d, size = 22 }: { d: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
      {/* Glow de Fundo Animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, hsla(217,91%,60%,0.08) 50%, transparent 100%)",
        }}
      />

      <div
        className="absolute w-full h-[400px] bottom-0 pointer-events-none z-20"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 80%, #0a0a0a 24.54%, rgba(10, 10, 10, 0.00) 80%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight"
        >
          Aprenda Python do zero e construa projetos reais com IA
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          O curso mais prático do Brasil para quem quer entrar em tecnologia sem
          enrolação.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          variants={itemVariants}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {features.map((f) => (
            <div
              key={f.text}
              className="flex flex-col items-center gap-2 px-4 py-2.5 backdrop-blur-sm text-sm text-muted-foreground"
            >
              <f.icon
                className="text-primary shrink-0"
                size={32}
              />
              <span>{f.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
            Quero começar agora →
          </button>
          <button className="px-8 py-3.5 rounded-lg border border-border bg-background text-foreground font-semibold text-base hover:bg-secondary transition-all">
            Ver o que vou aprender
          </button>
        </motion.div>
      </motion.div>

      {/* VS Code Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 w-full max-w-[1200px] mx-auto rounded-xl border border-border/50 overflow-hidden relative z-10 bg-[#1e1e1e] shadow-[0_0_100px_rgba(59,130,246,0.15)]"
      >
        {/* Title bar */}
        <div className="flex items-center px-4 py-2 bg-[#323233] border-b border-[#191919]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-xs text-[#9d9d9d] font-mono">
            main.py — ai_project
          </span>
        </div>

        <div className="flex h-[700px]">
          {/* Activity bar */}
          <div className="w-12 bg-[#333333] border-r border-[#191919] flex flex-col items-center py-4 gap-6 shrink-0 text-[#858585]">
            {activityIcons.map((d, i) => (
              <ActivityIcon key={i} d={d} size={24} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-56 bg-[#252526] border-r border-[#191919] hidden md:flex flex-col shrink-0">
            <div className="px-4 py-3 text-[11px] font-bold tracking-wider text-[#bbbbbb] uppercase">
              Explorer
            </div>
            <div className="flex flex-col text-sm font-mono px-2 text-[#cccccc]">
              <div className="flex items-center gap-2 px-2 py-1 bg-[#37373d] text-white rounded-sm">
                <span>🐍</span> <span>main.py</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
                <span>🐍</span> <span>ai_module.py</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer opacity-60">
                <span>📄</span> <span>.env</span>
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
            <div className="flex bg-[#252526] text-[#9d9d9d] text-xs font-mono">
              <div className="px-4 py-2 bg-[#1e1e1e] text-white border-t border-primary">
                main.py
              </div>
            </div>

            <div className="flex-1 p-4 font-mono text-sm overflow-auto">
              {codeLines.map((line) => (
                <div key={line.num} className="flex gap-4 group">
                  <span className="w-8 text-right text-[#858585] select-none group-hover:text-[#c5c5c5] transition-colors">
                    {line.num}
                  </span>
                  <pre className="whitespace-pre">
                    {line.tokens.map((t, i) => (
                      <span key={i} className={t.cls}>
                        {t.text}
                      </span>
                    ))}
                  </pre>
                </div>
              ))}
            </div>

            {/* Terminal Mockup */}
            <div className="h-60 border-t border-[#191919] bg-[#1e1e1e]">
              <div className="flex gap-4 px-4 py-1 bg-[#252526] text-[11px] font-bold text-[#858585]">
                <span className="text-[#e7e7e7] border-b border-[#e7e7e7]">
                  TERMINAL
                </span>
                <span>DEBUG CONSOLE</span>
              </div>
              <div className="p-4 font-mono text-xs text-[#cccccc] h-full overflow-y-auto">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.startsWith("$") || line.startsWith(">>>")
                        ? "text-[#4ec9b0]"
                        : ""
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-3 py-1 bg-[#007acc] text-white text-[11px] font-mono">
          <div className="flex items-center gap-4">
            <span>main*</span>
            <span>0 △ 0 ⨂</span>
          </div>
          <div className="flex items-center gap-4">
            <span>UTF-8</span>
            <span>Python 3.10.12</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
