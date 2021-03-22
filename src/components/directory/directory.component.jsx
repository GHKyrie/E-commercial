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
                        id: 1,
                        linkUrl: 'ssd'
                    },
                    {
                        title: 'ПРОЦЕССОРЫ',
                        imageUrl: 'https://i.ibb.co/JsCngWy/CPU.jpg',
                        id: 2,
                        linkUrl: ''
                    },
                    {
                        title: 'МАТЕРИНСКИЕ ПЛАТЫ',
                        imageUrl: 'https://i.ibb.co/zZdx8n5/mat.jpg',
                        id: 3,
                        linkUrl: ''
                    },
                    {
                        title: 'КОМПЛЕКТУЮЩИЕ',
                        imageUrl: 'https://i.ibb.co/zQhcY5W/parts.jpg',
                        size: 'large',
                        id: 4,
                        linkUrl: ''
                    },
                    {
                        title: 'СБОРКИ',
                        imageUrl: 'https://i.ibb.co/vwpttRJ/sborka.jpg',
                        size: 'large',
                        id: 5,
                        linkUrl: ''
                    }
                ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( ({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;