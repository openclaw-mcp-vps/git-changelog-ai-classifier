import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitChangelog AI — Auto-categorize commits into changelog sections",
  description: "Uses AI to classify git commits into features, bugfixes, breaking changes, and generate formatted changelogs. Built for open source maintainers and release managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f1c7fc91-4bae-4370-8237-2220a7039905"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
