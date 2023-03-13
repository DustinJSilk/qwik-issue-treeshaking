import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <Link class="mindblow" href="/child/">
        Go to child page (See error in console)
      </Link>
    </div>
  );
});
