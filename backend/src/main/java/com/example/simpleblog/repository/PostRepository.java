package com.example.simpleblog.repository;

import com.example.simpleblog.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    
    List<Post> findByUserId(Long userId);
    
    List<Post> findByCategoryId(Long categoryId);
    
    @Query("SELECT p FROM Post p JOIN FETCH p.user JOIN FETCH p.category ORDER BY p.createdAt DESC")
    List<Post> findAllWithUserAndCategory();
    
    @Query("SELECT p FROM Post p JOIN FETCH p.user JOIN FETCH p.category WHERE p.user.id = :userId ORDER BY p.createdAt DESC")
    List<Post> findByUserIdWithUserAndCategory(@Param("userId") Long userId);
    
    @Query("SELECT p FROM Post p JOIN FETCH p.user JOIN FETCH p.category WHERE p.category.id = :categoryId ORDER BY p.createdAt DESC")
    List<Post> findByCategoryIdWithUserAndCategory(@Param("categoryId") Long categoryId);
} 