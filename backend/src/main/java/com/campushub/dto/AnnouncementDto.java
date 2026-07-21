package com.campushub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object for Announcement.
 * TODO (Member 6): map fields to/from the Announcement entity in the service layer.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnnouncementDto {
    private Long id;
    private Long clubId;
    private String title;
    private String content;
    private Long postedById;
}
