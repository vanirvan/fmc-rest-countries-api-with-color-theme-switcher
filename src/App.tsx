import Countries from "./components/countries";
import Filter from "./components/filter";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="font-nunito relative flex min-h-svh w-full flex-col gap-12 bg-[hsl(0,0%,98%)] dark:bg-[hsl(207,26%,17%)]">
      <Navbar />
      <Filter />
      <Countries />
    </main>
  );
}

export default App;
