import React, { Component } from "react";
import { Layout } from "antd";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
const { Content } = Layout;

class TzarHomeContent extends Component {
    state = {};
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    Wieża Magów powstała jako wyraz hołdu wobec twórców gry
                    Tzar: Ciężar Korony, kultowej strategii czasu rzeczywistego.
                    Celem strony poza wybudowaniem swego rodzaju pomnika pamięci
                    dla gry jest także służenie jako źródło informacji i
                    interakcji pomiędzy osobami, które wciąż grają w ten
                    wyjątkowy RTS. Zapraszam do przeglądania treści, udziału w
                    pojawiających się na stronie ankietach, wpisu do księgi
                    gości. W razie problemów można się ze mną skomunikować
                    poprzez dane zawarte w zakładce <strong>O stronie</strong>.
                    Tam znajdują się również inne informacje na temat portalu
                    e-Gildia Graczy, z którym Wieża Magów jest zrzeszona. Życzę
                    wszystkim przyjemnego przeglądania strony!
                </Content>
            </Layout>
        );
    }
}

export default TzarHomeContent;
