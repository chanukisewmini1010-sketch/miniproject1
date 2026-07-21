package com.campushub.service.impl;

import com.campushub.dto.FeedbackDto;
import com.campushub.repository.FeedbackRepository;
import com.campushub.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * Placeholder implementation of FeedbackService.
 * TODO (Member 6): implement mapping between Feedback entity and FeedbackDto,
 * and add real business logic for each method below.
 */
@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public List<FeedbackDto> getAllFeedback() {
        // TODO: fetch feedback and map to FeedbackDto list
        return Collections.emptyList();
    }

    @Override
    public FeedbackDto getFeedbackById(Long id) {
        // TODO: fetch feedback by id and map to FeedbackDto
        return null;
    }

    @Override
    public FeedbackDto createFeedback(FeedbackDto feedbackDto) {
        // TODO: map FeedbackDto to entity, save, and return saved FeedbackDto
        return null;
    }

    @Override
    public FeedbackDto updateFeedback(Long id, FeedbackDto feedbackDto) {
        // TODO: fetch existing feedback, update fields, save, and return updated FeedbackDto
        return null;
    }

    @Override
    public void deleteFeedback(Long id) {
        // TODO: delete feedback by id
    }
}
