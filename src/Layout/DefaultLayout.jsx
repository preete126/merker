import Navbar from "../components/Navbar";

function DefaultLayout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default DefaultLayout;
