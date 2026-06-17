function PromptResult({ result }) {

  const copyPrompt = () => {
    navigator.clipboard.writeText(
      result.optimizedPrompt
    );
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl mt-6">

      <h2 className="text-2xl mb-4">
        Optimized Prompt
      </h2>

      <p className="whitespace-pre-wrap">
        {result.optimizedPrompt}
      </p>

      <button
        onClick={copyPrompt}
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
      >
        Copy
      </button>

    </div>
  );
}

export default PromptResult;