import React from 'react'
import * as C from "./styles"
import ResumeItem from '../ResumeItem'
import {FaRegArrowAltCircleUp,FaRegArrowAltCircleDown,FaDollarSign,} from "react-icons/fa"

const Resumo = ({income, expense, total}) => {
  return( <C.container>
    <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
    <ResumeItem title="Saidas" Icon={FaRegArrowAltCircleDown} color="red" value={expense}/>
    <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.container>
  )
}

export default Resumo;