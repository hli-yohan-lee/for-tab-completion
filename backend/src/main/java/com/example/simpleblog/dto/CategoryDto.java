package com.example.simpleblog.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public class CategoryDto {
    
    private Long id;
    
    @NotBlank(message = "카테고리명은 필수입니다")
    @Size(min = 1, max = 50, message = "카테고리명은 1-50자 사이여야 합니다")
    private String name;
    
    @Size(max = 200, message = "설명은 200자 이하여야 합니다")
    private String description;
    
    private LocalDateTime createdAt;
    
    // Constructors
    public CategoryDto() {}
    
    public CategoryDto(String name, String description) {
        this.name = name;
        this.description = description;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
} 