import AboutHome from "./_components/About";
import HeaderHome from "./_components/Header";
import Service from "./_components/Service";

export default function Home() {
  return (
    <div>
      <HeaderHome header="Welcome you!" />
      <AboutHome />
      <Service />
    </div>
  );
}
