import { useState } from "react";

function Dashboard() {

  const [prompt, setPrompt] = useState("");

  const [result, setResult] = useState(null);

  const optimizePrompt = async () => {

    const response = await fetch(
      "http://localhost:8080/api/prompts/optimize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt
        })
      }
    );

    const data = await response.json();

    setResult(data);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        CostLess AI Dashboard
      </h1>

      <textarea
        placeholder="Enter your prompt..."
        className="w-full h-40 bg-zinc-900 p-4 rounded-xl"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={optimizePrompt}
        className="mt-5 bg-green-500 px-6 py-3 rounded-xl"
      >
        Optimize Prompt
      </button>

      {
        result && (
          <div className="mt-10 bg-zinc-900 p-6 rounded-xl">

            <h2 className="text-2xl mb-4">
              Optimized Prompt
            </h2>

            <p>{result.optimizedPrompt}</p>

            <div className="mt-5">
              Tokens Saved: {result.tokensSaved}
            </div>

          </div>
        )
      }

    </div>
  );
}

export default Dashboard;