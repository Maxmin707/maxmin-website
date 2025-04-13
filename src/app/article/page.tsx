export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#010101] text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Articles</h1>
      <div className="grid gap-6">
        <article className="bg-[#1a1a1a] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Sample Article Title</h2>
          <p className="text-gray-300">This is a sample article content. You can add more articles here.</p>
        </article>
      </div>
    </div>
  );
} 