import type { LoaderFunction, MetaFunction } from "@remix-run/node";

import { jaJP } from "@clerk/localizations";
// Import ClerkApp
import { ClerkApp } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App, { localization: jaJP });
