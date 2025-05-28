const DEMO_ARTICLES = [
  {
    title: "Tech Giant Launches Quantum Processor",
    description: "A major step in commercial quantum computing as TechCorp unveils its new chip.",
    url: "https://news.example.com/quantum",
    urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=640&q=80",
    category: "technology",
    publishedAt: "2023-08-01T10:00:00Z",
    content:
      "TechCorp has revealed its quantum processor, promising breakthroughs in speed and efficiency...",
    source: { name: "Example News" }
  },
  {
    title: "Senate Approves Health Care Bill",
    description: "Historic healthcare reform passes with bipartisan support.",
    url: "https://news.example.com/healthcare",
    urlToImage: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=640&q=80",
    category: "politics",
    publishedAt: "2023-08-01T09:00:00Z",
    content: "The bill will improve access to healthcare across the nation...",
    source: { name: "Global Politics" }
  },
  {
    title: "Breakthrough in Cancer Research Announced",
    description: "Scientists make progress in targeted therapy.",
    url: "https://news.example.com/cancer",
    urlToImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=640&q=80",
    category: "health",
    publishedAt: "2023-08-01T07:00:00Z",
    content: "A new compound shows effectiveness in initial trials...",
    source: { name: "HealthDaily" }
  },
  {
    title: "Olympic Gold for Young Sprinter",
    description: "A record-breaking performance stuns the world.",
    url: "https://news.example.com/sprint",
    urlToImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=640&q=80",
    category: "sports",
    publishedAt: "2023-08-01T06:00:00Z",
    content:
      "The 19-year-old shattered records at the world stage...",
    source: { name: "SportsNet" }
  },
  {
    title: "Award Show Highlights: Best Moments",
    description: "The entertainment world gathered for the annual gala.",
    url: "https://news.example.com/awards",
    urlToImage: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=640&q=80",
    category: "entertainment",
    publishedAt: "2023-08-01T04:00:00Z",
    content:
      "Performances by leading artists and emotional speeches marked the night...",
    source: { name: "Entertainment Weekly" }
  }
];

// PUBLIC_INTERFACE
export async function fetchNewsFeed() {
  // For demo/MVP, use mock. In production, fetch from an API.
  // Example for using real API (CORS may block if no key/server):
  // const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`);
  // const json = await resp.json();
  // return (json.articles || []).map(article => ({ ...article, category: 'general' }));
  await new Promise((res) => setTimeout(res, 600));
  return DEMO_ARTICLES;
}
