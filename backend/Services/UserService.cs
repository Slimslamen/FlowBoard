using backend.Models;
using backend.Repository;

namespace backend.Services;

public class UserService(IUserRepo repo) : IUserService
{
    private readonly IUserRepo _repo = repo;
    public Card CreateResponseCard(Card card)
    {
       return _repo.CreateCard(card);
    }

    public Tasks CreateResponseTask(Tasks task)
    {
       return _repo.CreateTask(task);
    }

    public List<Card> GetAllResponseCards()
    {
       return _repo.GetAllCards();
    }

}