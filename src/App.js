import Header from './components/Header';
import Section from './components/Section';
import Cart from './components/Cart';

function App() {
  return (
    <div className=" container max-w-5xl mx-auto  flex flex-col justify-center items-center">
      <Header />
      <Section />
      <Cart />
    </div>
  );
}

export default App;
