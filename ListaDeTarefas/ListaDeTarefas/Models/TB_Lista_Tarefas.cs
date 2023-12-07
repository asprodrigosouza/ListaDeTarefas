
using System.Collections.Generic;

namespace ListaDeTarefas.Models
{
    public class TB_Lista_Tarefas
    {
        public int ID { get; set; }
        public string Tarefa { get; set; }
        public string Status { get; set; }
        public string Responsavel { get; set; }
        public string Prioridade { get; set; }

        public List<TB_Lista_Tarefas> Lista_Tarefas { get; set; }

        //public TB_Lista_Tarefas(int ID, string tarefa, string status, string responsavel, string prioridade)
        //{
        //    this.ID = ID;
        //    Tarefa = tarefa;
        //    Status = status;
        //    Responsavel = responsavel;
        //    Prioridade = prioridade;
        //}
    }
}