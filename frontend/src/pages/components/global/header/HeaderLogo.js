import React from "react";
import { Link } from "react-router-dom";

import eGildiaLogo from "../../../../img/logo/egg-logo-poziome.png";

function HeaderLogo(props) {
    return (
        <div className="logo">
            <Link to="/">
                <img src={eGildiaLogo} alt="e-Gildia Graczy" width="100%" maxwidth="300px" />
            </Link>
        </div>
    );
}

export default HeaderLogo;
