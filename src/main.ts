import Departamento from "./departamento/departamento"
import empresa from "./empresa/empresa"

function inicializarEmpresa(){
    var Comercial = new Departamento() 
    Comercial.AddColaborador("Polloni", true)
    Comercial.AddColaborador("Flavio", false)
    Comercial.AddColaborador("Joao", false)
    Comercial.AddColaborador("Chayanne", false)
    Comercial.AddColaborador("Carmen", false)

    var Vendas = new Departamento() 
    Vendas.AddColaborador("Linconln", true)
    Vendas.AddColaborador("Vanessa", false)
    Vendas.AddColaborador("Douglas", false)
    Vendas.AddColaborador("Bruna", false)
    Vendas.AddColaborador("Rogerio", false)

    var Contabilidade = new Departamento() 
    Contabilidade.AddColaborador("Robson", true)
    Contabilidade.AddColaborador("Sabrina", false)
    Contabilidade.AddColaborador("Fernando", false)
    Contabilidade.AddColaborador("Jessica", false)
    Contabilidade.AddColaborador("Alan", false)

    var Juridico = new Departamento() 
    Juridico.AddColaborador("Carlos", true)
    Juridico.AddColaborador("Juliana", false)
    Juridico.AddColaborador("Erick", false)
    Juridico.AddColaborador("Enzo", false)
    Juridico.AddColaborador("Ronaldo", false)

    var TI = new Departamento() 
    TI.AddColaborador("Polloni", true)
    TI.AddColaborador("Wesley", false)
    TI.AddColaborador("Jaqueline", false)
    TI.AddColaborador("Josimar", false)
    TI.AddColaborador("Nathan", false)

    var Empresa = new empresa()
    Empresa.SetDepartamentos(Comercial)
    Empresa.SetDepartamentos(Vendas)
    Empresa.SetDepartamentos(Contabilidade)
    Empresa.SetDepartamentos(Juridico)
    Empresa.SetDepartamentos(TI)
    return Empresa
}

function main(){    
    var Empresa = inicializarEmpresa()
    var Comercial = new Departamento() 
    Comercial.AddColaborador("Polloni", true)
    Comercial.AddColaborador("Felipe", false)
    Comercial.AddColaborador("Matheus", false)
    Comercial.AddColaborador("Eduardo", false)
    Comercial.AddColaborador("Pedro", false)

    //Retorna o departamento completo do Gerente Polloni
    //0 - Comercial / 1 - Vendas / 2 - Contabilidade / 3 - juridico / 4 - TI
     const departamentototal = Empresa.FindDepartamentoWithIndex(0)
    //Retorna os subordinados do departamento Polloni
     const funcionarios = Empresa.FindSubordinados({Nome: "Polloni", Gerente: true})
    //Retona os Detalhes gerais do gerente
     const gerencia = Empresa.GetColaboradorObs({Nome: "Polloni", Gerente: true})
    
    console.log(departamentototal)
    console.log(funcionarios)
    console.log(gerencia)
}

main();