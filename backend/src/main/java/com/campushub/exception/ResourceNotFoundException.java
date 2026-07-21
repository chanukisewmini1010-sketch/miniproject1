package com.campushub.exception;

/**
 * Thrown when a requested resource (User, Club, Event, etc.) cannot be found.
 * TODO (team): throw this from service implementations once real lookups are added.
 */
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
