import { Link } from "react-router-dom";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";

function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-brand-primary/30 selection:text-white">
      
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-border-primary backdrop-blur-xl bg-bg-primary/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white shadow-md">
              <Zap size={20} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              CostLess <span className="text-gradient">AI</span>
            </h1>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-text-secondary">
            <a href="#features" className="hover:text-text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="hover:text-text-primary transition-colors duration-200">
              Pricing
            </a>
            <a href="#about" className="hover:text-text-primary transition-colors duration-200">
              About
            </a>
          </nav>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="btn-secondary px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary border-border-primary">
              Login
            </Link>
            <Link to="/login" className="btn-primary px-5 py-2.5 text-sm">
              Get Started
            </Link>
          </div>

        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        
        {/* BLUR BACKGROUND AMBIENCE (Using Theme Colors) */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-primary bg-bg-surface backdrop-blur-sm mb-8 animate-fade-in">
              <Sparkles size={14} className="text-brand-accent" />
              <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
                AI Prompt Optimization Platform
              </span>
            </div>

            {/* Main Catchphrase */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.15] tracking-tight text-text-primary mb-8">
              Reduce AI Costs With
              <span className="block text-gradient mt-2">
                Smart Prompt Optimization
              </span>
            </h1>

            {/* Explainer Subtext */}
            <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              CostLess AI automatically condenses semantic layouts to minimize heavy token overhead while maintaining robust output quality.
            </p>

            {/* CTAs pointing straight to /login */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
                Start Saving Tokens
              </Link>
              <button className="btn-secondary text-base px-8 py-3.5 border-border-primary text-text-primary w-full sm:w-auto">
                Watch Demo
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MARKETING STATS ================= */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-panel p-8 text-center bg-bg-surface border-border-primary">
              <h2 className="text-5xl font-extrabold text-gradient mb-3">70%</h2>
              <p className="text-sm font-medium text-text-muted">Average Token Reduction</p>
            </div>

            <div className="glass-panel p-8 text-center bg-bg-surface border-border-primary">
              <h2 className="text-5xl font-extrabold text-gradient mb-3">10x</h2>
              <p className="text-sm font-medium text-text-muted">Faster Context Structuring</p>
            </div>

            <div className="glass-panel p-8 text-center bg-bg-surface border-border-primary">
              <h2 className="text-5xl font-extrabold text-gradient mb-3">AI</h2>
              <p className="text-sm font-medium text-text-muted">Intelligent Content Trimming</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section id="features" className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="section-title text-text-primary">
              Everything You Need For 
              <span className="text-gradient"> AI Optimization</span>
            </h2>
            <p className="section-subtitle text-text-muted">
              Built systematically for developers, high-scale startups, and enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="glass-panel p-8 bg-bg-surface border-border-primary hover:border-brand-primary/40 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                <Zap className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-3">
                Prompt Compression
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Automatically isolates and eliminates fluff characters and system tokens while ensuring accuracy remains completely identical.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-8 bg-bg-surface border-border-primary hover:border-brand-accent/40 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 border border-brand-accent/20 group-hover:bg-brand-accent/20 transition-colors">
                <Sparkles className="text-brand-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-3">
                Semantic Tuning
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Transforms generic structures into machine-optimized contextual templates, accelerating total inference time cycles.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-8 bg-bg-surface border-border-primary hover:border-emerald-500/40 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <ShieldCheck className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-3">
                Secure Middleware
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Enterprise-compliant layer built specifically to process and parse critical requests without persisting internal data inputs.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;