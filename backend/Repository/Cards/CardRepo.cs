using backend.Data;
using backend.Models;

namespace backend.Repository.Cards;


public class CardRepo(FlowboardContext db) : ICardRepo

{

    private readonly FlowboardContext _db = db;
    public Card CreateCard(Card card)
    {
        _db.Cards.Add(card);
        _db.SaveChanges();
        return card;
    }

    public List<Card> GetAllCards()
    {
        return _db.Cards.ToList();
    }

    public Card? DeleteCards(int id)
    {
        Card? card = _db.Cards.Find(id);
        if (card != null)
        {
            _db.Cards.Remove(card);
            _db.SaveChanges();
            return card;

        }
        else
        {
            return null;
        }
    }
}