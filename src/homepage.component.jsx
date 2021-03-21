import React from 'react';
import './homepage.styles.scss';

const HomePage = (props) => {
    return (
        <div className={"homepage"}>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SSD</h1>
                        <span className="subtitle">КУПИТЬ</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">ПРОЦЕССОРЫ</h1>
                        <span className="subtitle">КУПИТЬ</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">МАТЕРИНСКИЕ ПЛАТЫ</h1>
                        <span className="subtitle">КУПИТЬ</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">КОМПЛЕКТУЮЩИЕ</h1>
                        <span className="subtitle">КУПИТЬ</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">СБОРКИ</h1>
                        <span className="subtitle">КУПИТЬ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;