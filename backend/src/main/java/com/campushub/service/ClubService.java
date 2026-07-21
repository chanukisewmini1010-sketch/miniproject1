package com.campushub.service;

import com.campushub.dto.ClubDto;

import java.util.List;

/**
 * Service contract for Club management.
 * TODO (Member 3): implement business logic in ClubServiceImpl.
 */
public interface ClubService {

    List<ClubDto> getAllClubs();

    ClubDto getClubById(Long id);

    ClubDto createClub(ClubDto clubDto);

    ClubDto updateClub(Long id, ClubDto clubDto);

    void deleteClub(Long id);
}
