using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Tasks(string taskName, int boardId)
{
    public int Id;
    public string TaskName { get; set; } = taskName;
    public string State { get; set; } = "yes";

    [ForeignKey("Board")]
    public int BoardId { get; set; } = boardId;
    public Board? Board { get; set; }
   /*  public List<Card>? Cards { get; set; } */
}