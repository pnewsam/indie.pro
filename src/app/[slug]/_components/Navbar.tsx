import { Container } from "@/components/Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <nav className="flex items-center gap-4">
        <Container>
          <div>
            <Link href="/">Home</Link>
          </div>
        </Container>
      </nav>
    </div>
  );
}
