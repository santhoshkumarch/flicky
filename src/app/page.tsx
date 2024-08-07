import Header from '../components/Header';
import Index from '../components/index';
import Image from 'next/image';
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero /> 
      </main>
    </>
  );
}
