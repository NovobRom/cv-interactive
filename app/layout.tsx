import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Roman Novobranets — AI Evangelist | Interactive CV",
  description: "Operations leader bridging business operations and AI implementation. Nearly 10 years at Nova Post.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
