import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { AbsentProvider } from './components/absents/absentContext';

function App() {
  return (
      <div className="App">
        <AbsentProvider>
          <Header />
          <Footer />
        </AbsentProvider>

      </div>
  );
}

export default App;
