import { fetchExplorations } from '@/lib/data/explorations';

export default async function HomePage() {
  const explorations =
    await fetchExplorations();

  return (
    <main className="min-h-screen bg-black text-white p-12">
      <h1 className="text-5xl font-black mb-8">
        Supabase Connected
      </h1>

      <pre className="text-sm">
        {JSON.stringify(explorations, null, 2)}
      </pre>
    </main>
  );
}