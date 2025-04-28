import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Conversor Universal</h1>
      <p className="mb-6">Este é um aplicativo para conversão de moedas, temperaturas e unidades de medida.</p>
      <div className="flex flex-col gap-3">
        <Link href="/sobre" className="text-blue-600 hover:underline">Sobre</Link>
        <Link href="/conversores/moeda" className="text-blue-600 hover:underline">Conversor de Moeda</Link>
        <Link href="/conversores/temperatura" className="text-blue-600 hover:underline">Conversor de Temperatura</Link>
        <Link href="/conversores/comprimento" className="text-blue-600 hover:underline">Conversor de Comprimento</Link>
      </div>
    </main>
  );
}
