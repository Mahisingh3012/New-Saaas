import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <SignIn />
    </main>
  );
};

export default Page;
