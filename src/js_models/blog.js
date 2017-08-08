class Blog {
  constructor({
    id,
    title,
    blogIntro,
    body,
    imageUrl,
    authorId,
    authorImageUrl,
    updatedAt,
  }) {
    this.id = id;
    this.title = title;
    this.blogIntro = blogIntro;
    this.body = body;
    this.imageUrl = imageUrl;
    this.authorId = authorId;
    this.authorImageUrl = authorImageUrl;
    this.comments = {};
    this.createdAt = `${new Date()}`;
    this.updatedAt = updatedAt ? updatedAt : this.createdAt;
  }

  addComment(comment) {
    this.comments[comment.id] = comment;
  }

  deleteComment(commentId) {
    delete this.comments[commentId];
  }
}

export default Blog