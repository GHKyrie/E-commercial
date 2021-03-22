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
                        imageUrl: 'https://i.ibb.co/z4Tg37B/ssd.jpg',
                        id: 1
                    },
                    {
                        title: 'ПРОЦЕССОРЫ',
                        imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                        id: 2
                    },
                    {
                        title: 'МАТЕРИНСКИЕ ПЛАТЫ',
                        imageUrl: 'https://i.ibb.co/zZdx8n5/mat.jpg',
                        id: 3
                    },
                    {
                        title: 'КОМПЛЕКТУЮЩИЕ',
                        imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                        size: 'large',
                        id: 4
                    },
                    {
                        title: 'СБОРКИ',
                        imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
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