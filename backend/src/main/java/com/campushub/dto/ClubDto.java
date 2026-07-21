package com.campushub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object for Club.
 * TODO (Member 3): map fields to/from the Club entity in the service layer.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClubDto {
    private Long id;
    private String name;
    private String description;
    private Long createdById;
}
