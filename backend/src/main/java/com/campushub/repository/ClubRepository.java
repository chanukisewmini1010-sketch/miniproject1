package com.campushub.repository;

import com.campushub.entity.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    // TODO (Member 3): add custom query methods as needed
}
