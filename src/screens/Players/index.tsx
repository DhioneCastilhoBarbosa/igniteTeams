import React from "react";
import { Container } from "./styled";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Players(){
  return(
    <Container>
      <Header showBackButton/>
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
    </Container>
  )
}