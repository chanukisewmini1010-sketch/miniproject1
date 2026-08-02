package com.campushub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegistrationDto {
    private Long id;
    private Long eventId;
    private Long userId;
    private String status; // PENDING, CONFIRMED, CANCELLED
}
