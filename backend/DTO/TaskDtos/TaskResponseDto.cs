namespace backend.DTO.TaskDTOs;

public record TaskResponseDTO(int Id, string TaskName, string BoardId, string State);