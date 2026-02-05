import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import Navbar from "./components/Navbar";



const App = () => {
 
  return (
    <div className=' min-h-screen w-full bg-gradient-to-r from-gray-900 via bg-cyan-900 to-gray-950 text-white '>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/collection" element={<CollectionPage/>}
        />
      </Routes>
      
    </div>

  );
}

export default App