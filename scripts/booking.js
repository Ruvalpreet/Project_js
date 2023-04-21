/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost_per_day = 35;
let total_cost = 0;
let number_of_days_selected = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

let fulls = document.getElementById("full");
let halfs = document.getElementById("half");

let clears = document.getElementById("clear-button");

let calculated_cost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clicked(bruh) {
    if (!bruh.classList.contains("clicked")) {
      bruh.className = "clicked";
      number_of_days_selected++;
      billtime();
    }
    else if(bruh.classList.contains("clicked")){
        bruh.classList.remove("clicked");
        number_of_days_selected--;
        billtime();

    }
    if (bruh.style.backgroundColor == "rgb(229, 175, 66)") {
      bruh.style.backgroundColor = "";
    } 
    else {
      bruh.style.backgroundColor = "#E5AF42";
    }
  }
  
  monday.addEventListener("click", function() {
    clicked(monday);
  });
  
  tuesday.addEventListener("click", function() {
    clicked(tuesday);
  });
  
  wednesday.addEventListener("click", function() {
    clicked(wednesday);
  });
  
  thursday.addEventListener("click", function() {
    clicked(thursday);
  });
  
  friday.addEventListener("click", function() {
    clicked(friday);
  });

  


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear(){
    total_cost = 0;
    number_of_days_selected = 0;
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    monday.style.backgroundColor = "";
    tuesday.style.backgroundColor = "";
    wednesday.style.backgroundColor = "";
    thursday.style.backgroundColor = "";
    friday.style.backgroundColor = "";
    calculated_cost.innerHTML = 0;
    fulls.style.backgroundColor = "";
    halfs.style.backgroundColor = "";
    cost_per_day = 35;

}
clears.addEventListener("click", clear);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function half_day() {
    cost_per_day = 20;
    if (halfs.style.backgroundColor == "rgb(229, 175, 66)") {
        halfs.style.backgroundColor = "";
      } 
      else {
        halfs.style.backgroundColor = "#E5AF42";
        fulls.style.backgroundColor = "";
      }
   billtime();
}

halfs.addEventListener("click", half_day);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day() {
    cost_per_day = 35;
    if (fulls.style.backgroundColor == "rgb(229, 175, 66)") {
        fulls.style.backgroundColor = "";
      } 
      else {
        fulls.style.backgroundColor = "#E5AF42";
        halfs.style.backgroundColor = "";
      }
   billtime();
}

fulls.addEventListener("click", full_day);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function billtime() {
    total_cost = number_of_days_selected * cost_per_day;
    calculated_cost.innerHTML = total_cost;
}

