export default function Home() {
  return (
    <div class="">
      <section class="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200">
        <img
          src="/logo.svg"
          width="200px"
          alt="the deno logo but in red"
        />
        <h1 class="my-6 text-4xl text-center">
          Welcome to duno.land
        </h1>
        <p class="text-lg text-center">
          Why Deno might not be ready for you and what we are doing about it
        </p>
      </section>
      <section class="bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200 relative h-8">
        <img
          src="/assets/wave.svg"
          class="w-full min-w-lg absolute -bottom-1"
          alt="a small wave graphic"
        />
      </section>
      <section class="mx-auto border-b py-16 px-4 max-w-2xl flex flex-col gap-4">
        <h2 class="text-3xl text-center flex flex-col sm:flex-row items-center gap-4">
          Our projects
        </h2>
        <p>
          While we do think Deno isn't quite ready for prime time yet, we are
          actively working on this by building deno-first modules under the
          "dunosaurs" github organization.
        </p>
        <div class="grid grid-cols-3 gap-4">
          <div class="border p-2 rounded">
            <h3 class="text-xl underline">
              <a href="https://github.com/dunosaurs/stats">x/stats</a>
            </h3>
            <p>
              A statistics / data science library for Deno
            </p>
          </div>
          <div class="border p-2 rounded">
            <h3 class="text-xl underline">
              <a href="https://github.com/dunosaurs/diff">x/diff</a>
            </h3>
            <p>
              A simple and fast typescript diff implementation for Deno
            </p>
          </div>
          <div class="border p-2 rounded">
            <h3 class="text-xl underline">
              <a href="https://github.com/dunosaurs/color">x/color</a>
            </h3>
            <p>
              A simple, fast, and comprehensive color library for Deno.
            </p>
          </div>
          <div class="border p-2 rounded">
            <h3 class="text-xl underline">
              <a href="https://github.com/dunosaurs/slug">x/slug</a>
            </h3>
            <p>
              Deno library for converting arbitrary strings into valid slugs
            </p>
          </div>
          <div class="border p-2 rounded">
            <h3 class="text-xl underline">
              <a href="https://github.com/dunosaurs/gtts">x/gtts</a>
            </h3>
            <p>
              A simple deno text-to-speech library using the google translate
              api.
            </p>
          </div>
          <div class="border p-2 rounded">
            <h3 class="text-xl underline">
              <a href="https://github.com/dunosaurs/supports_color">
                x/supports_color
              </a>
            </h3>
            <p>
              A Deno port of chalk's supports-color
            </p>
          </div>
          <div class="border p-2 rounded">
            <h3 class="text-xl underline">
              <a href="https://github.com/dunosaurs/nostr">x/nostr</a>
            </h3>
            <p>
              A Deno implementation of a nostr client and server.
            </p>
          </div>
        </div>
      </section>
      <section class="mx-auto border-b py-16 px-4 max-w-2xl flex flex-col gap-4">
        <h2 class="text-3xl text-center flex flex-col sm:flex-row items-center gap-4">
          A few words about duno.land{" "}
          <iframe
            src="https://ghbtns.com/github-btn.html?user=lino-levan&repo=duno.land&type=star&count=true&size=large"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          />
        </h2>
        <p>
          The javascript community, and I personally, really want to see Deno
          succeed. This site is not intended to "dunk" on Deno in any way. It's
          simply my way of listing what I see as its current shortcomings and
          what I hope it can improve on.
        </p>
      </section>
      <section class="mx-auto border-b py-16 px-4 max-w-2xl flex flex-col gap-4">
        <h2 id="core-issues" class="text-3xl">Updates</h2>
        <p>
          The fact that this page needs updating is a fantastic sign that Deno
          is headed in the right direction.
        </p>
        <h3 id="module-ecosystem" class="text-2xl">Deno isn't mature</h3>
        <p>
          <a class="underline">
            Lockfile should be written by default
          </a>{" "}
          - Deno now writes lockfiles by default 🎉. This is a great step
          forward in the world of potential supply-chain attacks.
        </p>
        <h3 id="module-ecosystem" class="text-2xl">Module Ecosystem</h3>
        <p>
          Deno now does have nearly the module support of node with the release
          and stabilization of npm specifiers. While the compatibility isn't
          100% there, and there are still some issues with the compat layer's
          implementation of things like websocket and https, it is now perfectly
          usuable and no longer the huge problem it was.
        </p>
      </section>
      <section class="mx-auto border-b py-16 px-4 max-w-2xl flex flex-col gap-4">
        <h2 id="core-issues" class="text-3xl">Core Issues</h2>
        <h3 id="deno-is-slow" class="text-2xl">Deno is slow</h3>
        <p>
          Deno is currently sluggish in comparison to Node and especially in
          comparison to something like Go.
        </p>
        <p>
          According to{" "}
          <a
            class="underline"
            href="https://subscription.packtpub.com/book/web-development/9781800205666/2/ch02lvl1sec06/grasping-deno-s-limitations"
          >
            this article
          </a>, Deno can handle on average ~25% less requests than Node.
        </p>
        <p>
          One of the{" "}
          <a
            class="underline"
            href="https://github.com/denoland/deno/issues/5436"
          >
            major decisions that Deno made
          </a>{" "}
          in 2020 signficantly improved this issue by not type checking by
          default, but the overall performance of developing and running the
          application leaves a lot to be desired.
        </p>
        <p>
          With <a class="underline" href="https://bun.sh">bun.sh</a>{" "}
          taking the performance crown handily. This becomes very important for
          the future of Deno.
        </p>
        <h3 id="deno-isnt-mature" class="text-2xl">Deno isn't mature</h3>
        <p>
          People say this a lot but I want to be a little more concrete about
          it. One way I find to check really quickly if something is mature is
          to see what big issues are left to be resolved. I'm going to do a
          quick list of what issues I consider big and an elevator pitch on why
          each is imporant.
        </p>
        <p>
          <a
            class="underline"
            href="https://github.com/denoland/deno/issues/9795"
          >
            Remove pure JS (non native) io functions from Deno namespace
          </a>{" "}
          - The Deno namespace has a few methods that shouldn't be there. Using
          any Deno namespace call instantly makes your code incompatible with
          the browser and thus isn't great. Moving any code that *should* be
          browser-compatible to the standard library would fix this.
        </p>
        <p>
          <a
            class="underline"
            href="https://github.com/denoland/deno/issues/5501"
          >
            Detached processes in deno
          </a>{" "}
          - Deno can't currently run a child process in detached mode. This is a
          pretty big oversight but it's niche enough to probably not effect you
          directly.
        </p>
        <p>
          <a
            class="underline"
            href="https://github.com/denoland/deno/issues/11186"
          >
            Default to h and Fragment for JSX
          </a>{" "}
          - Deno has not finalized its default tsconfig yet. For a runtime with
          supposed "first class" support for typescript, this not being nailed
          down isn't great.
        </p>
        <h3 id="stack-overflow" class="text-2xl">Stack Overflow</h3>
        <p>
          Deno has nearly no Stack Overflow history, especially in comparison to
          Node.
        </p>
        <p>
          <a
            class="underline"
            href="https://stackoverflow.com/search?q=deno"
          >
            A search for Deno on SO
          </a>{" "}
          results in just over 2,000 questions.
        </p>
        <p>
          <a
            class="underline"
            href="https://stackoverflow.com/search?q=node"
          >
            In node?
          </a>{" "}
          Over 1,100,000!
        </p>
        <p>
          If you have a problem with Deno, there is a very high likelyhood that
          you will be the first person on the internet with that specific issue.
        </p>
      </section>
      <footer class="bg-coolGray-100 px-4 py-8 flex justify-center gap-4">
        <p>
          Have anything to contribute? Check out{" "}
          <a
            class="underline"
            href="https://github.com/lino-levan/duno.land"
          >
            our github
          </a>.
        </p>
        <p>•</p>
        <p>
          <a
            class="underline"
            href="https://linolevan.com/blog/duno_land_announcement"
          >
            The blog post that started it all.
          </a>
        </p>
      </footer>
    </div>
  );
}
