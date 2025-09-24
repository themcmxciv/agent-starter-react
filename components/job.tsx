'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from './modal';
import { Button } from './ui/button';

export default function Job() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="text-text-primary mx-auto my-8 flex max-w-2xl flex-col gap-10 p-4 md:my-16 md:p-8">
      <header>
        <section className="relative flex w-full flex-wrap items-center gap-4">
          <Image src="/oakify-logo.png" width={60} height={60} alt="logo" />
          <div>
            <span>Oakify</span>
            <h1 className="text-2xl font-semibold">Junior Software Engineer</h1>
          </div>
          <Button
            variant="primary"
            className="bg-base-primary focus:bg-base-primary/90 hover:bg-base-primary/90 right-0 w-full md:absolute md:top-0 md:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Apply
          </Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="mb-4 max-w-lg text-center">
              <Image src="/logo.png" width={48} height={48} alt="logo" className="mx-auto mb-4" />
              <h2 className="mb-2 text-lg font-semibold">
                Heads up! You&apos;ll be meeting your AI recruiter
              </h2>
              <p className="text-text-secondary text-sm">
                When you apply to this job, you&apos;ll be having an initial interview with our AI
                recruiter to help qualify you to the job.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                className="min-w-0 flex-1"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="bg-base-primary focus:bg-base-primary/90 hover:bg-base-primary/90 min-w-0 flex-1"
              >
                Continue
              </Button>
            </div>
          </Modal>
        </section>
        <div className="mt-3 flex flex-wrap gap-2 md:gap-4">
          <span className="border-border-muted border-r pr-2 md:pr-4">Full-time</span>
          <span className="border-border-muted border-r pr-2 md:pr-4">Hybrid</span>
          <span className="underline">Barcelona, ES</span>
          <span>€30k - €50k</span>
        </div>
      </header>
      <section>
        <h2 className="mb-4 align-middle text-xl leading-7 font-semibold">About the job</h2>
        <p>
          We are currently looking for software engineers to join our tech team. Your tasks will
          comprise:
        </p>
        <ul className="list-disc pl-6">
          <li>Coding, of course!</li>
          <li>Complex problem solving</li>
          <li>Constantly learning new technologies (algorithms, languages, frameworks…).</li>
          <li>Work side by side with the CTO and founders to build an amazing product.</li>
        </ul>
      </section>
      <section>
        <h3 className="align-middle leading-6 font-semibold">About you</h3>
        <ul className="list-disc pl-6">
          <li>Graduate in Computer Science or related field</li>
          <li>Ideally +1 years work experience in tech-related positions or internships.</li>
          <li>Data-driven mentality, making decisions based on a structured analysis.</li>
          <li>Python and Javascript experience is a plus</li>
          <li>Knowledge of API REST</li>
          <li>
            Ideally experience in a front-end and back-end frameworks such as React and/or Django
          </li>
          <li>Detail-oriented, aiming for excellence.</li>
          <li>
            Self-motivated individual, with strong intellectual curiosity and critical thinking.
          </li>
          <li>Fluent in English</li>
        </ul>
      </section>
      <section>
        <h3 className="align-middle leading-6 font-semibold">Benefits</h3>
        <ul className="list-disc pl-6">
          <li>Career plan: you grow as the company grows.</li>
          <li>
            Working in a young, flexible, fast-paced environment combining on-site and remote work.
          </li>
          <li>
            We believe in flexibility and empowerment. “Do things your way” as long as you follow
            the company values and meet our targets.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="mb-4 align-middle text-xl leading-7 font-semibold">About Oakify</h2>
        <p>
          Okify is a proptech startup that is revolutionizing how people move house. We have created
          a platform that helps our customers with all moving-related contracts (electricity, gas,
          internet, insurance, etc.), making the whole process much faster and easier. All your home
          services ready in some clicks? Exactly that, and much more!! Our technical product has
          always been a priority and we need amazing software engineers who are ready to take
          ownership of the platform and deal with some of the big challenges we have ahead.
        </p>
      </section>
      <section className="flex max-w-full flex-col gap-5 md:flex-row md:gap-10">
        <div className="min-w-0 flex-shrink-0 basis-1/3">
          <h3 className="align-middle leading-6 font-semibold">Company Size</h3>
          <p className="truncate">11-50 Employees</p>
        </div>
        <div className="min-w-0 flex-shrink-0 basis-1/3">
          <h3 className="align-middle leading-6 font-semibold">Linkedin</h3>
          <p className="truncate">
            <a
              href="https://www.linkedin.com/company/okify"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/company/okify
            </a>
          </p>
        </div>
        <div className="min-w-0 flex-shrink-0 basis-1/3">
          <h3 className="align-middle leading-6 font-semibold">Website</h3>
          <p className="truncate">
            <a href="https://www.oakify.io" target="_blank" rel="noopener noreferrer">
              https://www.oakify.io
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
