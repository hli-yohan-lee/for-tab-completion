package com.example.simpleblog.service;

import com.example.simpleblog.dto.PostDto;
import com.example.simpleblog.entity.Post;
import com.example.simpleblog.entity.User;
import com.example.simpleblog.entity.Category;
import com.example.simpleblog.repository.PostRepository;
import com.example.simpleblog.repository.UserRepository;
import com.example.simpleblog.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {
    
    @Autowired
    private PostRepository postRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    public PostDto createPost(PostDto postDto) {
        // 사용자 확인
        Optional<User> user = userRepository.findById(postDto.getUserId());
        if (!user.isPresent()) {
            throw new RuntimeException("사용자를 찾을 수 없습니다");
        }
        
        // 카테고리 확인
        Optional<Category> category = categoryRepository.findById(postDto.getCategoryId());
        if (!category.isPresent()) {
            throw new RuntimeException("카테고리를 찾을 수 없습니다");
        }
        
        // 엔티티 생성
        Post post = new Post();
        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        post.setUser(user.get());
        post.setCategory(category.get());
        
        // 저장
        Post savedPost = postRepository.save(post);
        
        // DTO로 변환하여 반환
        return convertToDto(savedPost);
    }
    
    public List<PostDto> getAllPosts() {
        return postRepository.findAllWithUserAndCategory().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    public PostDto getPostById(Long id) {
        Optional<Post> post = postRepository.findById(id);
        if (post.isPresent()) {
            return convertToDto(post.get());
        }
        throw new RuntimeException("게시글을 찾을 수 없습니다");
    }
    
    public List<PostDto> getPostsByUserId(Long userId) {
        return postRepository.findByUserIdWithUserAndCategory(userId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    public List<PostDto> getPostsByCategoryId(Long categoryId) {
        return postRepository.findByCategoryIdWithUserAndCategory(categoryId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    private PostDto convertToDto(Post post) {
        PostDto dto = new PostDto();
        dto.setId(post.getId());
        dto.setTitle(post.getTitle());
        dto.setContent(post.getContent());
        dto.setUserId(post.getUser().getId());
        dto.setCategoryId(post.getCategory().getId());
        dto.setUsername(post.getUser().getUsername());
        dto.setCategoryName(post.getCategory().getName());
        dto.setCreatedAt(post.getCreatedAt());
        dto.setUpdatedAt(post.getUpdatedAt());
        return dto;
    }
} 