import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to Cloudly X</h1>
        <p className="text-lg mb-8">
          Your modern messaging app with real-time chat, group conversations, and more.
        </p>
        <Image
          src="/images/hero.png"
          alt="Cloudly X Hero Image"
          width={500}
          height={300}
          className="rounded-lg"
        />
        {/* Additional content and components */}
      </main>
    </>
  );
}
