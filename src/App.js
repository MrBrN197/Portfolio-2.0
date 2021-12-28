import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main>
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" alt="" srcSet="" />
        </main>
      </div>
    </>
  );
}

export default App;
