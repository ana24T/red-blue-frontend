'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mesajBackend, setMesajBackend] = useState('Se conecteaza la backend...');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    fetch(`${apiUrl}/`)
      .then((res) => res.json())
      .then((data) => {
        setMesajBackend(data.message);
      })
      .catch(() => {
        setMesajBackend('Eroare: Backend-ul nu este pornit pe portul 5000!');
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Jocul RED + BLUE
        </h1>
        <p className="text-gray-600 mb-4">Status conexiune cu serverul:</p>
        <div className="p-4 rounded-lg bg-blue-50 text-blue-800 font-semibold">
          {mesajBackend}
        </div>
      </div>
    </main>
  );
}
