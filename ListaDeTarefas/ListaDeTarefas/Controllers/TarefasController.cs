using System;
using System.Web.Mvc;
using ListaDeTarefas.Models;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace ListaDeTarefas.Controllers
{
    public class TarefasController : Controller
    {
        public ActionResult CriarTarefa(string tarefa, string status, string responsavel, string prioridade)
        {
            string connectionString = "Data Source=DESKTOP-VNNKMF1\\SQLEXPRESS;Database=BDLT003;User Id=Rodrigo;Password=Gabriela@001;Integrated Security=SSPI;TrustServerCertificate=True";
            DBContext dbContext = new DBContext(connectionString);

            string selectQuery = $@"INSERT INTO TB_Lista_Tarefas VALUES('{tarefa}','{status}','{responsavel}','{prioridade}')";

            dbContext.ExecutarComando(selectQuery);
            
            return null;
        }

        public ActionResult EditarTarefa(int id, string tarefa, string status, string responsavel, string prioridade)
        {
            string connectionString = "Data Source=DESKTOP-VNNKMF1\\SQLEXPRESS;Database=BDLT003;User Id=Rodrigo;Password=Gabriela@001;Integrated Security=SSPI;TrustServerCertificate=True";
            DBContext dbContext = new DBContext(connectionString);

            // Exemplo de consulta
            string selectQuery = $@"UPDATE TB_Lista_Tarefas
                                    SET Tarefa = '{tarefa}', 
                                        Status = '{status}',
                                        Responsavel = '{responsavel}',
                                        Prioridade = '{prioridade}'
                                    WHERE ID = {id}";

            dbContext.ExecutarComando(selectQuery);
            
            return null;
        }

        public ActionResult ExcluirTarefa(int id)
        {
            string connectionString = "Data Source=DESKTOP-VNNKMF1\\SQLEXPRESS;Database=BDLT003;User Id=Rodrigo;Password=Gabriela@001;Integrated Security=SSPI;TrustServerCertificate=True";
            DBContext dbContext = new DBContext(connectionString);

            string selectQuery = $@"DELETE FROM TB_Lista_Tarefas
                                    WHERE ID = {id}";
            
            dbContext.ExecutarComando(selectQuery);

            return null;
        }
    }
}