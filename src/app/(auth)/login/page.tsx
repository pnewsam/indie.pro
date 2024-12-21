import { LoginForm } from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-2">
        Log in to Indie Pro Websites
      </h1>
      <p className="text-base text-center text-gray-600 mb-8">
        Log in to continue building your website.
      </p>
      <LoginForm />
    </>
  );
}
