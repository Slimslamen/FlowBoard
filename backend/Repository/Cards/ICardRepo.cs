using backend.Models;

namespace backend.Repository.Cards;


public interface ICardRepo
{
    List<Card> GetAllCards();
    
    Card CreateCard(Card card);

}