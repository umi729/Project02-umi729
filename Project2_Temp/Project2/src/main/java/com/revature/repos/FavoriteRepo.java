package com.revature.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Favorite;

@Repository
public interface FavoriteRepo extends JpaRepository<Favorite, Integer> {

	public Optional<List<Favorite>> findByUser_userId(int id);
	public Optional<List<Favorite>> findByMovie_movieId(int id);
	public Optional<Favorite> findByUser_userIdAndMovie_movieId(int uid, int mid);
}
