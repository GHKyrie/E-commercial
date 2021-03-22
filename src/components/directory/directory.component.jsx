import React from 'react';
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections:
                [
                    {
                        title: 'SSD',
                        imageUrl: 'https://svgshare.com/i/VHa.svg',
                        id: 1
                    },
                    {
                        title: 'ПРОЦЕССОРЫ',
                        imageUrl: 'https://svgshare.com/i/VJj.svg',
                        id: 2
                    },
                    {
                        title: 'МАТЕРИНСКИЕ ПЛАТЫ',
                        imageUrl: 'https://svgshare.com/i/VGo.svg',
                        id: 3
                    },
                    {
                        title: 'КОМПЛЕКТУЮЩИЕ',
                        imageUrl: 'https://svgshare.com/i/VHo.svg',
                        size: 'large',
                        id: 4
                    },
                    {
                        title: 'СБОРКИ',
                        imageUrl: 'https://svgshare.com/i/VJk.svg',
                        size: 'large',
                        id: 5
                    }
                ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( ({ title, imageUrl, size, id }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;