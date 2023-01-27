const listOfShame = [
  ["Playwright", "https://github.com/microsoft/playwright/issues/3146"],
  ["Vite", "https://github.com/vitejs/vite/issues/109"],
  ["Next.js", "https://github.com/vercel/next.js/issues/12334"],
  ["Electron", "https://github.com/electron/electron/issues/23613"],
  ["Svelte", "https://github.com/sveltejs/svelte/issues/4807"],
];

export function ListOfShame() {
  return (
    <ul>
      {listOfShame.map((item) => (
        <li>
          - <a class="underline" href={item[1]}>{item[0]}</a>
        </li>
      ))}
    </ul>
  );
}
