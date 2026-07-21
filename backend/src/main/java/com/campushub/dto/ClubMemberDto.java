package com.campushub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object for ClubMember.
 * TODO (Member 3): map fields to/from the ClubMember entity in the service layer.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClubMemberDto {
    private Long id;
    private Long clubId;
    private Long userId;
    private String roleInClub;
}
