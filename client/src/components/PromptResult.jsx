function PromptResult({ result }) {

  // const copyPrompt = () => {
  //   navigator.clipboard.writeText(
  //     result.optimizedPrompt
  //   );
  // };

  
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(result.optimizedPrompt);
    onCopyStatus?.(true);
  } catch (error) {
    console.error("Copy failed:", error);
    onCopyStatus?.(false);
  }
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
  type="button"
  onClick={handleCopy}
  className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
>
  Copy optimized prompt
</button>

    </div>
  );
}

export default PromptResult;