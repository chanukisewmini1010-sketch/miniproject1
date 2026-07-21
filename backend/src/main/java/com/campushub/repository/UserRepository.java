package com.campushub.repository;

import com.campushub.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // TODO (Member 2): add custom query methods as needed, e.g. findByEmail
}
