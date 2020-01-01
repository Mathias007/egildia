import ArticlesSchema from "../models/articles";

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
            res.status(401).send({ message: "Wystąpił problem z autoryzacją!" });
            next(err);
        } else if(!articles) {
            res.status(404).send({message: "Nie znaleziono artykułów."})
        } else {
            res.json({ message: "Lista artykułów została znaleziona.", articles });
        }
    });
};

exports.getArticleByAllocationKey = (req, res, next) => {
    ArticlesSchema.findOne(
        { allocationKey: req.body.allocationKey },
        (err, article) => {
            if (err) {
                res.status(401).send({ message: "Wystąpił problem z autoryzacją!" });
                next(err);
            } else if (!article) {
                res.status(404).send({ message: "Nie znaleziono artykułu o podanym kluczu!" });
            } else {
                console.log(article);
                res.json({ message: "Wyszukiwanie artykułu zakończyło się powodzeniem.", article });
            }
        }
    );
};

exports.deleteArticleByAllocationKey = (req, res, next) => {
    ArticlesSchema.deleteOne(
        { allocationKey: req.body.allocationKey },
        (err, article) => {
            if (err) {
                res.status(401).send({ message: "Wystąpił problem z autoryzacją!" });
                next(err);
            } else if (!article.deletedCount) {
                res.status(404).send({ message: "Nie ma artykułu o podanym kluczu!" });
            } else {
                console.log(article);
                res.json({ message: "Wybrany artykuł został usunięty!" });
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
            res.status(409).send({
                message: "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!"
            });
        }
    });
};
