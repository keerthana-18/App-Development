package com.example.OnlineStoreForOrganicVeggieAndFruits.service;

import java.util.List;

import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.request.UserRequest;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.response.CountResponse;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
