import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions';
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

    case 'RESET':
      return state;
    break;
    default:
      return state;
    break;

  }
  
}


console.log( reducer(10, incrementadorAction) );
console.log( reducer(10, decrementadorAction) );
console.log( reducer(10, multiplicarAction) );
console.log( reducer(10, dividirAction) );
console.log( reducer(10, resetAction) );
