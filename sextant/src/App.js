import './App.css';
import Banner from './Banner';
import Card from './Card'; 

function App() {
  const siteTitle = "Sextant dashboard";
  const userIp = "192.168.1.1";
  const latency = "25 ms";

  return (
    <div className="App">
      <Banner siteTitle={siteTitle} /> 
      <div className="exhibit">
        <Card title="User's Public IP" value={userIp} />

        <Card title="Latency Matrics" value={latency} />
      </div>
    </div>
  );
}

export default App;
