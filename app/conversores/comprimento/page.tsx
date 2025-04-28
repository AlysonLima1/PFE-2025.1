'use client';
import { useState } from 'react';

export default function ConversorComprimento() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');

  const handleMetrosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMetros(value);
    setPes(value ? (parseFloat(value) * 3.28084).toFixed(2) : '');
  };

  const handlePesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPes(value);
    setMetros(value ? (parseFloat(value) / 3.28084).toFixed(2) : '');
  };

  return (
    <main className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6">Conversor de Comprimento</h1>
      <div className="flex flex-col gap-4">
        <input type="number" value={metros} onChange={handleMetrosChange} placeholder="Metros (m)" className="border p-2 rounded" />
        <input type="number" value={pes} onChange={handlePesChange} placeholder="Pés (ft)" className="border p-2 rounded" />
      </div>
    </main>
  );
}
