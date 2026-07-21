package com.campushub.service.impl;

import com.campushub.dto.ClubDto;
import com.campushub.repository.ClubRepository;
import com.campushub.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * Placeholder implementation of ClubService.
 * TODO (Member 3): implement mapping between Club entity and ClubDto,
 * and add real business logic for each method below.
 */
@Service
public class ClubServiceImpl implements ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Override
    public List<ClubDto> getAllClubs() {
        // TODO: fetch clubs and map to ClubDto list
        return Collections.emptyList();
    }

    @Override
    public ClubDto getClubById(Long id) {
        // TODO: fetch club by id and map to ClubDto
        return null;
    }

    @Override
    public ClubDto createClub(ClubDto clubDto) {
        // TODO: map ClubDto to entity, save, and return saved ClubDto
        return null;
    }

    @Override
    public ClubDto updateClub(Long id, ClubDto clubDto) {
        // TODO: fetch existing club, update fields, save, and return updated ClubDto
        return null;
    }

    @Override
    public void deleteClub(Long id) {
        // TODO: delete club by id
    }
}
