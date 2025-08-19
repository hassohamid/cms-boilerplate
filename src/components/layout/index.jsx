import Header from "./Header";
import Footer from "./Footer";

//Uses config set global components for the layout
export default function Layout({ config, children }) {
  return (
    <>
      <Header blok={config?.content?.header?.[0]} />
      <main>{children}</main>
      <Footer blok={config?.content?.footer?.[0]} />
    </>
  );
}
