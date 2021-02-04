import { Action } from './ngrx-fake/ngrx';

// Los reducer siempre devuelven un estado
function reducer(state = 10, action: Action) {
  
  switch (action.type) {
    case 'INCREMENTAR':
      return ++state;
    break;
    
    case 'DECREMENTAR':
      return --state;
    break;
    
    case 'MULTIPLICAR':
      return state * action.payload;
    break;
    
    case 'DIVIDIR':
      return state / action.payload;
    break;

    default:
      return state;
    break;

  }
  
}


// Usar el reducer

const incrementadorAction: Action = {
  type: 'INCREMENTAR'
};


console.log(reducer(10, incrementadorAction)); // 11

const decrementadorAction: Action = {
  type: 'DECREMENTAR'
};

console.log(reducer(10, decrementadorAction)); // 9

const multiplicarAction: Action = {
  type: 'MULTIPLICAR',
  payload: 2
};

console.log(reducer(10, multiplicarAction)); // 20

const dividirAction: Action = {
  type: 'DIVIDIR',
  payload: 5
};

console.log(reducer(10, dividirAction)); // 2