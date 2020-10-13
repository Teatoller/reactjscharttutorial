import React from 'react';
import './App.css';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';

function App() {
  return (
    <div className="App">
      <h1>BarChart</h1>
        <BarChartComponent/>
      <h1>PieChart</h1>
        <PieChartComponent/>
      </div>
  );
}

export default App;
