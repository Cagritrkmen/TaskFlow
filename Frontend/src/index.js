import ReactDOM from 'react-dom';


function App() {
  return <h1>Webpack and Babel</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);