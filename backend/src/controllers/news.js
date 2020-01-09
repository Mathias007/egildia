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
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu wpisów!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono wpisów.",
        CASE_SUCCESS_MESSAGE: "Lista wpisów została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    NewsSchema.find({}, {}, (err, news) => {
        if (err || !news) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!news) {
            res.status(NOT_FOUND).send({ message: CASE_NOT_FOUND_MESSAGE });
        } else {
            res.json({ message: CASE_SUCCESS_MESSAGE, news });
        }
    });
};

exports.getNewsById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE: "Wystąpił problem z autoryzacją!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono wpisu!",
        CASE_SUCCESS_MESSAGE: "Wyszukiwanie wpisu zakończyło się powodzeniem."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let newsId = mongoose.Types.ObjectId(req.body.id);
    NewsSchema.findOne({ _id: newsId }, (err, news) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!news) {
            res.status(NOT_FOUND).send({ message: CASE_NOT_FOUND_MESSAGE });
        } else {
            console.log(news);
            res.json({
                message: CASE_SUCCESS_MESSAGE,
                singleNews: news
            });
        }
    });
};

exports.createNews = (req, res, next) => {
    const messages = {
        CASE_CONFLICT_MESSAGE: "Wpis został skutecznie utworzony!",
        CASE_SUCCESS_MESSAGE:
            "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!"
    };

    const { CASE_CONFLICT_MESSAGE, CASE_SUCCESS_MESSAGE } = messages;

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
                            message: CASE_SUCCESS_MESSAGE
                        });
                }
            );
        } else {
            res.status(CONFLICT).send({
                message: CASE_CONFLICT_MESSAGE
            });
        }
    });
};

exports.modifyNewsById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas modyfikacji wpisu!",
        CASE_NOT_FOUND_MESSAGE:
            "Nie znaleziono wpisu o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Wpis został zmodyfikowany!"
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let newsId = mongoose.Types.ObjectId(req.body.id);

    NewsSchema.updateOne(
        { _id: newsId },
        {
            $set: req.body
        },
        (err, singleNews) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message: CASE_UNAUTHORIZED_MESSAGE
                });
                next(err);
            } else if (!singleNews) {
                res.status(NOT_FOUND).send({
                    message: CASE_NOT_FOUND_MESSAGE
                });
            } else {
                console.log(singleNews);
                res.json({ message: CASE_SUCCESS_MESSAGE, singleNews });
            }
        }
    );
};

exports.deleteNewsById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas usuwania wpisu!",
        CASE_NOT_FOUND_MESSAGE: "Nie ma wpisu o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Wybrany wpis został usunięty!"
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let newsId = mongoose.Types.ObjectId(req.body.id);

    NewsSchema.deleteOne({ _id: newsId }, (err, news) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!news.deletedCount) {
            res.status(NOT_FOUND).send({ message: CASE_NOT_FOUND_MESSAGE });
        } else {
            console.log(news);
            res.json({ message: CASE_SUCCESS_MESSAGE });
        }
    });
};
