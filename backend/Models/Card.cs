namespace backend.Models;

public class Card(string title)
{
    public int Id;
    public string Title {get; set;} = title;
    public List<Tasks>? Task {get;set;}
} 