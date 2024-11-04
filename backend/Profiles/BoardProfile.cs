using AutoMapper;
using backend.DTO.BoardDTO;
using backend.Models;

namespace backend.Profiles;

public class BoardProfile : Profile
{
    public BoardProfile()
    {
        CreateMap<BoardRequestDto, Board>();
        CreateMap<Board, BoardResponseDTO>();
    }
}