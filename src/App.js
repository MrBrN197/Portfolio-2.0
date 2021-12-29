import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GridBox from './components/GridBox';

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <GridBox>
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1609452232133-e5f64791531d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" srcSet="" />
        </GridBox>
      </div>
    </>
  );
}

export default App;
