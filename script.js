
class Calculator
{
    constructor(
        previousOperandText,
        currentOperandText,
        
    )
    {
        this.previousOperandText=previousOperandText;
        this.currentOperandText=currentOperandText;
        this.clear();
    }


    clear(){
        this.currentOperand= '';
        this.previousOperand='';
        this.operation= undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === '.' & this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    changeOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand != ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand ='';   
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if(isNaN(curr) || isNaN(prev)) return;
        switch(this.operation)
        {
        case '+':
            computation = prev + curr;
            break;

        case '-':
            computation = prev - curr;
            break;

        case '*':
            computation = prev * curr;
            break;      

        case '/':
            computation = prev / curr;
            break;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand ='';
    }

    updateDislpay(){
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = this.previousOperand;
    }
}



const currentOperandText = document.querySelector('[data-current-operand]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const dataAllClear = document.querySelector('[data-allclear]');
const dataDelete = document.querySelector('[data-delete]');

console.log(operationButton);

const calculator = new Calculator(previousOperandText,currentOperandText);
console.log()

numberButton.forEach(item =>{
    item.addEventListener('click', ()=>{
        calculator.appendNumber(item.innerText);
        calculator.updateDislpay();
    })
});

dataAllClear.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDislpay();
});


operationButton.forEach(item=>{
    console.log(item.innerText);
    item.addEventListener('click',()=>{
        calculator.changeOperation(item.innerText);
        calculator.updateDislpay();
    })
});

equalsButton.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDislpay();
});

dataDelete.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDislpay();
});



