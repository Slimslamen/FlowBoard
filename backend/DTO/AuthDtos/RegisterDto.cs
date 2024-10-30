namespace backend.DTO.AuthDtos;

public record RegisterDto(string Username, string Email, string Password, int? AdminCode);