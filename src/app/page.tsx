import { PhotoSection } from "@/components/PhotoSection";
import { Header } from "@/components/Header";

export default function Home() {
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
