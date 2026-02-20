import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F3F3F3] px-6">
      <div className="text-center">
        <h1 className="text-[120px] sm:text-[180px] lg:text-[240px] font-black text-[#3A4731] leading-none">
          404
        </h1>
        
        <p className="mt-4 text-[20px] sm:text-[24px] lg:text-[32px] font-medium text-[#191918]">
          Page not found
        </p>
        
        <p className="mt-2 text-[14px] sm:text-[16px] text-[#191918]/60 max-w-[400px] mx-auto">
          The requested page does not exist or has been moved
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-[#3A4731] px-8 py-4 text-[16px] sm:text-[20px] font-medium text-[#F3F3F3] transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
