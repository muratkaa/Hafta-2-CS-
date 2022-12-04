let water="water";
let coffee="coffee";
let milk="milk";
let cups="cups";
let cappucino="cappucino";
let latte= "latte";
let espresso="espresso";

machine = {
    water:400,
    coffee:120,
    milk:540,
    money:550,
    cup:9

}

const Espresso = {
    water:250,
    coffee:16,
    milk:0,
    money:4,
    cup:1
}
const Latte = {
    water:350,
    coffee:20,
    milk:75,
    money:7,
    cup:1
}
const Cappucino = {
    water:200,
    coffee:12,
    milk:100,
    money:6,
    cup:1
}
function buy(_coffee,_amount)
{
    let sayac=0;
    let dongu=0;                
    switch(_coffee){
        case "espresso":
            while (sayac==0) {

                if(dongu!=_amount){
                    if (machine.water>=(_amount*Espresso.water)){
                        if (machine.coffee>=(_amount*Espresso.coffee)){
                            if(machine.cup>=_amount*Espresso.cup){
                                machine.water=machine.water-(_amount*Espresso.water);
                                machine.coffee=machine.coffee-(_amount*Espresso.coffee);
                                machine.money=machine.money+(_amount*Espresso.money);
                                machine.cup=machine.cup-(_amount*Espresso.cup);
                                console.log(`I gave you ${_amount} ${_coffee}.\n`);
                                dongu+=1;
                                break;
                                
                            }
                            else    
                            {sayac=1;
                            break;}
                        }        
                        else
                            {sayac=1;
                            break;}
                    }    
                    else
                        {sayac=1;
                        break;}
                    }
                else {
                    sayac=1;
                    break;
                }
                }
                
            break;

        case "latte":
           
            while (sayac==0) {
                if(dongu!=_amount){
                    if (machine.water>=(_amount*Latte.water)){
                        if(machine.milk>=(_amount*Latte.milk)){
                            if (machine.coffee>=(_amount*Latte.coffee)){
                                if(machine.cup>=_amount*Latte.cup){
                                    machine.water=machine.water-(_amount*Latte.water);
                                    machine.milk=machine.milk-(_amount*Latte.milk);
                                    machine.coffee=machine.coffee-(_amount*Latte.coffee);
                                    machine.money=machine.money+(_amount*Latte.money);
                                    machine.cup=machine.cup-(_amount*Latte.cup);
                                    console.log(`I gave you ${_amount} ${_coffee}.\n`);    
                                    dongu+=1;
                                    break;
                                   
                                }
                                else    
                                {sayac=1;
                                break;}
                            }        
                            else
                                {sayac=1;
                                break;}
                        }
                        else
                            {sayac=1;
                            break;}
                    }    
                    else
                        {sayac=1;
                        break;}
                }
                else {
                    sayac=1;
                    break;
                }
   
            }  
            break;
            

        case "cappucino":
            while (sayac==0) {
                if(dongu!=_amount){
                    if (machine.water>=(_amount*Cappucino.water)){
                        if(machine.milk>=(_amount*Cappucino.milk)){
                            if (machine.coffee>=(_amount*Cappucino.coffee)){
                                if(machine.cup>=_amount*Cappucino.cup){
                                    machine.water=machine.water-(_amount*Cappucino.water);
                                    machine.milk=machine.milk-(_amount*Cappucino.milk);
                                    machine.coffee=machine.coffee-(_amount*Cappucino.coffee);
                                    machine.money=machine.money+(_amount*Cappucino.money);
                                    machine.cup=machine.cup-(_amount*Cappucino.cup);
                                    console.log(`I gave you ${_amount} ${_coffee}.\n`);
                                    dongu+=1;
                                    break;
                                   
                                }
                                else    
                                {sayac=1;
                                break;}
                            }        
                            else
                                {sayac=1;
                                break;}
                        }
                        else
                            {sayac=1;
                            break;}
                    }    
                    else
                        {sayac=1;
                        break;}
                }
                else {
                    sayac=1;
                    break;
                }
   
            }
            break;
            
        
    }
    
}

function fill(_supply,_amount)
{
    
    switch(_supply){
        case "water":
            machine.water=machine.water+_amount;
            break;
        case "milk":
            machine.milk=machine.milk+_amount;
            break;
        case "coffee":
            machine.coffee=machine.coffee+_amount;
            break;
        case "cups":
            machine.cup=machine.cup+_amount;
             break; 
        case "money":
            machine.money=machine.money+_amount;
            break;
        
    }        
}

function take()
{   
    if (machine.money!=0){
        console.log("I gave you $"+machine.money+"\n");
        machine.money=0;
    }
    else
        console.log("Machine is already out of money.");
}

function remaining()
{
    console.log("The coffee machine has: \n"
        +machine.water+" ml water\n"
        +machine.milk +" ml milk\n"
        +machine.coffee +" g coffee\n"
        +machine.cup +" cups\n"
        +"$"+machine.money + " money\n"
        );
}

function start(string)
{
    var stringArray = string.split(' ');
    
    for (i=0;i<stringArray.length;i++)

    {
        
        if (stringArray[i]=='buy'){
            buy(stringArray[i+1],stringArray[i+2]);
        }
        if (stringArray[i]=='fill'){
            
            fill(stringArray[i+1],+stringArray[i+2]);

        }
        if(stringArray[i]=='take')
        {
            take();
        }
        if (stringArray[i]=='remaining'){
            remaining();
        }
       
    }
}
start("remaining , fill water 100 , take ,  buy latte 1 , remaining , take");




















 