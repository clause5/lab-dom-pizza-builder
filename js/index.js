// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom =>{
    if(state.mushrooms){
      mushroom.style.visibility = 'visible';
    }else{
      mushroom.style.visibility = 'hidden';
    }
  });

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPepper =>{
    if(state.greenPeppers){
      greenPepper.style.visibility = 'visible';
    }else{
      greenPepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
 
  if(state.whiteSauce){
    
    document.querySelector('.sauce').className ="sauce sauce-white"
  
  }else{
    document.querySelector('.sauce').className = 'sauce';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  if(state.glutenFreeCrust){
    document.querySelector('.crust').className = 'crust crust-gluten-free';
  }else{
    document.querySelector('.crust').className = 'crust';
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //document.querySelector('.btn-pepperoni')
  let btnPepperoni = document.querySelector('.btn-pepperoni');
  state.pepperoni ? btnPepperoni.className = 'btn btn-pepperoni active' : btnPepperoni.className = 'btn btn-pepperoni';
 
  let btnMushrooms = document.querySelector('.btn-mushrooms');
  state.mushrooms ? btnMushrooms.className = 'btn btn-mushrooms active' : btnMushrooms.className = 'btn btn-mushrooms';

  let btnGreenPeppers = document.querySelector('.btn-green-peppers');
  state.greenPeppers ? btnGreenPeppers.className = 'btn btn-green-peppers active' : btnGreenPeppers.className = 'btn btn-green-peppers';
 
  let btnSauce = document.querySelector('.btn-sauce');
  state.whiteSauce ? btnSauce.className = 'btn btn-sauce active' : btnSauce.className = 'btn btn-sauce';

  let btnCrust = document.querySelector('.btn-crust');
  state.glutenFreeCrust ? btnCrust.className = 'btn btn-crust active' : btnCrust.className = 'btn btn-crust';
 
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //basePrice

  state.pepperoni ? document.getElementById('price-pepperoni').style.display= 'block' : document.getElementById('price-pepperoni').style.display ='none';
  
  state.mushrooms ? document.getElementById('price-mushrooms').style.display= 'block' : document.getElementById('price-mushrooms').style.display ='none';

  state.greenPeppers ? document.getElementById('price-green-peppers').style.display= 'block' : document.getElementById('price-green-peppers').style.display ='none';

  state.whiteSauce ? document.getElementById('price-sauce').style.display= 'block' : document.getElementById('price-sauce').style.display ='none';

  state.glutenFreeCrust ? document.getElementById('price-crust').style.display= 'block' : document.getElementById('price-crust').style.display ='none';


   let total =10;
  if(state.pepperoni){
   total++;
    
  }
  if(state.mushrooms){
    total++;
  }
  if(state.greenPeppers){
    total++;
  }
  
  if(state.whiteSauce){
    total +=3;
  }
  if(state.glutenFreeCrust){
    total +=5;
  }
 
  document.getElementById('total').innerHTML = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  
  
  state.pepperoni = !state.pepperoni;
  
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', ( )=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
}); 
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () =>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', ()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})