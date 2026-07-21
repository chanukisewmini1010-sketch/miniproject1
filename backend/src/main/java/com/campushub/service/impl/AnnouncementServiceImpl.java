package com.campushub.service.impl;

import com.campushub.dto.AnnouncementDto;
import com.campushub.repository.AnnouncementRepository;
import com.campushub.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * Placeholder implementation of AnnouncementService.
 * TODO (Member 6): implement mapping between Announcement entity and AnnouncementDto,
 * and add real business logic for each method below.
 */
@Service
public class AnnouncementServiceImpl implements AnnouncementService {

    @Autowired
    private AnnouncementRepository announcementRepository;

    @Override
    public List<AnnouncementDto> getAllAnnouncements() {
        // TODO: fetch announcements and map to AnnouncementDto list
        return Collections.emptyList();
    }

    @Override
    public AnnouncementDto getAnnouncementById(Long id) {
        // TODO: fetch announcement by id and map to AnnouncementDto
        return null;
    }

    @Override
    public AnnouncementDto createAnnouncement(AnnouncementDto announcementDto) {
        // TODO: map AnnouncementDto to entity, save, and return saved AnnouncementDto
        return null;
    }

    @Override
    public AnnouncementDto updateAnnouncement(Long id, AnnouncementDto announcementDto) {
        // TODO: fetch existing announcement, update fields, save, and return updated AnnouncementDto
        return null;
    }

    @Override
    public void deleteAnnouncement(Long id) {
        // TODO: delete announcement by id
    }
}
