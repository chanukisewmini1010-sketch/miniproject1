package com.campushub.repository;

import com.campushub.entity.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    @Query("""
            select e from Event e
            where lower(e.title) like lower(concat('%', :term, '%'))
               or lower(e.location) like lower(concat('%', :term, '%'))
               or lower(e.club.name) like lower(concat('%', :term, '%'))
            """)
    Page<Event> search(@Param("term") String term, Pageable pageable);

    List<Event> findByEventDateGreaterThanEqualOrderByEventDateAsc(
            LocalDateTime from, Pageable pageable);
}
