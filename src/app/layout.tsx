export const metadata = {
  title: "Pokédex",
  description: "Pokédex regroupant l'ensemble des pokémons",
};

export default function Layout({ children }) {
  return (
    <html lang="fr">
        <body style={{
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            padding: 0
        }}>
            <main>{children}</main>
        </body>
    </html>
  );
}
