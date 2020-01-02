import ArticlesSchema from "../models/articles";

async function isArticleExists() {
    const exec = await ArticlesSchema.find().exec();
    return (exec.length = 0);
}

// Initialize first article
export const initializeArticlesData = async () => {
    if (!(await isArticleExists())) {
        const article = [
            new ArticlesSchema({
                allocationKey: "test-article",
                title: "Artykuł testowy",
                content: "Inicjalizacja kolekcji artykułów. Dzień dobry!",
                author: "admin",
                date: new Date()
            })
        ];
        let done = 0;
        for (let i = 0; i < article.length; i++) {
            article[i].save((err, result) => {
                done++;
            });
        }
    }
};
