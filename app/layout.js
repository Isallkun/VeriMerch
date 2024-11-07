// app/layout.js
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-righteous">
        {children}
        <footer className="bg-gray-200 p-4 text-center text-sm text-black">
          &copy; 2024 ALL RIGHTS RESERVED
        </footer>
      </body>
    </html>
  );
}
