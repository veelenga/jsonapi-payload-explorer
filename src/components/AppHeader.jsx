import './AppHeader.css';

export default function AppHeader() {
  return (
    <header className="appHeader">
      <div className="brand">
        <span className="brandMark">{'{:}'}</span>
        <div className="brandText">
          <h1>JSON:API Payload Explorer</h1>
          <p>Preview, search and inspect JSON:API payloads</p>
        </div>
      </div>
      <nav className="headerNav">
        <a href="https://jsonapi.org/" target="_blank" rel="noreferrer">JSON:API spec</a>
        <a href="https://github.com/veelenga/jsonapi-payload-explorer" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  );
}
