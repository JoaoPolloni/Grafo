import {colaborador, colaboradorObs} from "../colaborador/colaborador.type"
import Departamento from "src/departamento/departamento"

class Empresa{
    private Departamentos: Departamento[] = new Array()

    public GetDepartamentos(){
        return this.Departamentos
    }

    public SetDepartamentos(Departamento: Departamento){
        this.Departamentos.push(Departamento)
        return
    }

    public FindDepartamentoWithDepartamento(Departamento: Departamento){
        const obj = this.Departamentos.find((item) => {
            if(JSON.stringify(item) === JSON.stringify(Departamento)){
                return item
            }
        })

        return obj
    }

    public FindDepartamentoWithIndex(index: number){
        const obj = this.Departamentos[index]

        return obj
    }

    public FindDepartamentoWithColaborador(Colaborador: colaborador){
        const data = this.Departamentos.find(item=>{
            const colaboradores = item.GetColaboradores()
            const isMember = colaboradores.find(col =>{
                if (JSON.stringify(col) === JSON.stringify(Colaborador)){
                    return item
                }
            })
            return isMember
        });
        
        return data;
    };

    public FindSubordinados(Colaborador: colaborador){
        if (!Colaborador.Gerente){
            return;
        };

        const data = this.FindDepartamentoWithColaborador(Colaborador);
        if (!data){
            return
        }
        return data.GetSubordinados();
    };

    public GetColaboradorObs(Colaborador: colaborador){
        if (Colaborador.Gerente){
            return this.GerenteObs(Colaborador);
        };
        return this.SubordinadoObs(Colaborador);
    };

    private GerenteObs(Colaborador: colaborador){
        const data = this.FindDepartamentoWithColaborador(Colaborador);
        if(!data){
            return;
        };
        const obj: colaboradorObs = {
            Gerente: Colaborador.Nome,
            Departamento: data.GetColaboradores()
        };
        return obj;
    };

    private SubordinadoObs(Colaborador: colaborador){
        const data = this.FindDepartamentoWithColaborador(Colaborador);
        if(!data){
            return;
        };
        const Colaboradores = data.GetColaboradores()
        const Gerente = Colaboradores.find(item => item.Gerente)
        if(!Gerente){
            return
        }
        const obj: colaboradorObs = {
            Gerente: Gerente.Nome,
            Departamento: Colaboradores
        }
        return obj;
    };
}

export default Empresa