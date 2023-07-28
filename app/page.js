"use client"
import React from 'react';
import './global.css';
import Section from './software/App';

require('dotenv').config()

export default function Home() {
  return (
    <main>
        <Section />
    </main>
  )
}
