'use client';
import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value ? ((parseFloat(value) * 9/5) + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value ? ((parseFloat(value) - 32) * 5/9).toFixed(2) : '');
  };

  return (
    <main className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6">Conversor de Temperatura</h1>
      <div className="flex flex-col gap-4">
        <input type="number" value={celsius} onChange={handleCelsiusChange} placeholder="Celsius (°C)" className="border p-2 rounded" />
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} placeholder="Fahrenheit (°F)" className="border p-2 rounded" />
      </div>
    </main>
  );
}
