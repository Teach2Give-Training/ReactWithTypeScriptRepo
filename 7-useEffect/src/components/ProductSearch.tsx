import { useState, useEffect } from 'react';

const products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    // This will run every time searchTerm changes
    const filtered = products.filter((product) =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  }, [searchTerm]); // 💡 Dependency array: re-run only when searchTerm changes

  return (
    <div>
      <h2>🔍 Product Search</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
