// GET INPUTS
let breakfast =  document.getElementsByName('breakfast');
let lunch = document.getElementsByName('lunch');
let dinner = document.getElementsByName('dinner');
let snack = document.getElementsByName('snack');

// Checked inputs
function getCheckedElement(x) {
    let result;
    for(let i = 0; i < x.length; i++){
        if(x[i].checked){
            result = x[i].value
        }
    }
    return result;
};

// SNACKS ---- calories & cost ----- checkbox button
function getCheckedSnack() {
    let result = [];
    for(let i = 0; i < snack.length; i++){
        if(snack[i].checked){
            result.push(snack[i])
        }
    }
    for(let i = 0; i < result.length; i++){
        result[i] = _memory._snack[result[i].value];
    }
    return result;
}
function snackCalories(){
    let sumCal = 0;
    let snackArr = getCheckedSnack();
     for(let i = 0; i < snackArr.length; i++){
         sumCal += snackArr[i].calories
     }
     return sumCal;
}



// FACTORY FUNCTION FOR EACH DAY OF THE WEEK transform variable into the object in _memory
function dayFactory (br, ln, din, calBurned) {
    return {
     breakfast: _memory._breakfast[br],
     lunch: _memory._lunch[ln],
     dinner: _memory._dinner[din],
     calBurned: calBurned,
     }
  };



// LIST OF POSIBLE MEALS
const _memory = {
    _breakfast: {
        _porridge: {
            calories: 450,
            cost: 0,
        },
        _toast: {
            calories: 650,
            cost: 0,
        },
        _nothing: {
          calories: 0,
          cost: 0,
        },
        get nothing(){
            return this._nothing
        },
        get porridge(){
            return this._porridge
        },
        get toast(){
            return this._toast;
        }
    },
    _lunch: {
        _soup: {
            calories: 300,
            cost: 0,
        },
        _pasta: {
            calories: 300,
            cost: 0,
        },
       _nothing: {
          calories: 0,
          cost: 0,
        },
        _pizza: {
            calories: 570,
            cost: 0,
        },
        _burrito: {
            calories: 700,
            cost: 0,
        },
        _falafel: {
            calories: 600,
            cost: 0,
        },
        get pizza(){
            return this._pizza;
        },
        get burrito(){
            return this._burrito;
        },
        get falafel(){
            return this._falafel;
        },
        get nothing(){
            return this._nothing
        },
        get soup(){
            return this._soup;
        },
        get pasta(){
            return this._pasta;
        }

    },
    _dinner: {
        _yogurt: {
            calories: 440,
            cost: 0,
        },
        _nothing: {
          calories: 0,
          cost: 0,
        },
        _pizza: {
            calories: 570,
            cost: 0,
        },
        _burrito: {
            calories: 700,
            cost: 0,
        },
        _falafel: {
            calories: 600,
            cost: 0,
        },
        get pizza(){
            return this._pizza;
        },
        get burrito(){
            return this._burrito;
        },
        get falafel(){
            return this._falafel;
        },
        get nothing(){
            return this._nothing
        },
        get yogurt(){
            return this._yogurt;
        }

    },
    _snack: {
        _peanut: {
            calories: 270,
            cost: 0,
        },
        _hummus: {
            calories: 170,
            cost: 0,
        },
        _olives: {
            calories: 75,
            cost: 0,
        },
        _almonds: {
            calories: 176,
            cost: 0,
        },
        _cream: {
            calories: 170,
            cost: 0,
        },
        _pop: {
            calories: 250,
            cost: 0,
        },
        _nothing: {
          calories: 0,
          cost: 0,
        },
        get nothing(){
            return this._nothing
        },
        get peanut(){
            return this._peanut;
        },
        get hummus(){
            return this._hummus;
        },
        get olives(){
            return this._olives;
        },
        get almonds(){
            return this._almonds;
        },
        get cream(){
            return this._cream;
        },
        get pop(){
            return this._pop;
        }
    }
};

  // TODAY
  let day = {
    today: {},
  calories(){
    let calories = (this.today.breakfast.calories + this.today.lunch.calories + this.today.dinner.calories + snackCalories()) - this.today.calBurned;
    let targetCalories = 1570;
    let message;
  if(targetCalories < calories){
    message = 'Today you had ' + (calories - targetCalories) + ' more than you were supposed to.'
    }
  else if(targetCalories > calories){
    message = 'Ole tu chocho moreno! Today you had ' + (targetCalories - calories) + ' less than you were supposed to.'
  }
  else if(targetCalories === calories){
    message = 'Today you had the exact calories you were supposed to.'
  }
  return `<p>Target calories for today: 1570.
  Calories today: ${calories}.
  ${message}</p>`
  }
  
  };

function test(){
day.today = dayFactory(getCheckedElement(breakfast), getCheckedElement(lunch), getCheckedElement(dinner), document.getElementById('exercise').value);
document.querySelector('#text-here').style.visibility = 'visible';
document.querySelector('#text-here').innerHTML = day.calories();
document.querySelector('#text-here').style.opacity = '1';
document.querySelector('p').style.opacity = '1';
}

document.getElementById('submit').addEventListener('click', test);

  /*
  // WEEK
  const week = {
  monday: dayFactory('nothing', 'nothing', 'nothing', 'nothing', 0),
  tuesday: dayFactory('nothing', 'nothing', 'nothing', 'nothing', 0),
  wednesday: dayFactory('nothing', 'nothing', 'nothing', 'nothing', 0),
  thursday: dayFactory('nothing', 'nothing', 'nothing', 'nothing', 0),
  friday: dayFactory('nothing', 'nothing', 'nothing', 'nothing', 0),
  saturday: dayFactory('nothing', 'nothing', 'nothing', 'nothing', 0),
  sunday: dayFactory('nothing', 'nothing', 'nothing', 'nothing', 0),
  addCalories(){
  let targetCalories = 1470 * 7;
  let message;
  let weekCalories = (this.monday.breakfast.calories + this.tuesday.breakfast.calories + this.wednesday.breakfast.calories + this.thursday.breakfast.calories + this.friday.breakfast.calories + this.saturday.breakfast.calories + this.sunday.breakfast.calories + this.monday.lunch.calories + this.tuesday.lunch.calories + this.wednesday.lunch.calories + this.thursday.lunch.calories + this.friday.lunch.calories + this.saturday.lunch.calories + this.sunday.lunch.calories + this.monday.dinner.calories + this.tuesday.dinner.calories + this.wednesday.dinner.calories + this.thursday.dinner.calories + this.friday.dinner.calories + this.saturday.dinner.calories + this.sunday.dinner.calories + this.monday.snack.calories + this.tuesday.snack.calories + this.wednesday.snack.calories + this.thursday.snack.calories + this.friday.snack.calories + this.saturday.snack.calories + this.sunday.snack.calories) - (this.monday.calBurned + this.tuesday.calBurned + this.wednesday.calBurned + this.thursday.calBurned + this.friday.calBurned + this.saturday.calBurned + this.sunday.calBurned);
  if(targetCalories < weekCalories){
  message = 'This week you had ' + (weekCalories - targetCalories) + ' more than you were supposed to.'
  }
  else if(targetCalories > weekCalories){
    message = 'Ole tu chocho moreno! This week you had ' + (targetCalories - weekCalories) + ' less than you were supposed to.'
  }
  else if(targetCalories === weekCalories){
    message = 'this week you had the exact calories you were supposed to.'
  };
  return `Target calories for the week: ${targetCalories}.
  Calories this week: ${weekCalories}.
  ${message}`
  },
  addCost(){
  let totalCost = this.monday.breakfast.cost + this.tuesday.breakfast.cost + this.wednesday.breakfast.cost + this.thursday.breakfast.cost + this.friday.breakfast.cost + this.saturday.breakfast.cost + this.sunday.breakfast.cost + this.monday.lunch.cost + this.tuesday.lunch.cost + this.wednesday.lunch.cost + this.thursday.lunch.cost + this.friday.lunch.cost + this.saturday.lunch.cost + this.sunday.lunch.cost + this.monday.dinner.cost + this.tuesday.dinner.cost + this.wednesday.dinner.cost + this.thursday.dinner.cost + this.friday.dinner.cost + this.saturday.dinner.cost + this.sunday.dinner.cost + this.monday.snack.cost + this.tuesday.snack.cost + this.wednesday.snack.cost + this.thursday.snack.cost + this.friday.snack.cost + this.saturday.snack.cost + this.sunday.snack.cost;
  return `Total cost: ${totalCost}`
  }
  };

  */


  // INPUTS AND OUTPUTS
//reminder: dayFactory(breakfast, lunch, dinner, snack, caloriesBurned)
// input today
//day.today = dayFactory(getCheckedElement(breakfast), getCheckedElement(lunch), getCheckedElement(dinner), 0);