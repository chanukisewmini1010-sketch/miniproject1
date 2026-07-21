package com.campushub.service.impl;

import com.campushub.dto.EventDto;
import com.campushub.repository.EventRepository;
import com.campushub.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * Placeholder implementation of EventService.
 * TODO (Member 4): implement mapping between Event entity and EventDto,
 * and add real business logic for each method below.
 */
@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<EventDto> getAllEvents() {
        // TODO: fetch events and map to EventDto list
        return Collections.emptyList();
    }

    @Override
    public EventDto getEventById(Long id) {
        // TODO: fetch event by id and map to EventDto
        return null;
    }

    @Override
    public EventDto createEvent(EventDto eventDto) {
        // TODO: map EventDto to entity, save, and return saved EventDto
        return null;
    }

    @Override
    public EventDto updateEvent(Long id, EventDto eventDto) {
        // TODO: fetch existing event, update fields, save, and return updated EventDto
        return null;
    }

    @Override
    public void deleteEvent(Long id) {
        // TODO: delete event by id
    }
}
