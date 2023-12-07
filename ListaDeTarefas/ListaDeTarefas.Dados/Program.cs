using ListaDeTarefas.Controllers;

namespace ListaDeTarefas.Dados
{
    internal class Program
    {
        static void Main(string[] args)
        {
            HomeController tarefas = new HomeController();

            //Métodos CRUD
            tarefas.ConsultarTarefas();

            //tarefas.InserirTarefa("","","","");

            //tarefas.AtualizarTarefa(1);

            //tarefas.DeletarTarefa(2);

        }
    }
}
