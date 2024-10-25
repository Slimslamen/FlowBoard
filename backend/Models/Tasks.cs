using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Tasks(string taskName, string cardId)
{
    public int Id;
    public string TaskName { get;set; } = taskName;

    [ForeignKey("Card")]
    public string CardId { get;set; } = cardId;
    public List<Card>? Cards { get;set; }
}