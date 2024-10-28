using backend.DTO;
using backend.DTO.CardDTOs;
using backend.Models;

namespace backend.Services.CardsFolder;

public interface ICardService
{
    List<Card> GetAllCards();
    List<CardRequestDto> GetAllUserCards(string boardId);
    Card CreateNewCard(CardRequestDto cardRequestDto);

    Card? DeleteCards(int id);

}