/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ListOfShame } from "../components/ListOfShame.tsx";

export default function Home() {
  return (
    <div class={tw``}>
      <section
        class={tw`w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200`}
      >
        <img
          src="/logo.svg"
          width="200px"
          alt="the deno logo but in red"
        />
        <h1 class={tw`my-6 text-4xl text-center`}>
          Welcome to duno.land
        </h1>
        <p class={tw`text-lg text-center`}>
          Why Deno might not be ready for you
        </p>
      </section>
      <section
        class={tw`bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200 relative h-8`}
      >
        <img
          src="/assets/wave.svg"
          class={tw`w-full min-w-lg absolute -bottom-1`}
          alt="a small wave graphic"
        />
      </section>
      <section
        class={tw`mx-auto border-b py-16 px-4 max-w-2xl flex flex-col gap-4`}
      >
        <h2 class={tw`text-3xl`}>A few words about duno.land</h2>
        <p>
          The javascript community, and I personally, really want to see Deno
          succeed. This site is not intended to "dunk" on Deno in any way. It's
          simply my way of listing what I see as its current shortcomings and
          what I hope it can improve on.
        </p>
        <p>
          I'm going to list my issues in two seperate categories: Core and
          Community.
        </p>
        <p>
          Core issues are issues with the Deno runtime itself, or projects by
          the Deno organization. Community issues is basically just a list of
          large packages that don't support Deno at all right now. While
          community issues are not technically a problem with Deno, they are a
          huge roadblock to adoption.
        </p>
        <p>
          Now, it's time to get to the list.
        </p>
      </section>
      <section
        class={tw`mx-auto border-b py-16 px-4 max-w-2xl flex flex-col gap-4`}
      >
        <h2 id="core-issues" class={tw`text-3xl`}>Core Issues</h2>
        <h3 id="deno-is-slow" class={tw`text-2xl`}>Deno is slow</h3>
        <p>
          Deno is currently sluggish in comparison to Node and especially in
          comparison to something like Go.
        </p>
        <p>
          According to{" "}
          <a
            class={tw`underline`}
            href="https://subscription.packtpub.com/book/web-development/9781800205666/2/ch02lvl1sec06/grasping-deno-s-limitations"
          >
            this article
          </a>, Deno can handle on average ~25% less requests than Node.
        </p>
        <p>
          One of the{" "}
          <a
            class={tw`underline`}
            href="https://github.com/denoland/deno/issues/5436"
          >
            major decisions that Deno made
          </a>{" "}
          in 2020 signficantly improved this issue by not type checking by
          default, but the overall performance of developing and running the
          application leaves a lot to be desired.
        </p>
        <p>
          With <a class={tw`underline`} href="https://bun.sh">bun.sh</a>{" "}
          taking the performance crown handily. This becomes very important for
          the future of Deno.
        </p>
        <h3 id="deno-isnt-stable" class={tw`text-2xl`}>Deno isn't stable</h3>
        <p>
          Deno's standard library{" "}
          <a
            class={tw`underline`}
            href="https://deno.land/manual@v1.24.3/runtime/stability"
          >
            isn't stable yet
          </a>. This is, in my opinion, one of the biggest blockers for Deno
          adoption in enterprise. People can't afford to take the risk this
          brings along, even if it's imaginary. Stablizing the standard library
          would be a huge step to getting company adoption.
        </p>
        <p>
          None of this is to mention that there are parts of the Deno namespace
          that are still unstable.
        </p>
        <h3 id="deno-isnt-mature" class={tw`text-2xl`}>Deno isn't mature</h3>
        <p>
          People say this a lot but I want to be a little more concrete about
          it. One way I find to check really quickly if something is mature is
          to see what big issues are left to be resolved. I'm going to do a
          quick list of what issues I consider big and an elevator pitch on why
          each is imporant.
        </p>
        <p>
          <a
            class={tw`underline`}
            href="https://github.com/denoland/deno/issues/9795"
          >
            Remove pure JS (non native) io functions from Deno namespace
          </a>{" "}
          - The Deno namespace has a few methods that shouldn't be there. Using
          any Deno namespace call instantly makes your code incompatible with
          the browser and thus isn't great. Moving any code that *should* be
          browser-compatible to a different module would fix this.
        </p>
        <p>
          <a
            class={tw`underline`}
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
            class={tw`underline`}
            href="https://github.com/denoland/deno/issues/5501"
          >
            Lockfile should be written by default
          </a>{" "}
          - Deno doesn't write a lockfile by default. While many argue that this
          is a good thing, I completely disagree. Lockfiles are what keep modern
          dependecy-full apps alive and not creating them by default encourages
          people to not use them.
        </p>
        <p>
          <a
            class={tw`underline`}
            href="https://github.com/denoland/deno/issues/11186"
          >
            Default to h and Fragment for JSX
          </a>{" "}
          - Deno has not finalized its default tsconfig yet. For a runtime with
          supposed "first class" support for typescript, this not being nailed
          down isn't great.
        </p>
        <p>
          That's enough of that. We're going to move on to the community issues.
        </p>
      </section>
      <section class={tw`mx-auto py-16 px-4 max-w-2xl flex flex-col gap-4`}>
        <h2 id="community-issues" class={tw`text-3xl`}>Community Issues</h2>
        <h3 id="stack-overflow" class={tw`text-2xl`}>Stack Overflow</h3>
        <p>
          Deno has nearly no Stack Overflow history, especially in comparison to
          Node.
        </p>
        <p>
          <a
            class={tw`underline`}
            href="https://stackoverflow.com/search?q=deno"
          >
            A search for Deno on SO
          </a>{" "}
          results in just under 2,000 questions.
        </p>
        <p>
          <a
            class={tw`underline`}
            href="https://stackoverflow.com/search?q=node"
          >
            In node?
          </a>{" "}
          Over 1,000,000!
        </p>
        <p>
          If you have a problem with Deno, there is a very high likelyhood that
          you will be the first person on the internet with that specific issue.
        </p>
        <h3 id="module-ecosystem" class={tw`text-2xl`}>Module Ecosystem</h3>
        <p>
          Everyone knew this was going to be brought up at some point. Deno does
          not have nearly the same module support as Node. While the --compat
          flag does bring it a long way, it's still far from the nearly infinite
          libraries that exist for Node.
        </p>
        <p>
          Every major library should eventually be compatible with Deno. If they
          aren't they go on the list of shame. Feel free to contribute on our
          github.
        </p>
        <h3 id="list-of-shame" class={tw`text-2xl`}>List of Shame</h3>
        <ListOfShame />
        <p>
          This list is up to date as of 22/08/2022.
        </p>
      </section>
      <footer class={tw`bg-coolGray-100 px-4 py-8 flex justify-center gap-4`}>
        <p>
          Have anything to contribute? Check out{" "}
          <a
            class={tw`underline`}
            href="https://github.com/lino-levan/duno.land"
          >
            our github
          </a>.
        </p>
        <p>•</p>
        <p>
          <a class={tw`underline`} href="https://linolevan.com/blog">
            The blog post that started it all.
          </a>
        </p>
      </footer>
    </div>
  );
}
