import './PaneSwitcher.css';

const PANES = [
  { key: 'editor', label: 'Editor' },
  { key: 'viewer', label: 'Tree view' }
];

export default function PaneSwitcher({ activePane, onPaneSelected }) {
  return (
    <nav className="paneSwitcher">
      {PANES.map(({ key, label }) => (
        <button
          key={key}
          className={activePane === key ? 'active' : ''}
          onClick={() => onPaneSelected(key)}>
          {label}
        </button>
      ))}
    </nav>
  );
}
