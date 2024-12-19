import { Header } from "@/components/Header";
import { PhotoSection } from "@/components/PhotoSection";

export default function Page() {
  return (
    <div className="">
      <Header />
      <main>
        <div className="max-w-screen-lg mx-auto px-4 py-12">
          <PhotoSection />
        </div>
      </main>
    </div>
  );
}
