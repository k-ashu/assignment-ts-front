import React from 'react';
import Tree from 'react-d3-tree';
import './tree.css' 


export default function TreeStructure ({data}){
    return (
      <div className="wrapper" id="treeWrapper" style={{
        width: '100%',
        height: '55em',
        }} >
        <Tree className="tree" style={{
          }}
          data={data} orientation = "vertical" collapsible="false"/>
      </div>
    );
  
}
