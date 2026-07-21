package com.campushub.service.impl;

import com.campushub.dto.UserDto;
import com.campushub.repository.UserRepository;
import com.campushub.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * Placeholder implementation of UserService.
 * TODO (Member 2): implement mapping between User entity and UserDto,
 * and add real business logic for each method below.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserDto> getAllUsers() {
        // TODO: fetch users and map to UserDto list
        return Collections.emptyList();
    }

    @Override
    public UserDto getUserById(Long id) {
        // TODO: fetch user by id and map to UserDto
        return null;
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        // TODO: map UserDto to entity, save, and return saved UserDto
        return null;
    }

    @Override
    public UserDto updateUser(Long id, UserDto userDto) {
        // TODO: fetch existing user, update fields, save, and return updated UserDto
        return null;
    }

    @Override
    public void deleteUser(Long id) {
        // TODO: delete user by id
    }
}
