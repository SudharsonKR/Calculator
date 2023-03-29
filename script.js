let display= document.getElementById("display-id");

function buttons(num){
    display.value=display.value+num;
}

function AllClear(){
    display.value ='';
    }

function deletefunc()
    {
        display.value=display.value.slice(0,-1)
    }

function result(){
    try{
        display.value=eval(display.value);
    }
    catch(Errmsg)
    {
        alert('Pleae Enter Correct Formate')
    }
}