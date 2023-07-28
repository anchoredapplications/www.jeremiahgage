"use client"
import React from 'react';
import './global.css';
import Section from './software/App';
import { BrowserRouter, Routes, Route} from "react-router-dom";

require('dotenv').config()

export default function Home() {
  return (
    <main>
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Section/>}   
                />
                <Route 
                    path="/auth" 
                    element={"auth"}   
                />           
                <Route path="*" element={<Section/>} />
            </Routes>
        </BrowserRouter>
    </main>
  )
}
