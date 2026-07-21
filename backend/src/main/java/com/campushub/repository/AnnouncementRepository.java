package com.campushub.repository;

import com.campushub.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    // TODO (Member 6): add custom query methods as needed
}
