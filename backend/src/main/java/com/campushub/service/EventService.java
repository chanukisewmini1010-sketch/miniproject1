package com.campushub.service;

import com.campushub.dto.ClubDto;
import com.campushub.dto.EventDto;

import java.util.List;

/**
 * Service contract for Event management.
 */
public interface EventService {

    List<EventDto> getAllEvents();

    /**
     * Clubs available to pick from when creating or editing an event.
     *
     * Lives here rather than in ClubService so Event Management is not blocked
     * on Member 3. Once ClubServiceImpl.getAllClubs() returns real data, the
     * frontend can point at /api/clubs instead and this can be removed.
     */
    List<ClubDto> getClubOptions();

    EventDto getEventById(Long id);

    EventDto createEvent(EventDto eventDto);

    EventDto updateEvent(Long id, EventDto eventDto);

    void deleteEvent(Long id);
}
