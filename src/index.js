import React from 'react';
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){

  const description = "Peculiar type of ration emerged from the depths of hell. Its appearance veiled in obscurity, its origins shrouded in mystery, its existence rumored to date back to the dawn of time itself."

  const disclaimer = "Not a meal for the faint-hearted. The creator of this recipe shall not be held liable for any harm or injuries, whether physical or emotional, incurred by those who attempt to prepare it."
  const step1 = ''
  const step2 = ''
  const step3 = ''
  const steps = [step1, step2, step3]



  let deathCount = 0;
  function deathCountAdd() {
    deathCount = deathCount+1;
  }

  return (
    <>
      <div>
        <h2>My Receipe</h2>
        <h1>Yummy Chocolate Noodle *Cursed</h1>
      </div>

      <body>
        {description}
      </body>

      <div id="preface">
        <div>Disclaimer:</div>
        <div>{disclaimer}</div>
        
      </div>

      <div id="steps">
        <div>
          step 1: {steps[0]}
        </div>

        <div>
          step 2: {steps[0]}
        </div>

      </div>

      <div>
        the current puke count is {deathCount}
        <button onclick={deathCountAdd}>I puked</button>
      </div>


    </>
  )


}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

