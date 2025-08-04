package com.example.simpleblog.service;

import com.example.simpleblog.dto.CategoryDto;
import com.example.simpleblog.entity.Category;
import com.example.simpleblog.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    public CategoryDto createCategory(CategoryDto categoryDto) {
        // 중복 검사
        if (categoryRepository.existsByName(categoryDto.getName())) {
            throw new RuntimeException("이미 존재하는 카테고리명입니다");
        }
        
        // 엔티티 생성
        Category category = new Category();
        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());
        
        // 저장
        Category savedCategory = categoryRepository.save(category);
        
        // DTO로 변환하여 반환
        CategoryDto result = new CategoryDto();
        result.setId(savedCategory.getId());
        result.setName(savedCategory.getName());
        result.setDescription(savedCategory.getDescription());
        result.setCreatedAt(savedCategory.getCreatedAt());
        
        return result;
    }
    
    public List<CategoryDto> getAllCategories() {
        return categoryRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    public CategoryDto getCategoryById(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        if (category.isPresent()) {
            return convertToDto(category.get());
        }
        throw new RuntimeException("카테고리를 찾을 수 없습니다");
    }
    
    public CategoryDto getCategoryByName(String name) {
        Optional<Category> category = categoryRepository.findByName(name);
        if (category.isPresent()) {
            return convertToDto(category.get());
        }
        throw new RuntimeException("카테고리를 찾을 수 없습니다");
    }
    
    private CategoryDto convertToDto(Category category) {
        CategoryDto dto = new CategoryDto();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setDescription(category.getDescription());
        dto.setCreatedAt(category.getCreatedAt());
        return dto;
    }
} 