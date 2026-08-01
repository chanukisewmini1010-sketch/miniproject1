package com.campushub.service;

import com.campushub.dto.ClubDto;
import com.campushub.dto.EventDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Service contract for Event management.
 */
public interface EventService {

    Page<EventDto> getAllEvents(String search, Pageable pageable);

    List<EventDto> getUpcomingEvents(int limit);

    List<ClubDto> getClubOptions();

    EventDto getEventById(Long id);

    EventDto createEvent(EventDto eventDto);

    EventDto updateEvent(Long id, EventDto eventDto);

    void deleteEvent(Long id);
}
