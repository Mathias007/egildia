import ArticlesSchema from "../models/articles";

function validateDestinyKey(destiny) {
    return ArticlesSchema.findOne({
        destiny: destiny
    }).then(result => {
        return !result;
    });
}

exports.createArticle = (req, res, next) => {
    validateDestinyKey(req.body.destiny).then(valid => {
        if (valid) {
            ArticlesSchema.create(
                {
                    destiny: req.body.destiny,
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

