package com.example.OnlineStoreForOrganicVeggieAndFruits.dto.request;

import com.example.OnlineStoreForOrganicVeggieAndFruits.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private String name;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
    private Long phone;    
    private String address;
}
