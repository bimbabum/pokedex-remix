import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import styles from './tailwind.css'
// import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import {usePokemon} from './pokemonAPI/context'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export function meta() {
  return { title: "Pokedex" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className='font-secondary bg-gray-100'>
        <NavBar>
          <Outlet context={usePokemon()}/>
        </NavBar>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


