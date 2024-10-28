namespace backend.Profiles;

using AutoMapper;

using backend.DTO.CardDTOs;
using backend.Models;


public class CardProfile : Profile{
    public CardProfile()
    {
        CreateMap<CardRequestDto, Card>();
        CreateMap<Card, CardRequestDto>();
    }
}