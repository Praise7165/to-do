import "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <div className="container flex justify-center">
        <div className="wrapper flex flex-col gap-3rem">
          <div>
            <em>Todays date</em>
            <h1>🖲️To do app</h1>
          </div>

          <Header />
        </div>
      </div>
    </main>
  );
}
