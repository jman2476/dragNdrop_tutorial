import React, { useState } from "react"

export default function Dnd() {
    const groups = ['group1', 'group2', 'group3', 'noDrop']
    const initialItems = [
        { id: 1, group: 'gropu1', value: 'drag 1'},
        { id: 2, group: 'group1', value: 'drag 2'},
        { id: 3, group: 'group1', value: 'drag 3'}
    ]

    return (
        <>
            <div className="groups">
                {groups.map((group) => (
                    <div className="group">
                        <h1 className="title">{group}</h1>
                        <div>
                            {/*still working on this dont forget to continue!!!! n  */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}