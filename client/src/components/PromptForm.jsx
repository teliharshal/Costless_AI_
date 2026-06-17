import { useState } from "react";

function PromptForm({ setResult }) {

  const [prompt, setPrompt] = useState("");

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
    <div className="bg-zinc-900 p-6 rounded-xl">

      <textarea
        className="w-full h-40 bg-zinc-800 rounded-xl p-4"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
      />

      <button
        onClick={optimizePrompt}
        className="mt-4 bg-green-500 px-6 py-3 rounded-xl"
      >
        Optimize Prompt
      </button>

    </div>
  );
}

export default PromptForm;