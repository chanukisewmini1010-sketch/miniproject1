package com.campushub.service;

import com.campushub.dto.ClubDto;
import com.campushub.dto.EventDto;

import java.util.List;

/**
 * Service contract for Event management.
 */
public interface EventService {

    List<EventDto> getAllEvents();

    List<ClubDto> getClubOptions();

    EventDto getEventById(Long id);

    EventDto createEvent(EventDto eventDto);

    EventDto updateEvent(Long id, EventDto eventDto);

    void deleteEvent(Long id);
}
