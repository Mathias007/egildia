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
    ArticlesSchema.find({}, {}, (err, articles) => {
        if (err || !articles) {
            res.status(UNAUTHORIZED).send({
                message:
                    "Wystąpił problem z autoryzacją przy pobieraniu artykułów!"
            });
            next(err);
        } else if (!articles) {
            res.status(NOT_FOUND).send({ message: "Nie znaleziono artykułów." });
        } else {
            res.json({
                message: "Lista artykułów została znaleziona.",
                articles
            });
        }
    });
};

exports.getArticleById = (req, res, next) => {
    let articleId = mongoose.Types.ObjectId(req.body.id);
    ArticlesSchema.findOne({ _id: articleId }, (err, article) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: "Wystąpił problem z autoryzacją!"
            });
            next(err);
        } else if (!article) {
            res.status(NOT_FOUND).send({ message: "Nie znaleziono artykułu!" });
        } else {
            console.log(article);
            res.json({
                message: "Wyszukiwanie artykułu zakończyło się powodzeniem.",
                article
            });
        }
    });
};

exports.getArticleByAllocationKey = (req, res, next) => {
    ArticlesSchema.findOne(
        { allocationKey: req.body.allocationKey },
        (err, article) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message:
                        "Wystąpił problem z autoryzacją przy pobieraniu artykułu!"
                });
                next(err);
            } else if (!article) {
                res.status(NOT_FOUND).send({
                    message: "Nie znaleziono artykułu o podanym kluczu!"
                });
            } else {
                console.log(article);
                res.json({
                    message:
                        "Wyszukiwanie artykułu zakończyło się powodzeniem.",
                    article
                });
            }
        }
    );
};

exports.createArticle = (req, res, next) => {
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
                            message: "Artykuł został skutecznie utworzony!"
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

exports.modifyArticleById = (req, res, next) => {
    let articleId = mongoose.Types.ObjectId(req.body.id);

    ArticlesSchema.updateOne(
        { _id: articleId },
        {
            $set: req.body
        },
        (err, article) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message:
                        "Wystąpił problem z autoryzacją podczas modyfikacji artykułu!"
                });
                next(err);
            } else if (!article) {
                res.status(NOT_FOUND).send({
                    message:
                        "Nie znaleziono artykułu o wybranym identyfikatorze!"
                });
            } else {
                console.log(article);
                res.json({ message: "Artykuł został zmodyfikowany!", article });
            }
        }
    );
};

exports.deleteArticleById = (req, res, next) => {
    let articleId = mongoose.Types.ObjectId(req.body.id);

    ArticlesSchema.deleteOne({ _id: articleId }, (err, article) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message:
                    "Wystąpił problem z autoryzacją podczas usuwania artykułu!"
            });
            next(err);
        } else if (!article.deletedCount) {
            res.status(NOT_FOUND).send({
                message: "Nie ma artykułu o wybranym identyfikatorze!"
            });
        } else {
            console.log(article);
            res.json({ message: "Wybrany artykuł został usunięty!" });
        }
    });
};
