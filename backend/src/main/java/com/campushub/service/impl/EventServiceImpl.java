package com.campushub.service.impl;

import com.campushub.dto.ClubDto;
import com.campushub.dto.EventDto;
import com.campushub.entity.Club;
import com.campushub.entity.Event;
import com.campushub.entity.User;
import com.campushub.exception.ResourceNotFoundException;
import com.campushub.repository.ClubRepository;
import com.campushub.repository.EventRepository;
import com.campushub.repository.UserRepository;
import com.campushub.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private ClubRepository clubRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public List<EventDto> getAllEvents() {
        return eventRepository.findAll()
                .stream()
                .map(this::toDto)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClubDto> getClubOptions() {
        return clubRepository.findAll(Sort.by(Sort.Direction.ASC, "name"))
                .stream()
                .map(this::toClubDto)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public EventDto getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));

        return toDto(event);
    }

    @Override
    @Transactional
    public EventDto createEvent(EventDto eventDto) {
        Event event = new Event();

        event.setTitle(requireTitle(eventDto.getTitle()));
        event.setDescription(eventDto.getDescription());
        event.setEventDate(eventDto.getEventDate());
        event.setLocation(eventDto.getLocation());
        event.setClub(resolveClub(eventDto.getClubId()));
        event.setCreatedBy(resolveCreatedBy(eventDto.getCreatedById()));

        return toDto(eventRepository.save(event));
    }

    @Override
    @Transactional
    public EventDto updateEvent(Long id, EventDto eventDto) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));

        if (eventDto.getTitle() != null) {
            event.setTitle(requireTitle(eventDto.getTitle()));
        }

        if (eventDto.getDescription() != null) {
            event.setDescription(eventDto.getDescription());
        }

        if (eventDto.getEventDate() != null) {
            event.setEventDate(eventDto.getEventDate());
        }

        if (eventDto.getLocation() != null) {
            event.setLocation(eventDto.getLocation());
        }

        if (eventDto.getClubId() != null) {
            event.setClub(resolveClub(eventDto.getClubId()));
        }

        if (eventDto.getCreatedById() != null) {
            event.setCreatedBy(resolveCreatedBy(eventDto.getCreatedById()));
        }

        return toDto(eventRepository.save(event));
    }

    @Override
    @Transactional
    public void deleteEvent(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));

        eventRepository.delete(event);
    }

    private EventDto toDto(Event event) {
        EventDto dto = new EventDto();
        dto.setId(event.getId());
        dto.setTitle(event.getTitle());
        dto.setDescription(event.getDescription());
        dto.setEventDate(event.getEventDate());
        dto.setLocation(event.getLocation());
        dto.setClubId(event.getClub() != null ? event.getClub().getId() : null);
        dto.setCreatedById(event.getCreatedBy() != null ? event.getCreatedBy().getId() : null);
        return dto;
    }

    private ClubDto toClubDto(Club club) {
        ClubDto dto = new ClubDto();
        dto.setId(club.getId());
        dto.setName(club.getName());
        dto.setDescription(club.getDescription());
        dto.setCreatedById(club.getCreatedBy() != null ? club.getCreatedBy().getId() : null);
        return dto;
    }

    private String requireTitle(String title) {
        if (title == null || title.isBlank()) {
            throw new ResourceNotFoundException("title is required and cannot be blank");
        }

        return title;
    }

    private Club resolveClub(Long clubId) {
        if (clubId == null) {
            throw new ResourceNotFoundException("clubId is required - every event must belong to a club");
        }

        return clubRepository.findById(clubId)
                .orElseThrow(() -> new ResourceNotFoundException("Club not found with id: " + clubId));
    }

    private User resolveCreatedBy(Long userId) {
        if (userId == null) {
            return null;
        }

        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }
}
