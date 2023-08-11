(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let refresh = document.querySelector(".btn-refresh");
    let equal = document.querySelector(".btn-equal");
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value= e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function(e) { 
        if(screen.value === ''){
            screen.value = 'Please enter';
        }
        else{
            let ans = eval(screen.value);
            screen.value = ans;
        }
    })
    refresh.addEventListener('click', function(e){
        screen.value = "";
    })
})();