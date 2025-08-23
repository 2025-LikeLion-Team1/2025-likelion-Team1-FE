// import { LandingPage } from './components/Landing'
import { MainPage } from './components/MainPage'
import './App.css'

function App() {
  return (
    <div className="w-full">
      {/*<LandingPage />*/}
      {/* MainPage는 라우팅이나 상태에 따라 조건부 렌더링할 수 있습니다 */}
      <MainPage />
    </div>
  )
}

export default App
