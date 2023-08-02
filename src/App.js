
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import UserReview from './components/UserReview';
import Footer from './components/Footer';
import Blog from './components/Blog';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <About></About>
      <UserReview></UserReview>
      <Blog></Blog>
      <Footer></Footer>
    </>
  );
}

export default App;
