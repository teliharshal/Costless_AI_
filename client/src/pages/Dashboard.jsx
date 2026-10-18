
import { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";
import PromptForm from "../components/PromptForm";
import PromptResult from "../components/PromptResult";

function Dashboard() {
  const [result, setResult] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  const handleCopyStatus = (success) => {
    setToast({
      type: success ? "success" : "error",
      message: success
        ? "Copied successfully! Your prompt is ready to use."
        : "Unable to copy. Please try again.",
    });
  };

  const tokensSaved = result
    ? Math.max(0, result.originalTokens - result.optimizedTokens)
    : 0;

  const savings = Number(result?.estimatedSavings || 0);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-xl font-bold text-violet-300 ring-1 ring-violet-400/20">
              C
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">
                CostLess <span className="text-violet-400">AI</span>
              </h1>
              <p className="text-xs text-zinc-500">
                Intelligent prompt optimization
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Workspace ready
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        {/* Intro */}
        <section className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            AI efficiency workspace
          </p>

          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Optimize prompts.
                <span className="block text-zinc-400">
                  Spend less on AI.
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
                Refine your prompts, track token usage, and explore potential
                savings with one simple workspace.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-xs text-zinc-500">Current session</p>
              <p className="mt-1 text-sm font-medium text-zinc-200">
                {result ? "Optimization completed" : "Ready to optimize"}
              </p>
            </div>
          </div>
        </section>

        {/* Analytics */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-200">
              Optimization overview
            </h3>
            <span className="text-xs text-zinc-500">
              Latest result
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard
              title="Tokens Saved"
              value={tokensSaved.toLocaleString()}
            />

            <StatsCard
              title="Estimated Savings"
              value={`$${savings.toFixed(5)}`}
            />

            <StatsCard
              title="Original Tokens"
              value={(result?.originalTokens || 0).toLocaleString()}
            />

            <StatsCard
              title="Optimized Tokens"
              value={(result?.optimizedTokens || 0).toLocaleString()}
            />
          </div>

          <p className="mt-3 text-xs leading-5 text-zinc-500">
            Savings are estimates based on your current backend calculation,
            not guaranteed provider billing savings.
          </p>
        </section>

        {/* Prompt workspace */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#111113] shadow-2xl shadow-black/20">
          <div className="border-b border-white/10 px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-300">
                ✳
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Prompt optimization studio
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Turn lengthy prompts into more concise instructions.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <PromptForm setResult={setResult} />
          </div>
        </section>

        {/* Results */}
        {result ? (
          <section className="mt-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Optimization results</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Review your optimized prompt and copy it when you're ready.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111113] p-5 sm:p-7">
              <PromptResult
                result={result}
                onCopyStatus={handleCopyStatus}
              />
            </div>
          </section>
        ) : (
          <section className="mt-8 rounded-2xl border border-dashed border-white/10 px-6 py-10 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-xl">
              ↗
            </div>
            <h3 className="font-medium text-zinc-200">
              Your results will appear here
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
              Submit a prompt above to see token comparisons, estimated
              savings, and your optimized result.
            </p>
          </section>
        )}

        <footer className="mt-12 border-t border-white/10 py-6 text-center text-xs text-zinc-600">
          CostLess AI · Smarter prompts, more efficient AI usage
        </footer>
      </main>

      {/* Bottom toast notification */}
      {toast && (
        <div
          key={`${toast.type}-${toast.message}`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-[toastIn_250ms_ease-out] sm:bottom-8"
        >
          <div
            className={`flex items-center gap-3 rounded-xl border px-4 py-4 shadow-2xl backdrop-blur-xl ${
              toast.type === "success"
                ? "border-emerald-400/25 bg-zinc-900/95"
                : "border-red-400/25 bg-zinc-900/95"
            }`}
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg ${
                toast.type === "success"
                  ? "bg-emerald-400/15 text-emerald-400"
                  : "bg-red-400/15 text-red-400"
              }`}
            >
              {toast.type === "success" ? "✓" : "!"}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">
                {toast.type === "success" ? "Copied successfully" : "Copy failed"}
              </p>
              <p className="mt-1 text-xs leading-5 text-zinc-400">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
              className="rounded-md px-2 py-1 text-lg text-zinc-500 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translate(-50%, 12px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
