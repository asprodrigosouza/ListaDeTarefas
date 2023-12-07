using ListaDeTarefas.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ListaDeTarefas.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Tarefas()
        {
            ViewBag.Message = "Your application description page.";

            var tarefasDB = ConsultarTarefas();

            return View(tarefasDB);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Minha página de contato.";

            return View();
        }

        public List<TB_Lista_Tarefas> ConsultarTarefas()
        {
            var list = new List<TB_Lista_Tarefas>();

            try
            {
                string connectionString = "Data Source=DESKTOP-VNNKMF1\\SQLEXPRESS;Database=BDLT003;User Id=Rodrigo;Password=Gabriela@001;Integrated Security=SSPI;TrustServerCertificate=True";
                DBContext dbContext = new DBContext(connectionString);

                SqlConnection connection = new SqlConnection(connectionString);
                connection.Open();
                var con = connection;
                
                using (SqlCommand cmd = new SqlCommand("SELECT * FROM TB_Lista_Tarefas NOLOCK", con))
                using (var rdr = cmd.ExecuteReader())
                    while (rdr.Read())
                        list.Add(new TB_Lista_Tarefas
                        {
                            ID = (int)rdr["ID"],
                            Tarefa = (string)rdr["Tarefa"],
                            Status = (string)rdr["Status"],
                            Responsavel = (string)rdr["Responsavel"],
                            Prioridade = (string)rdr["Prioridade"]
                        });              
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return list;
        }
    }
}