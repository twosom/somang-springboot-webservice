package com.icloud.book.springboot.web.dto;

import com.icloud.book.springboot.domain.posts.Posts;
import lombok.Getter;

import java.time.format.DateTimeFormatter;

@Getter
public class PostsListResponseDto {

    private Long id;
    private String title;
    private String author;
    private String modifiedDate;

    public PostsListResponseDto(Posts entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.author = entity.getAuthor();
        this.modifiedDate = entity.getModifiedDate()
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss"));

    }
}
