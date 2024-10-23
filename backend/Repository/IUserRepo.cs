using backend.Models;

namespace backend.Repository;

public interface IUserRepo
{
    List<Card> GetAllCards();
    Card CreateCard(Card card);
    Tasks CreateTask(Tasks task);
}