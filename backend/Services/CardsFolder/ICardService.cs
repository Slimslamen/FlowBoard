using backend.DTO;
using backend.DTO.BoardDTO;
using backend.Models;

namespace backend.Services.CardsFolder;

public interface ICardService
{
    List<Card> GetAllCards();
    Card CreateNewCard(CardRequestDto cardRequestDto);

    Card? DeleteCards(int id);

}