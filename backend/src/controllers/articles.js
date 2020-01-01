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
            res.status(401).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json({ status: "success", articles: articles });
        }
    });
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
                            message: "The article was created"
                        });
                }
            );
        } else {
            res.status(409).send({
                message: "The request could not be completed due to a conflict"
            });
        }
    });
};
