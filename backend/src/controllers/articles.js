import mongoose from "mongoose";
import ArticlesSchema from "../models/articles";
import resStatuses from "../config/resStatuses";

const { UNAUTHORIZED, NOT_FOUND, CONFLICT } = resStatuses;

function validateAllocationKey(allocationKey) {
    return ArticlesSchema.findOne({
        allocationKey: allocationKey
    }).then(result => {
        return !result;
    });
}

exports.getArticlesList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu artykułów!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono artykułów.",
        CASE_SUCCESS_MESSAGE: "Lista artykułów została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    ArticlesSchema.find({}, {}, (err, articles) => {
        if (err || !articles) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!articles) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE
            });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE,
                articles
            });
        }
    });
};

exports.getArticleById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE: "Wystąpił problem z autoryzacją!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono artykułu!",
        CASE_SUCCESS_MESSAGE:
            "Wyszukiwanie artykułu zakończyło się powodzeniem."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let articleId = mongoose.Types.ObjectId(req.body.id);
    ArticlesSchema.findOne({ _id: articleId }, (err, article) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!article) {
            res.status(NOT_FOUND).send({ message: CASE_NOT_FOUND_MESSAGE });
        } else {
            console.log(article);
            res.json({
                message: CASE_SUCCESS_MESSAGE,
                article
            });
        }
    });
};

exports.getArticleByAllocationKey = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu artykułu!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono artykułu o podanym kluczu!",
        CASE_SUCCESS_MESSAGE:
            "Wyszukiwanie artykułu zakończyło się powodzeniem."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    ArticlesSchema.findOne(
        { allocationKey: req.body.allocationKey },
        (err, article) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message: CASE_UNAUTHORIZED_MESSAGE
                });
                next(err);
            } else if (!article) {
                res.status(NOT_FOUND).send({
                    message: CASE_NOT_FOUND_MESSAGE
                });
            } else {
                console.log(article);
                res.json({
                    message: CASE_SUCCESS_MESSAGE,
                    article
                });
            }
        }
    );
};

exports.createArticle = (req, res, next) => {
    const messages = {
        CASE_CONFLICT_MESSAGE: "Artykuł został skutecznie utworzony!",
        CASE_SUCCESS_MESSAGE:
            "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!"
    };

    const { CASE_CONFLICT_MESSAGE, CASE_SUCCESS_MESSAGE } = messages;

    validateAllocationKey(req.body.allocationKey).then(valid => {
        if (valid) {
            ArticlesSchema.create(
                {
                    allocationKey: req.body.allocationKey,
                    title: req.body.title,
                    content: req.body.content,
                    author: req.body.author,
                    date: req.body.date
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

exports.modifyArticleById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas modyfikacji artykułu!",
        CASE_NOT_FOUND_MESSAGE:
            "Nie znaleziono artykułu o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Artykuł został zmodyfikowany!"
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let articleId = mongoose.Types.ObjectId(req.body.id);

    ArticlesSchema.updateOne(
        { _id: articleId },
        {
            $set: req.body
        },
        (err, article) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message: CASE_UNAUTHORIZED_MESSAGE
                });
                next(err);
            } else if (!article) {
                res.status(NOT_FOUND).send({
                    message: CASE_NOT_FOUND_MESSAGE
                });
            } else {
                console.log(article);
                res.json({ message: CASE_SUCCESS_MESSAGE, article });
            }
        }
    );
};

exports.deleteArticleById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas usuwania artykułu!",
        CASE_NOT_FOUND_MESSAGE: "Nie ma artykułu o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Wybrany artykuł został usunięty!"
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let articleId = mongoose.Types.ObjectId(req.body.id);

    ArticlesSchema.deleteOne({ _id: articleId }, (err, article) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!article.deletedCount) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE
            });
        } else {
            console.log(article);
            res.json({ message: CASE_SUCCESS_MESSAGE });
        }
    });
};
