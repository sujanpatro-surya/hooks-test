import { useEffect, useState } from "react";

export const FirstComponent = (): React.ReactElement => {
  const [data, setData] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('initial');

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.example.com/data?query=${query}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {    
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount.

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
