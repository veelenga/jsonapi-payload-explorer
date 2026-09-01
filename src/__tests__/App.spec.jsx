// @vitest-environment jsdom
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

beforeAll(() => {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  document.createRange = () => {
    const range = new Range();
    range.getBoundingClientRect = () => ({
      x: 0, y: 0, top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0
    });
    range.getClientRects = () => ({ item: () => null, length: 0, [Symbol.iterator]: [][Symbol.iterator] });
    return range;
  };
});

test('renders editor and tree view with the sample payload', async () => {
  const container = document.body.appendChild(document.createElement('div'));

  await act(async () => {
    createRoot(container).render(<App />);
  });

  expect(container.textContent).toContain('JSON:API Payload Explorer');
  expect(container.textContent).toContain('Autoformat');
  expect(container.textContent).toContain('Parse cURL');
  expect(container.querySelector('.searchBar input')).not.toBeNull();
});
