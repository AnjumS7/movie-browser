import React from 'react';

const Loader = () => {
    return(
        <div>
            <div className="ui segment" style = {{marginTop: "40px"}}>
                <div className="ui active transition visible dimmer">
                    <div className="content">
                        <div className="ui indeterminate text loader">
                            Loading
                        </div>
                    </div>
                </div>
                <img src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" className="ui image"/>
            </div>
        </div>

    )
}

export default Loader;