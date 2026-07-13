import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <SignUp />
    </main>
  );
};

export default Page;
