function set_value(v) {
    console.log(v);
    let x=document.getElementById('in_value').value
    document.getElementById('in_value').value=x+v
}

function solve_that() {
    let x=document.getElementById('in_value').value
    document.getElementById('result_value').innerHTML=eval(x)
}

function clear_value(params) {
    document.getElementById('in_value').value=''
}