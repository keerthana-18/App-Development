package com.example.OnlineStoreForOrganicVeggieAndFruits.service;

import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.request.AuthenticationRequest;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.request.RegisterRequest;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
