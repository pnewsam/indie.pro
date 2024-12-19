import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/FormField";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center border shadow-xl rounded-lg p-12">
        <h1 className="text-2xl font-bold mb-2">Log in to Indie.Pro</h1>
        <p className="text-base text-gray-600 mb-8">
          Log in to your Indie.Pro account.
        </p>
        <div className="flex flex-col gap-4">
          <FormField className="w-full" label="Email">
            <Input placeholder="Email" type="email" />
          </FormField>
          <FormField className="w-full" label="Password">
            <Input placeholder="Password" type="password" />
          </FormField>
          <Button className="w-full">Log in</Button>
        </div>
      </div>
    </div>
  );
}
