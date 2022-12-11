
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter ,Routes, Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
const pageSize = 6;
const [progress,setProgress] = useState(0)
const apiKey = process.env.REACT_APP_NEWS_API 
 
  
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
         <Route path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize = {pageSize} category='general'/>}/>
         <Route path="/business" element={<News setProgress = {setProgress} apiKey={apiKey}  key="business"pageSize = {pageSize} category='business'/>}/>
         <Route path="/entertaiment" element={<News setProgress = {setProgress} apiKey={apiKey}  key="entertaiment" pageSize = {pageSize} catagory='entertaiment'/>}/>
         <Route path="/general" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize = {pageSize} category='general'/>}/>
         <Route path="/health" element={<News setProgress = {setProgress} apiKey={apiKey}  key="health"pageSize = {pageSize} category='health'/>}/>
         <Route path="/science" element={<News setProgress = {setProgress} apiKey={apiKey}  key="science"pageSize = {pageSize} category='science'/>}/>
         <Route path="/sport" element={<News setProgress = {setProgress} apiKey={apiKey}  key="sport"pageSize = {pageSize} category='sport'/>}/>
         <Route path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize = {pageSize} category='technology'/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
export default App;
