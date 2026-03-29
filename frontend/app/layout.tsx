import "./globals.css";

export const metadata = {
  title: "Naarad GRS",
  description: "AI-powered grievance redressal system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}