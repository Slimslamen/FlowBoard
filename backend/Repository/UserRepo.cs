using backend.Data;
using backend.Models;
namespace backend.Repository;


public class UserRepo(FlowboardContext db) : IUserRepo
{
    private readonly FlowboardContext _db = db;
    public Card CreateCard(Card card)
    {
        _db.Cards.Add(card);
        _db.SaveChanges();
        return card;
    }

    public Tasks CreateTask(Tasks task)
    {
        _db.Tasks.Add(task);
        _db.SaveChanges();
        return task;
    }

    public List<Card> GetAllCards()
    {
        return _db.Cards.ToList();
    }
}