import { SignupForm } from "./_components/SignupForm";

export default function SignupPage() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-2">
        Sign up to Indie Pro Websites
      </h1>
      <p className="text-base text-center text-gray-600 mb-8">
        Sign up to build your website.
      </p>
      <SignupForm />
    </>
  );
}
