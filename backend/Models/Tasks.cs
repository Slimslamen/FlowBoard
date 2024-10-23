namespace backend.Models;

public class Tasks(string taskName)
{
    public int Id;
    public string TaskName {get;set;} = taskName;
}