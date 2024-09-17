const App = () => {
    return (
        <div>
            <nav id="navStyle">
                <ul id="ulStyle">
                    <li><a className="sectionStyle" href="#html-section">HTML</a></li>
                    <li><a className="sectionStyle" href="#css-section">CSS</a></li>
                    <li><a className="sectionStyle" href="#git-section">Git</a></li>
                    <li><a className="sectionStyle" href="#javascript-section">JavaScript</a></li>
                </ul>
            </nav>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));