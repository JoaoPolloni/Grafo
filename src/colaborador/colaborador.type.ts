export interface colaborador{
    Nome: string,
    Gerente: boolean
}

export interface colaboradorObs{
    Gerente: string,
    Departamento: colaborador[]
}
