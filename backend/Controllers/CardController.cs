using backend.DTO.BoardDTO;
using backend.Models;
using backend.Repository.Cards;
using backend.Services.CardsFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;
[ApiController]
[Route("api/cards")]
public class CardController(ICardService cardService) : ControllerBase

{
    public readonly ICardService _cardService = cardService;

    [HttpGet("GetCards")]
    [Authorize(Roles = "admin")]
    public ActionResult<List<Card>> GetCards()
    {
        return _cardService.GetAllCards();
    }

    [HttpPost("PostCard")]

    public ActionResult<Card> CreateBoard(CardRequestDto cardRequestDto)
    {
        return _cardService.CreateNewCard(cardRequestDto);
    }


    [HttpDelete("{id}")]

    public ActionResult<Card> DeleteById(int id)
    {
        Card? card = _cardService.DeleteCards(id);
        if (card == null)
        {
            return NotFound();
        }

        return NoContent();

    }
}