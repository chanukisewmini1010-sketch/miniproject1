package com.campushub.service;

import com.campushub.dto.EventDto;

import java.util.List;

/**
 * Service contract for Event management.
 * TODO (Member 4): implement business logic in EventServiceImpl.
 */
public interface EventService {

    List<EventDto> getAllEvents();

    EventDto getEventById(Long id);

    EventDto createEvent(EventDto eventDto);

    EventDto updateEvent(Long id, EventDto eventDto);

    void deleteEvent(Long id);
}
