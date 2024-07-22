import { Frown, MoveLeft } from 'lucide-react';
import Link from 'next/link';

import { APP_NAME, APP_URL } from '@/constants/app';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
  alternates: {
    canonical: '/*',
  },
  openGraph: {
    title: `Not Found | ${APP_NAME}`,
    url: `${APP_URL}/*`,
    description: 'The page you are looking for does not exist.',
  },
};

const NotFound = () => {
  return (
    <section>
      <Card className="flex flex-col items-center justify-center h-96">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <Frown size={80} />
          </div>
          <CardTitle>404 | Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The page you are looking for does not exist.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/">
              <MoveLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default NotFound;
