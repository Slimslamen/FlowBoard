namespace backend.DTO.AuthDtos;

public record LoginResponseDto(string UserId, List<string> Roles);