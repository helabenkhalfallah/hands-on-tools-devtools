import { createRoot } from 'react-dom/client';

import MainApp from './MainApp.jsx';

const domNode = document.getElementById('app-root');
const root = createRoot(domNode);

root.render(<MainApp />);
