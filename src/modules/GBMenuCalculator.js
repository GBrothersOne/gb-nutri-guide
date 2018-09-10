import foods from '../data/foods'
export const ADD_FOOD = 'GBMenuCalculator/ADD_FOOD'
export const REMOVE_FOOD = 'GBMenuCalculator/REMOVE_FOOD'
export const QUANTITY_CHANGE = 'GBMenuCalculator/QUANTITY_CHANGE'

const initialState = {
  menus: {
    breakfast: {
      name: 'breakfast',
      label: "Petit déjeuner",
      components: [],
      energy: 0,
      part: 25,
    },
    meal: {
      name: 'meal',
      label: "Déjeuner",
      components: [],
      energy: 0,
      part: 35,
    },
    supper: {
      name: 'supper',
      label: "Dîner",
      components: [],
      energy: 0,
      part: 30,
    },
    snack: {
      name: 'snack',
      label: "Collations",
      components: [],
      energy: 0,
      part: 10,
    },
  },
  macros: {
    proteins: 0,
    lipids: 0,
    carbohydrats: 0,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_FOOD:
      const addComponents = state.menus[action.menu].components.slice(0)
      if (!addComponents.filter( item => (item.name === action.food.name)).length) {
        addComponents.push({
           name: action.food.name, 
           label: action.food.label,
           quantity: action.food.portion,
           unit: action.food.unit 
        })
      }
      return processing({
        ...state,
        menus: {
          ...state.menus,
          [action.menu]: {
            ...state.menus[action.menu],
            components: addComponents
          }
        }
      })

    case REMOVE_FOOD:
      const removeComponents = state.menus[action.menu].components.slice(0).filter( 
        item => (item.name !== action.name)
      )
      return processing({
        ...state,
        menus: {
          ...state.menus,
          [action.menu]: {
            ...state.menus[action.menu],
            components: removeComponents
          }
        }
      })

    case QUANTITY_CHANGE:
      const changeComponents = state.menus[action.menu].components.slice(0)
      const index = changeComponents.findIndex(item => item.name === action.name)
      changeComponents[index].quantity = action.quantity
      return processing({
        ...state,
        menus: {
          ...state.menus,
          [action.menu]: {
            ...state.menus[action.menu],
            components: changeComponents
          }
        }
      })

    default:
      return state
  }
}

export const handleAddFood = (menu, food) => {
  return dispatch => {
    dispatch({
      type: ADD_FOOD,
      menu: menu,
      food: food,
    })
  }
}

export const handleQuantityChange = (menu, name, quantity) => {
  return dispatch => {
    dispatch({
      type: QUANTITY_CHANGE,
      menu: menu,
      name: name,
      quantity: quantity,
    })
  }
}

export const handleRemoveFood = (menu, name) => {
  return dispatch => {
    dispatch({
      type: REMOVE_FOOD,
      menu: menu,
      name: name,
    })
  }
}

function processing (state) {

  var proteins = 0;
  var lipids = 0;
  var carbohydrats = 0;
  var energies = {};
  
  Object.entries(state.menus).forEach( (menu) => {

    var energy = 0;

    menu[1].components.forEach( (component) => {
      
      const food = foods.filter( food => (food.name === component.name))

      const base = Number(food[0].macros.base)
      const prAmount = Number(food[0].macros.proteins)
      const lpAmount = Number(food[0].macros.lipids)
      const chAmount = Number(food[0].macros.carbohydrats)
      const enAmount = Number(food[0].macros.energy)

      const quantity = Number(isNaN(component.quantity)?0:component.quantity)

      proteins += prAmount / base * quantity
      lipids += lpAmount / base * quantity
      carbohydrats += chAmount / base * quantity
      energy += enAmount / base * quantity
    })

    energies[menu[1].name] = energy

  })
   
  return {
    ...state,
    macros: {
      proteins: proteins,
      lipids: lipids,
      carbohydrats: carbohydrats,
    },
    menus: {
      breakfast: {
        ...state.menus.breakfast,
        energy: energies['breakfast']
      },
      meal: {
        ...state.menus.meal,
        energy: energies['meal']
      },
      supper: {
        ...state.menus.supper,
        energy: energies['supper']
      },
      snack: {
        ...state.menus.snack,
        energy: energies['snack']
      },
    }
  }
}

//PROTHÈSES

if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i);
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };

if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}