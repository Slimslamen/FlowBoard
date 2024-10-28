using AutoMapper;
using backend.DTO.CardDTOs;
using backend.Models;
using backend.Repository.Cards;

namespace backend.Services.CardsFolder;

public class CardService(ICardRepo cardRepo, IMapper mapper) : ICardService
{

    public readonly ICardRepo _cardRepo = cardRepo;
    public readonly IMapper _mapper = mapper;
    public Card CreateNewCard(CardRequestDto cardRequestDto)
    {
        Card card = _mapper.Map<Card>(cardRequestDto);
        Card newCard = _cardRepo.CreateCard(card);
        return _mapper.Map<Card>(newCard);
    }

    public List<Card> GetAllCards()
    {
        return _cardRepo.GetAllCards();
    }
    public Card? DeleteCards(int id)
    {
       return _cardRepo.DeleteCards(id);
    }

    public List<CardRequestDto> GetAllUserCards(string boardId)
    {
         var userCards = _cardRepo.GetAllUSerCards(boardId);
        return _mapper.Map<List<CardRequestDto>>(userCards);
    }
}

