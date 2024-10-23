using backend.DTO;
using backend.Models;

namespace backend.Services;

public interface IUserService
{
    List<Card> GetAllResponseCards();
    Card CreateResponseCard(Card card);
    Tasks CreateResponseTask(Tasks task);

}