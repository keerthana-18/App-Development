package com.example.OnlineStoreForOrganicVeggieAndFruits.service;

import java.util.List;

import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.request.ProductRequest;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.response.CountResponse;
import com.example.OnlineStoreForOrganicVeggieAndFruits.dto.response.ProductResponse;
import com.example.OnlineStoreForOrganicVeggieAndFruits.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

    CountResponse productCount();

}
