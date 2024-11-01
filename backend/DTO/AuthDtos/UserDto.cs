namespace backend.DTO.AuthDtos;

public record UserDto(string Id ,string Username, List<string> AdminCode);