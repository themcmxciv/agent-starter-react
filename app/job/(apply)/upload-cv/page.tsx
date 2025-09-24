import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="mx-auto mt-10 max-w-sm text-center">
      <h2 className="mb-10 text-2xl leading-[100%] font-semibold">Upload CV</h2>
      <Link href="/job/initial-interview">
        <Button variant="outline" className="w-full">
          Upload CV
        </Button>
      </Link>
      <Link href="/job/initial-interview">
        <Button
          variant="primary"
          className="bg-base-primary hover:bg-base-primary/80 focus:bg-base-primary/80 mt-6 w-full"
        >
          Continue with Linkedin Profile
        </Button>
      </Link>
    </div>
  );
}
