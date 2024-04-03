import Nav from "../components/Nav.tsx";
export default function Home() {
  return (
    <div className="MainPage">
      <div>
        <Nav />
      </div>
      <div>
        <h1 className="MainTitle">My Dictionary</h1>
      </div>
    </div>
  );
}
