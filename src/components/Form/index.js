import React, { useState } from 'react'
import * as C from './styles'
import Grid from '../Grid';

const Form = ({handleAdd,transactionsList, setTransactionsList}) => {
    const[desc,setDesc] = useState("");
    const[amount,setAmount]= useState("");
    const[isExpense, setExpense] = useState(false)

    const generateID = () =>  Math.round(Math.random() * 1000);


    const handleSave = () =>{
        if(!desc || !amount){
            alert("Informe a descrição e o valor")
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo")
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction);

        setDesc("")
        setAmount("")
        


    }



  return (
    <>
    <C.container>
        <C.InputContent>
            <C.Label>Descrição</C.Label>
            <C.Input value={desc} onChange={(e) =>  setDesc(e.target.value)}/>
        </C.InputContent>
        <C.InputContent>
            <C.Label>Valores</C.Label>
            <C.Input value={amount} type='number' onChange={(e) => setAmount(e.target.value)}/>
        </C.InputContent>
        <C.RadioGrup>
            <C.Input type='radio' id="rIncome" defaultChecked name="group1" onChange={()=> setExpense(!isExpense)}         />
            <C.Label htmlFor="rIncome" >Entrada</C.Label>
            <C.Input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)}/>
            <C.Label htmlFor="rExpenses">Saida</C.Label>
        </C.RadioGrup>
        <C.RadioGrup>
            <C.Button onClick={handleSave}>Adicionar</C.Button>
        </C.RadioGrup>
    </C.container>
    <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form