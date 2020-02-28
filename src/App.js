import React from 'react';
import './App.css';

import TreeStructure from './components/tree/tree'
import fetch from 'node-fetch';

// const myTreeData = [
//   {"inorder_index":30,"name":"Gwynne Shotwell","designation":"CEO","children":[{"inorder_index":20,"name":"Tim Hughes","designation":"CFO","children":[{"inorder_index":15,"name":"Gwynne Shotwell","designation":"Manager","children":[{},{"inorder_index":17,"name":"Bret Johnsen","designation":"SSD","children":[{},{}]}]},{"inorder_index":25,"name":"Joy Dunn","designation":"Manager","children":[{},{}]}]},{"inorder_index":40,"name":"Andy Lambert","designation":"CTO","children":[{"inorder_index":35,"name":"Umer Khan","designation":"Manager","children":[{},{}]},{"inorder_index":50,"name":"Hans Koenigsmann","designation":"Manager","children":[{"inorder_index":45,"name":"Mark Ruff","designation":"SSD","children":[{},{}]},{}]}]}]},
// ];

const url = 'http://localhost:8080/api'
async function fetchData (updateTreeData){
  const result = await fetch(url)
  const data = await result.json()
  const treeData = []
  treeData.push(data)
  updateTreeData(treeData)
}

function App() {
  const [treeData, updateTreeData] = React.useState([])
  React.useEffect(()=>{
    fetchData(updateTreeData)
  },[])
  
  return (
    <div className="App">
      {treeData.length===0?<div>Loading</div>:<TreeStructure data={treeData} orientation='vertical'/>}
    </div>
  );
}

export default App;
