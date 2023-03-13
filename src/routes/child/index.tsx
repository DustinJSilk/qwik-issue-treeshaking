import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

const runServerCode = server$(() => {
  console.log("Running");
});

export default component$(() => {
  return <button onClick$={() => runServerCode()}>Call server$</button>;
});
