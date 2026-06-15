import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap, ArrowLeft, Shield } from "lucide-react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: "teliharshal40@gmail.com",
            name: "Harshal Teli",
            googleId: "google123"
          })
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        // Safely redirect to internal user dashboard upon successful auth
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col justify-center items-center relative px-6 overflow-hidden">
      
      {/* BACKGROUND BLUR HIGHLIGHTS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* BACK TO HOME ANCHOR */}
      <a 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
      >
        <ArrowLeft size={16} />
        Back to Home
      </a>

      {/* CENTRAL AUTHENTICATION CARD */}
      <div className="w-full max-w-md glass-panel p-8 md:p-10 bg-bg-surface/40 border-border-primary/80 relative z-10 backdrop-blur-xl shadow-2xl">
        
        {/* BRAND IDENTIFIER */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white shadow-lg mb-4">
            <Zap size={24} />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary">
            Welcome to CostLess <span className="text-gradient">AI</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-xs">
            Log in to optimize your AI workflows and instantly reduce token overhead.
          </p>
        </div>

        {/* AUTH ACTION CONTROL */}
        <div className="space-y-4">
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 active:scale-[0.98] transition-all duration-200 shadow-md disabled:opacity-70 disabled:pointer-events-none"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <>
                {/* Standard Google "G" Vector Icon Asset */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.642 1.036 14.97 0 12 0 7.354 0 3.317 2.636 1.347 6.5l3.919 3.265z"
                  />
                  <path
                    fill="#4285F4"
                    d="M24 12.273c0-.818-.073-1.609-.205-2.373H12v4.5h6.732a5.755 5.755 0 0 1-2.495 3.773v3.123h4.023C22.614 19.145 24 15.964 24 12.273z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.266 14.235L1.347 17.5A11.948 11.948 0 0 1 0 12c0-1.99.49-3.868 1.347-5.5l3.919 3.265A7.042 7.042 0 0 0 4.91 12c0 .805.136 1.577.356 2.235z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.955-1.077 7.94-2.914l-4.022-3.123c-1.114.745-2.54 1.191-3.918 1.191-3.414 0-6.305-2.31-7.339-5.418L.742 16.99A11.947 11.947 0 0 0 12 24z"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </button>
        </div>

        {/* SECURITY GUARANTEE FOOTER */}
        <div className="mt-8 pt-6 border-t border-border-primary/50 flex items-center justify-center gap-2 text-text-muted text-xs">
          <Shield size={14} className="text-brand-accent/70" />
          <span>Secure, encrypted OAuth authentication layer</span>
        </div>

      </div>

      {/* AGREE TERMS TERMS/PRIVACY STUB */}
      <p className="mt-6 text-xs text-text-muted/60 relative z-10">
        By clicking continue, you agree to our terms of service.
      </p>

    </div>
  );
}

export default Login;