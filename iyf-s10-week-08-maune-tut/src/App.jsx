import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import './App.css';

// 1. We define the PostCard right here so there are no import errors!
function PostCard({ title, excerpt, author, date }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '15px 0', 
      borderRadius: '12px', 
      background: 'white', 
      color: '#f9090957',
      textAlign: 'left'
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
      <p style={{ fontSize: '1.1rem' }}>{excerpt}</p>
      <div style={{ fontSize: '0.8rem', color: '#ff1e1e3f', marginTop: '15px' }}>
        <span>By {author}</span> • <span>{date}</span>
      </div>
    </div>
  );
}

// 2. The Main App
function App() {
  return (
    <div className="app">
      <Header />
      
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        padding: '30px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
        {/* Sidebar on Left */}
        <div style={{ flex: '1' }}>
          <Sidebar />
        </div>

        {/* Feed on Right */}
        <main style={{ flex: '3' }}>
          <h1 style={{ color: 'pink', marginBottom: '20px' }}>Community Feed</h1>
          
          <PostCard 
            title="Assignment Complete!" 
            excerpt="I successfully implemented Props and Layout Composition for Week 8." 
            author="Maune" 
            date="April 21, 2026" 
          />

          <PostCard 
            title="React Journey" 
            excerpt="Ready to start Week 9 and dive into React Hooks and State!" 
            author="Maune" 
            date="April 21, 2026" 
          />

          <PostCard 
            title="Nairobi Tech Community" 
            excerpt="Connecting with other developers at IYF Weekend Academy." 
            author="Maune" 
            date="April 21, 2026" 
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;