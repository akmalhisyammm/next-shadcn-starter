import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Next Shadcn Starter</h1>
        <p className="text-sm text-muted-foreground">
          Next.js boilerplate with Shadcn UI and TypeScript setup.
        </p>
      </div>

      <figure className="-mt-2">
        <Image
          src="/morty.gif"
          alt="Morty"
          width={256}
          height={256}
          unoptimized
        />
      </figure>

      <div className="space-y-2">
        <p>Quick start with the following command:</p>
        <pre className="px-2 rounded bg-muted">
          <code>
            npx degit akmalhisyammm/next-shadcn-starter {'<APP_NAME>'}
          </code>
        </pre>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p>Or generate a new repository using this template:</p>
        <div className="flex gap-2">
          <Button asChild>
            <Link
              href="https://github.com/akmalhisyammm/next-shadcn-starter/generate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use This Template
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link
              href="https://github.com/akmalhisyammm/next-shadcn-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Repository
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
