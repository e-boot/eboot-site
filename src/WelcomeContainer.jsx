import React from 'react';

const WelcomeContainer = () => {
    return (
        <div className="welcome-container">
            <div className="content-wrapper">
                <h1>Hi,<br />I'm Elio Botas</h1>
                <p>I'm a full-stack web developer</p>
                <div className="button-group">
                    <a href="mailto:eliobotas@gmail.com">
                        <i className="fas fa-envelope"></i> Contact Me
                    </a>
                    <a href="https://linkedin.com/in/eliobotas" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
            <div className="image-wrapper">
                <div className="code-illustration">
                    <div className="code-window">
                        <div className="window-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-content">
                            <div className="code-line"><span className="keyword">const</span> developer = {`{`}</div>
                            <div className="code-line indent"><span className="property">name:</span> <span className="string">'Elio Botas'</span>,</div>
                            <div className="code-line indent"><span className="property">role:</span> <span className="string">'Full Stack Developer'</span>,</div>
                            <div className="code-line indent"><span className="property">skills:</span> [</div>
                            <div className="code-line indent-2"><span className="string">'JavaScript'</span>,</div>
                            <div className="code-line indent-2"><span className="string">'Java'</span>,</div>
                            <div className="code-line indent-2"><span className="string">'Linux Lover'</span></div>
                            <div className="code-line indent">],</div>
                            <div className="code-line indent"><span className="property">passion:</span> <span className="string">'Problem Solving'</span></div>
                            <div className="code-line">{`}`};</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeContainer;
