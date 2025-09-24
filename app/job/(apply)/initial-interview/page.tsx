import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div>
      <div className="mx-auto mt-10 max-w-sm text-center">
        <h2 className="mb-10 text-2xl leading-[100%] font-semibold">Interview with AI Recruiter</h2>
        <p>
          Start your initial interview so we’ll be able to get you placed with jobs that best match
          your skillset
        </p>
        <Image src={'/logo.png'} alt="logo" width={100} height={100} className="mx-auto my-4" />
        <Button
          variant="primary"
          className="bg-base-primary hover:bg-base-primary/80 focus:bg-base-primary/80"
        >
          Start Interview
        </Button>
      </div>
    </div>
  );
}
