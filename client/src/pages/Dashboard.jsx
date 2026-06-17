import { useState } from "react";
import StatsCard from "../components/StatsCard";
import PromptForm from "../components/PromptForm";
import PromptResult from "../components/PromptResult";

function Dashboard() {

  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        CostLess AI Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <StatsCard
          title="Tokens Saved"
          value={result ?
            result.originalTokens -
            result.optimizedTokens : 0}
        />

        <StatsCard
          title="Estimated Savings"
          value={`$${result?.estimatedSavings || 0}`}
        />

        <StatsCard
          title="Original Tokens"
          value={result?.originalTokens || 0}
        />

        <StatsCard
          title="Optimized Tokens"
          value={result?.optimizedTokens || 0}
        />

      </div>

      <PromptForm setResult={setResult} />

      {result && (
        <PromptResult result={result} />
      )}

    </div>
  );
}

export default Dashboard;