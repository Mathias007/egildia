import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../_store/_actions";

import { Card } from "antd";

class NewsPage extends Component {
    componentDidMount() {
        this.props.showNewsList();
    }

    render() {
        return (
            <div>
                <Card title="Card title">
                    <p
                        style={{
                            fontSize: 14,
                            color: "rgba(0, 0, 0, 0.85)",
                            marginBottom: 16,
                            fontWeight: 500
                        }}
                    >
                        Group title
                    </p>
                    <Card
                        type="inner"
                        title="Inner Card title"
                        extra={<a href="#">More</a>}
                    >
                        Inner Card content
                    </Card>
                    <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title="Inner Card title"
                        extra={<a href="#">More</a>}
                    >
                        Inner Card content
                    </Card>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showNewsList: () => dispatch(news.showNewsList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
