package com.campushub.service.impl;

import com.campushub.dto.RegistrationDto;
import com.campushub.entity.Event;
import com.campushub.entity.Registration;
import com.campushub.entity.User;

import com.campushub.repository.EventRepository;
import com.campushub.repository.UserRepository;
import com.campushub.repository.RegistrationRepository;

import com.campushub.service.RegistrationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Placeholder implementation of RegistrationService.
 * TODO (Member 5): implement mapping between Registration entity and RegistrationDto,
 * and add real business logic for each method below.
 */
@Service
public class RegistrationServiceImpl implements RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<RegistrationDto> getAllRegistrations() {
        // TODO: fetch registrations and map to RegistrationDto list
        return registrationRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());;
    }

    @Override
    public RegistrationDto getRegistrationById(Long id) {
        // TODO: fetch registration by id and map to RegistrationDto
        return null;
    }

    @Override
    public RegistrationDto createRegistration(RegistrationDto registrationDto) {
        // TODO: map RegistrationDto to entity, save, and return saved RegistrationDto
        return null;
    }

    @Override
    public RegistrationDto updateRegistration(Long id, RegistrationDto registrationDto) {
        // TODO: fetch existing registration, update fields, save, and return updated RegistrationDto
        return null;
    }

    @Override
    public void deleteRegistration(Long id) {
        // TODO: delete registration by id
    }
}
