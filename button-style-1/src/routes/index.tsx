import { createFileRoute } from "@tanstack/react-router";
import { CatCoolMode } from "@/components/CatCoolMode";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cat Cool Mode — Click the button, out jumps a cat" },
      {
        name: "description",
        content:
          "A playful Cat Cool Mode interaction: click the neon liquid button and a cat jumps out, lands below it, then vanishes after five seconds.",
      },
      { property: "og:title", content: "Cat Cool Mode — Click the button" },
      {
        property: "og:description",
        content: "Click the neon liquid button and watch a cat jump out and land right below it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="sr-only">Cat Cool Mode</h1>
      <CatCoolMode label="Click Me" />
    </main>
  );
}
