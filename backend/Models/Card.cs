using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Card(string title, string boardId)
{
    public int Id;
    public string Title {get; set;} = title;
    
    [ForeignKey("Board")]
    public string BoardId {get; set;} = boardId;
    public List<Board>? Boards { get; set; } 
    public List<Tasks>? Task {get;set;}
} 