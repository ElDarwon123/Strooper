import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <h1>WELCOME</h1>
    <Link style={{margin: 10}} to="/game">Play</Link>
    <Link style={{margin: 10}} to="/settings">Settings</Link>
    <Link style={{margin: 10}} to="/results">Results</Link>
    <Link style={{margin: 10}} to="/help">Results</Link>
    </>
  );
}
