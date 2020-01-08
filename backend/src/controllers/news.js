import mongoose from "mongoose";
import NewsSchema from "../models/news";
import resStatuses from "../config/resStatuses";

const { UNAUTHORIZED, NOT_FOUND, CONFLICT } = resStatuses;

function validateTitle(title) {
    return NewsSchema.findOne({
        title: title
    }).then(result => {
        return !result;
    });
}

exports.getNewsList = (req, res, next) => {
    NewsSchema.find({}, {}, (err, news) => {
        if (err || !news) {
            res.status(UNAUTHORIZED).send({
                message: "Wystąpił problem z autoryzacją!"
            });
            next(err);
        } else if (!news) {
            res.status(NOT_FOUND).send({ message: "Nie znaleziono żadnego wpisu!" });
        } else {
            res.json({ message: "Lista wpisów została znaleziona.", news });
        }
    });
};

exports.getNewsById = (req, res, next) => {
    let newsId = mongoose.Types.ObjectId(req.body.id);
    NewsSchema.findOne({ _id: newsId }, (err, news) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: "Wystąpił problem z autoryzacją!"
            });
            next(err);
        } else if (!news) {
            res.status(NOT_FOUND).send({ message: "Nie znaleziono wpisu!" });
        } else {
            console.log(news);
            res.json({
                message: "Wyszukiwanie wpisu zakończyło się powodzeniem.",
                singleNews: news
            });
        }
    });
};

exports.modifyNewsById = (req, res, next) => {
    let newsId = mongoose.Types.ObjectId(req.body.id);

    NewsSchema.updateOne(
        { _id: newsId },
        {
            $set: req.body
        },
        (err, singleNews) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message: "Wystąpił problem z autoryzacją!"
                });
                next(err);
            } else if (!singleNews) {
                res.status(NOT_FOUND).send({
                    message: "Nie znaleziono wpisu o wybranym identyfikatorze!"
                });
            } else {
                console.log(singleNews);
                res.json({ message: "Wpis został zmodyfikowany!", singleNews });
            }
        }
    );
};

exports.deleteNewsById = (req, res, next) => {
    let newsId = mongoose.Types.ObjectId(req.body.id);

    NewsSchema.deleteOne({ _id: newsId }, (err, news) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: "Wystąpił problem z autoryzacją!"
            });
            next(err);
        } else if (!news.deletedCount) {
            res.status(NOT_FOUND).send({ message: "Nie ma takiego wpisu!" });
        } else {
            console.log(news);
            res.json({ message: "Wybrany wpis został usunięty!" });
        }
    });
};

exports.createNews = (req, res, next) => {
    validateTitle(req.body.title).then(valid => {
        if (valid) {
            NewsSchema.create(
                {
                    title: req.body.title,
                    content: req.body.content,
                    author: req.body.author,
                    date: req.body.date,
                    category: req.body.category
                },
                (error, result) => {
                    if (error) next(error);
                    else
                        res.json({
                            message: "Wpis został skutecznie utworzony!"
                        });
                }
            );
        } else {
            res.status(CONFLICT).send({
                message:
                    "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!"
            });
        }
    });
};
