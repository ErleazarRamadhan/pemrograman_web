import { useEffect, useState } from 'react';

const URL_ULASAN = 'https://jsonplaceholder.typicode.com/comments?_limit=6';

export function useUlasan() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('loading'); 
  const [pesanError, setPesanError] = useState('');
  const [percobaan, setPercobaan] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function ambilUlasan() {
      setStatus('loading');
      try {
        const response = await fetch(URL_ULASAN, { signal: controller.signal });
        if (!response.ok) throw new Error(`Server membalas dengan kode ${response.status}`);
        setData(await response.json());
        setStatus('success');
      } catch (err) {
        if (err.name === 'AbortError') return;
        setPesanError(err.message);
        setStatus('error');
      }
    }

    ambilUlasan();
    return () => controller.abort();
  }, [percobaan]);

  const cobaLagi = () => setPercobaan((n) => n + 1);

  return { data, status, pesanError, cobaLagi };
}