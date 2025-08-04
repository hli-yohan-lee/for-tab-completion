package com.example.simpleblog.service;

import com.example.simpleblog.dto.UserDto;
import com.example.simpleblog.entity.User;
import com.example.simpleblog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public UserDto createUser(UserDto userDto) {
        // 중복 검사
        if (userRepository.existsByUsername(userDto.getUsername())) {
            throw new RuntimeException("이미 존재하는 사용자명입니다");
        }
        
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new RuntimeException("이미 존재하는 이메일입니다");
        }
        
        // 엔티티 생성
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword()); // 실제로는 암호화해야 함
        
        // 저장
        User savedUser = userRepository.save(user);
        
        // DTO로 변환하여 반환
        UserDto result = new UserDto();
        result.setId(savedUser.getId());
        result.setUsername(savedUser.getUsername());
        result.setEmail(savedUser.getEmail());
        result.setCreatedAt(savedUser.getCreatedAt());
        
        return result;
    }
    
    public List<UserDto> getAllUsers() {
        return userRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    public UserDto getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return convertToDto(user.get());
        }
        throw new RuntimeException("사용자를 찾을 수 없습니다");
    }
    
    public UserDto getUserByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            return convertToDto(user.get());
        }
        throw new RuntimeException("사용자를 찾을 수 없습니다");
    }
    
    private UserDto convertToDto(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setCreatedAt(user.getCreatedAt());
        return dto;
    }
} 