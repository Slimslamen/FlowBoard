using backend.Models;

namespace backend.Repository.Cards;


public interface ICardRepo
{
    List<Card> GetAllCards();
    List<Card> GetAllUSerCards(string userId);
    
    Card CreateCard(Card card);

    Card? DeleteCards(int id);

}