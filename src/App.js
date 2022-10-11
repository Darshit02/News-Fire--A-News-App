
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={<News key="general" pageSize = {this.pageSize} category='general'/>}/>
         <Route path="/business" element={<News  key="business"pageSize = {this.pageSize} category='business'/>}/>
         <Route path="/entertaiment" element={<News  key="entertaiment"pageSize = {this.pagesize} catagory='entertaiment'/>}/>
         <Route path="/general" element={<News key="general" pageSize = {this.pageSize} category='general'/>}/>
         <Route path="/health" element={<News  key="health"pageSize = {this.pageSize} category='health'/>}/>
         <Route path="/science" element={<News  key="science"pageSize = {this.pageSize} category='science'/>}/>
         <Route path="/sport" element={<News  key="sport"pageSize = {this.pageSize} category='sport'/>}/>
         <Route path="/technology" element={<News key="technology" pageSize = {this.pageSize} category='technology'/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
