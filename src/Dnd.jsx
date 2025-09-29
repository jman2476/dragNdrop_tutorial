import React, {useState} from 'react'
import "./Dnd.css"

export default function Dnd() {
    // vars and states
    const groups = ['group1', 'group2', 'group3']
    const [items, setItems] = useState([
        {id: 0, group: groups[0], value: 'Chicken'},
        {id: 1, group: groups[0], value: 'Monkey'},
        {id: 2, group: groups[0], value: 'Goose'},
        {id: 3, group: groups[1], value: 'Cow'},
        {id: 4, group: groups[1], value: 'Kitty'},
        {id: 5, group: groups[2], value: 'Woofer'},
        {id: 6, group: groups[2], value: 'Cuy'}
    ])
    const [dragging, setDragging] = useState()

    // helper functions
    const handleDragStart = (e) => { 
        setDragging(e.target)
        console.log(e.target.innerText)
    }
    const handleDragEnter = (e, group) => {
        // console.log(items[dragging.id - 1])
        console.log(dragging)
        setItems([...items, (items[dragging.id].group = group)])
    }

    return (
        <div className='groups'>
            {groups.map((group) => (
                <div 
                    className='group'
                    key={group}
                    onDragEnter={(e) => handleDragEnter(e,group)}
                >
                    <h1 className='title'>{group}</h1>
                    <div>
                        {items
                            .filter((item) => item.group === group)
                            .map((thing) => (
                                <div
                                    key={thing.id}
                                    id={thing.id}
                                    className='thing'
                                    draggable
                                    onDragStart={(e) => handleDragStart(e)}
                                >
                                    {thing.value}
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
