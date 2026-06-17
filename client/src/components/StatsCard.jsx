function StatsCard({ title, value }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl">
      <h3 className="text-gray-400">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;