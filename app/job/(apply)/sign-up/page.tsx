import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99992 12.6666L3.33325 7.99998M3.33325 7.99998L7.99992 3.33331M3.33325 7.99998H12.6666"
            stroke="currentColor"
            strokeWidth="1.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm">Back</span>
      </div>
      <div className="mx-auto mt-10 max-w-sm text-center">
        <h2 className="mb-10 text-2xl leading-[100%] font-semibold">Sign Up</h2>
        <Button variant="primary" className="w-full">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1666 5.33334C12.2275 5.33334 13.2449 5.75477 13.995 6.50492C14.7452 7.25506 15.1666 8.27248 15.1666 9.33334V14H12.4999V9.33334C12.4999 8.97972 12.3594 8.64058 12.1094 8.39053C11.8593 8.14049 11.5202 8.00001 11.1666 8.00001C10.813 8.00001 10.4738 8.14049 10.2238 8.39053C9.97373 8.64058 9.83325 8.97972 9.83325 9.33334V14H7.16659V9.33334C7.16659 8.27248 7.58801 7.25506 8.33816 6.50492C9.0883 5.75477 10.1057 5.33334 11.1666 5.33334Z"
              stroke="currentColor"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.49992 6.00001H1.83325V14H4.49992V6.00001Z"
              stroke="currentColor"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.16659 4.00001C3.90296 4.00001 4.49992 3.40306 4.49992 2.66668C4.49992 1.9303 3.90296 1.33334 3.16659 1.33334C2.43021 1.33334 1.83325 1.9303 1.83325 2.66668C1.83325 3.40306 2.43021 4.00001 3.16659 4.00001Z"
              stroke="#FAFAFA"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Connect Linkedin Account</span>
        </Button>
        <p className="text-text-secondary mx-auto mt-6 max-w-2xs text-xs">
          By clicking continue, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
