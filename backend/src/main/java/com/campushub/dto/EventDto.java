package com.campushub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Data Transfer Object for Event.
 * TODO (Member 4): map fields to/from the Event entity in the service layer.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {
    private Long id;
    private Long clubId;
    private String title;
    private String description;
    private LocalDateTime eventDate;
    private String location;
    private Long createdById;
}
