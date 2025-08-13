import { useEffect } from 'react';
import { LandingPage } from './components/Landing';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // 애니메이션 지속 시간(ms)
      once: true,    // 한 번만 실행
    });
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;