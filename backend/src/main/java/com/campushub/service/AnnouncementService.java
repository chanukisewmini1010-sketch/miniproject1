package com.campushub.service;

import com.campushub.dto.AnnouncementDto;

import java.util.List;

/**
 * Service contract for Announcement management.
 * TODO (Member 6): implement business logic in AnnouncementServiceImpl.
 */
public interface AnnouncementService {

    List<AnnouncementDto> getAllAnnouncements();

    AnnouncementDto getAnnouncementById(Long id);

    AnnouncementDto createAnnouncement(AnnouncementDto announcementDto);

    AnnouncementDto updateAnnouncement(Long id, AnnouncementDto announcementDto);

    void deleteAnnouncement(Long id);
}
