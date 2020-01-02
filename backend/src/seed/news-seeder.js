import NewsSchema from "../models/news";

async function isNewsExists() {
    const exec = await NewsSchema.find().exec();
    return (exec.length = 0);
}

// Initialize first news
export const initializeNewsData = async () => {
    if (!(await isNewsExists())) {
        const news = [
            new NewsSchema({
                title: "news testowy",
                content: "dzień dobry!",
                author: "admin",
                date: new Date(),
                category: "technical"
            })
        ];
        let done = 0;
        for (let i = 0; i < news.length; i++) {
            news[i].save((err, result) => {
                done++;
            });
        }
    }
};
