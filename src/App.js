import React from 'react';
import './App.scss';
import {Team, Info} from './base'

import TsParticles from './components/TsParticles';
import Modal from './components/Modal'
function App() { 
  let sorteio = Team
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  
 
  return (
    <div className="app"> 
      <header className="header"> 
        <div className="headerTitle">
           <span>{Info.siteTitle}</span> 
        </div>
        <p className="headerSubTitle">"{Info.siteDescription}"</p>
       
        <Modal />
        <TsParticles className="tsParticles" />
      </header>
      <main>
        <div className="wrapper">
        <ul className="cardList" aria-label="Team"> 
          {sorteio.map(person=> (
            <li className="cardListItem" key={person.name}>
              <article className="card" tabIndex="0">
                <header>
                  <div className="cardImage" style={{backgroundImage: `url(${person.image.profile})`}}></div>
                </header>
                <section>
                  <h3 className="name">{person.name}</h3>
                  <h4 className="alias">{person.alias}</h4>
                  <h5 className="city">{person.city}</h5>
                
                  <ul aria-label="skills" className="skills" >
                    {person.skills.map((skill, index) => (
                      <li className="skill" key={index}> {skill} </li>
                    ) )}
                  </ul>
                </section>
              </article>
            </li>
          ))}
        </ul>

      </div>
      </main>
       
    
    </div>
  );
}

export default App;
