import './globals.css'

export const metadata = {
  title: 'Conversor Universal',
  description: 'App de conversão de moedas, temperatura e comprimento.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
