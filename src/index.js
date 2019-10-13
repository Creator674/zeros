 module.exports = function zeros(expression) {
    let zeros = 0,
      five_c =0,
      ten_c = 0,
      two_c = 0,
      calc_five = 0,
      calc_two = 0;
    let num_arr = expression.split('*');


function devide_by_ten(number){
  if(number % 10 == 0){
    ten_c++;
    devide_by_ten(number/10);
  }
return ten_c;
}

function devide_by_five(number){

  if(number % 5 == 0){
    five_c++;
    devide_by_five(number/5);
  }
  return five_c;
}

function devide_by_two(number){

  if(number % 2 == 0){
    two_c++;
    devide_by_two(number/2);
  }
  return two_c;
}

function num_decay(number,k){
  let arr = [];
    let hmt = 0;
    for(let a = 0;a<number/k;a++){
      if(number> 0){
        arr.push(number-k*hmt);
        hmt++;
      }
    }
  return arr;
}
let rep_counter = 0;
function rearm(){
      five_c =0,
      ten_c = 0,
      two_c = 0;
      
};


  for(let i = 0;i<num_arr.length;i++){
    rep_counter=0;
    num_arr[i] = num_arr[i].replace('!','');
    rep_counter++;
    if(num_arr[i].indexOf('!') !== -1){
      num_arr[i] = num_arr[i].replace('!','');
      rep_counter++;
    }
   let current_arr = (num_decay(num_arr[i],rep_counter));
    console.log(current_arr);

     for(let u=0;u<current_arr.length;u++){

      devide_by_five(current_arr[u]);
      if(five_c !== 0){current_arr[u] = current_arr[u] / (5 * five_c);}
      calc_five+=five_c;
      rearm();

      devide_by_two(current_arr[u]);
      if(two_c !== 0){current_arr[u] = current_arr[u] / (2 * two_c);}
      calc_two+=two_c;
      rearm();
    }
    if(calc_five < calc_two){
      zeros+=calc_five;
    }
  }

  if(calc_five>calc_two){
    return calc_two;
  }
  else{
    return calc_five;
  }
}
