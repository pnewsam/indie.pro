import { Container } from "./Container";

export function DemoSection() {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-4 border shadow-xl rounded-lg p-4 max-w-4xl mx-auto">
          <div className="flex flex-col gap-2">
            <h2>Demo 1</h2>
            <p>Demo 1 description</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
