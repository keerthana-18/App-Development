package com.example.OnlineStoreForOrganicVeggieAndFruits.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.request.UserRequest;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.response.CountResponse;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.response.UserResponse;
import com.example.OnlineStoreForOrganicVeggieAndFruits.model.User;
import com.example.OnlineStoreForOrganicVeggieAndFruits.model.enumerate.Role;

import com.example.OnlineStoreForOrganicVeggieAndFruits.repository.UserRepository;
import com.example.OnlineStoreForOrganicVeggieAndFruits.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public UserResponse updateUser(UserRequest request, Long uid) {
        User user = userRepository.findByUid(uid);
        User newUser = new User();
        if (user != null) {
            newUser = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(user.getPassword())
                    .role(user.getRole())
                    .isEnabled(request.getIsEnabled())
                    .address(request.getAddress())
                    .phone(request.getPhone())
                    .build();
            userRepository.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

  

    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .address(user.getAddress())
                .phone(user.getPhone())
                .build();
    }

    @Override
    public CountResponse userCount() {
        long count = userRepository.count();
        return CountResponse.builder().count(count).build();
    }

	@Override
	public boolean deleteProduct(Long uid) {
		// TODO Auto-generated method stub
		return false;
	}

}
