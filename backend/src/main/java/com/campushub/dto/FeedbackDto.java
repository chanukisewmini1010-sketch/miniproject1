package com.campushub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object for Feedback.
 * TODO (Member 6): map fields to/from the Feedback entity in the service layer.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackDto {
    private Long id;
    private Long eventId;
    private Long userId;
    private Integer rating;
    private String comments;
}
