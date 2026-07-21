package com.campushub.repository;

import com.campushub.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // TODO (Member 4): add custom query methods as needed
}
