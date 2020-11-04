// Your code here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrap = `*`) {
    return function result(adjective) {
        return `You are ${wrap}${adjective}${wrap}!`
    }
}

const Calculator = {

    add : function(a,b) {
        return a + b
    },
    subtract : function(a,b) {
        return a - b
    },
    multiply : function(a,b) {
        return a * b
    },
    divide : function(a,b) {
        return a / b
    }
}

function actionApplyer(start, ray){
    let a = start

    for (let i = 0; i < ray.length; i++ ){
        a = ray[i](a)
    }

  return a
}