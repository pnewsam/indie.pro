import { Container } from "./Container";

export function HeroSection() {
  return (
    <section className="py-12">
      <Container className="flex flex-col items-center justify-center max-w-4xl">
        <h1 className="text-5xl/tight font-bold text-center mb-4">
          You Need a Website.
          <br />
          It Doesn't Have to Be Complicated.
        </h1>
        <p className="text-lg text-center text-gray-600">
          As an independent professional, you need a way to showcase your work,
          get more clients, and grow your business. <b>Indie.Pro</b> is the
          easiest way to get your website up and running.
        </p>
      </Container>
    </section>
  );
}
