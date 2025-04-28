'use client';
import { useState } from 'react';

export default function ConversorMoeda() {
  const taxa = 5.67;
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');

  const handleRealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReal(value);
    setDolar(value ? (parseFloat(value) / taxa).toFixed(2) : '');
  };

  const handleDolarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDolar(value);
    setReal(value ? (parseFloat(value) * taxa).toFixed(2) : '');
  };

  return (
    <main className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6">Conversor de Moeda</h1>
      <div className="flex flex-col gap-4">
        <input type="number" value={real} onChange={handleRealChange} placeholder="Reais (BRL)" className="border p-2 rounded" />
        <input type="number" value={dolar} onChange={handleDolarChange} placeholder="Dólares (USD)" className="border p-2 rounded" />
        <p className="text-sm text-gray-500">Cotação fixa de 24/04/2025: 1 USD = R$5,67</p>
      </div>
    </main>
  );
}
