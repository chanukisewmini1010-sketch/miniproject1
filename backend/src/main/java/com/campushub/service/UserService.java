package com.campushub.service;

import com.campushub.dto.UserDto;

import java.util.List;

/**
 * Service contract for User management.
 * TODO (Member 2): implement business logic in UserServiceImpl.
 */
public interface UserService {

    List<UserDto> getAllUsers();

    UserDto getUserById(Long id);

    UserDto createUser(UserDto userDto);

    UserDto updateUser(Long id, UserDto userDto);

    void deleteUser(Long id);
}
