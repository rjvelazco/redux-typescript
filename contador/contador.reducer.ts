import { Action } from '../ngrx-fake/ngrx';

// Los reducer siempre devuelven un estado
export function contadorReducer(state = 10, action: Action) {
  
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