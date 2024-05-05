function comments(arrInput) {
    const users = [];
    const articles = [];

    class User {
        constructor(name) {
            this.name = name;
            this.comments = [];
        }
    }

    class Article {
        constructor(name) {
            this.name = name;
            this.comments = [];
        }
    }

    class Comment {
        constructor(user, title, content) {
            this.user = user;
            this.title = title;
            this.content = content;
        }
    }

    for (const text of arrInput) {
        if (text.includes('user')) {
            const username = text.replace('user ', '');
            const newUser = new User(username);
            users.push(newUser);

        } else if (text.includes('article')) {
            const articleName = text.replace('article ', '');
            const newArticle = new Article(articleName);
            articles.push(newArticle);

        } else {
            const info = text.split(': ');
            const [username, articleName] = info[0].split(' posts on ');
            const foundUser = users.find(user => user.name === username);
            const foundArticle = articles.find(article => article.name === articleName);

            if (!(foundUser) || !(foundArticle)){
                continue;
            }

            const [commentTitle, commentContent] = info[1].split(', ');
            const newComment = new Comment(foundUser, commentTitle, commentContent);
            foundUser.comments.push(newComment);
            foundArticle.comments.push(newComment);
        }
    }

    const sortedArticlesByComments = articles.sort((a, b) => b.comments.length - a.comments.length);

    const result = [];

    sortedArticlesByComments.forEach(article => {
        result.push(`Comments on ${article.name}`);
        const sortedCommentsByUser = article.comments.sort((a, b) => a.user.name.localeCompare(b.user.name));
        sortedCommentsByUser.forEach(comment => {
            result.push(`--- From user ${comment.user.name}: ${comment.title} - ${comment.content}`);
        })
    })

    return result.join('\n');

}

console.log(comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']))