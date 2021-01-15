import React, { Component } from 'react' ;
import Header from "./components/Header" ;
import './App.css';

function App() {
  return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vibefy</title>
    <link rel="icon" href="../assets/images/svgs/headphones_head.svg" type="image/svg" />
    <link rel="stylesheet" href="../css/style.css" />
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <style>
    .header-right a:hover {'{'}
        background-color: #FF00EB;
        color: black;
        {'}'}

.content .fas {'{'}
        font-size: 1.4375rem;
        background: #FF00EB;
        height: 45px;
        width: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 50%;
        transition: 0.3s;
        cursor: pointer;
        {'}'}

body::-webkit-scrollbar-thumb {'{'}
        background: #FF00EB;
        {'}'}
    </style>
    
    <style>="background-color:#141418;"</style>
    <header id="header"></header>
    <nav class="navbar"></nav>
    <main>
        <img src="../assets/images/png/music.jpg" style="display: block; margin-left: auto; margin-right: auto;" />
    </main>
    <footer id="my_footer"></footer>

    </div>
    
  );
}

export default App;
